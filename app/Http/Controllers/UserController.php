<?php
   
namespace App\Http\Controllers;

use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\App;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\UserType;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use App\Models\Massage;
use Carbon\Carbon;

class UserController extends Controller
{
    public function __construct(){
        $this->url = env('FRONTEND_URL');
         $this->userAdmin =  UserType::where('name', 'admin')->first()->id;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function index()
    {
        return Inertia::render('Users/Index', ['url'=>$this->url]);
    }
    public function show ()
    {
        return Inertia::render('Users/Index', ['url'=>$this->url]);
    }
    public function getIndex()
    {
        $data = User::with('userType:id,name','getParentUser:id,name')->paginate(10);
        return Response::json($data, 200);
    }
    public function create()
    {
  

        $usersType = UserType::all();
        return Inertia::render('Users/Create',['usersType'=>$usersType]);
    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|max:255|unique:users',
            'password' => ['required', Rules\Password::defaults()],
            'userType' => 'required'
           ])->validate();
           //$userChief_id =User::where('type_id',  $this->userChief)->first()->id ?? 0 ;
                $user = User::create([
                    'name' => $request->name,
                    'type_id' => $request->userType,
                    'email' => $request->email,
                    'password' => Hash::make($request->password),
                    
                ]);
        return Inertia::render('Users/Index', ['url'=>$this->url]);
    }

    public function getCoordinator(Request $request)
    {
        $user =User::where('type_id', $request->id);
        return Response::json(['status' => 200,'massage' => 'users found','data' => $user->get()],200);
    }
    
    
    /**
     * Write code on Method
     *
     * @return response()
     */
    public function edit(User $User)
    {
        $usersType = UserType::all();
       //$coordinators =User::where('type_id', $this->userCoordinator )->get();
       // $chief =User::where('type_id', $this->userChief )->get();
        return Inertia::render('Users/Edit', [
            'user' => $User,'usersType'=>$usersType
        ]);
    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function update($id, Request $request)
    {
        $username =User::where('id',$id)->first()->email;
        //return Response::json($request->parent_id);
        if($username ==$request->email){
            if($request->password){
                $request->validate([
                    'name' => 'required|string|max:255',
                    'password' => [Rules\Password::defaults()],
                ]);
                $user = User::find($id)->update([
                    'name' => $request->name,
                    'password' => Hash::make($request->password),
                    'type_id' => $request->userType,
                ]);
            }
            else{
                $request->validate([
                    'name' => 'required|string|max:255',

                ]);
                $user = User::find($id)->update([
                    'name' => $request->name,
                    'type_id' => $request->userType,
                ]);
            }
        }else{
            if($request->password){
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|max:255|unique:users',
            ]);
            $user = User::find($id)->update([
                'name' => $request->name,
                'email' => $request->email,
            ]);
        }else{
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|string|max:255|unique:users',
                'password' => [Rules\Password::defaults()],
            ]);
            $user = User::find($id)->update([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
        }
        }
        
        return Inertia::render('Users/Index', ['url'=>$this->url]); 

    }
    
    
    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function destroy($id)
    {   
     
       // User::where('parent_id',$id)->update(['parent_id' =>null]);
        User::find($id)->delete();
     
        return Inertia::render('Users/Index', ['url'=>$this->url]); 
    }
    public function ban($id)
    {
        User::find($id)->update(['is_band' => 1]);
        return Inertia::render('Users/Index', ['url'=>$this->url]); 
    }
    public function unban($id)
    {
        User::find($id)->update(['is_band' => 0]);
        return Inertia::render('Users/Index', ['url'=>$this->url]); 
    }
    public function login(LoginRequest $request)
    {
        try {
             $request->authenticate();
             $user =User::where('email', $request->email)->first();
             $publickey_receiver =  User::find($user->parent_id)->public_key ?? 0;
             if( $user->device){
                $request->device = $user->device.' | '.$request->device;
             }
             $user->append(['token']);
             if(!$user->is_band){
                if( $user->type_id == $this->userChief){
                    if($request->public_key){
                        $user->update(['public_key' => $request->public_key,'device' =>  $request->device,'publickey_receiver'=> $publickey_receiver]);
                    }
                    return Response::json(['status' => 200,'massage' => 'user found','data' => $user,'token'=> Crypt::encryptString($user->first()->id)],200); 
                }else{
                    if($publickey_receiver){
                    if($request->public_key){
                        $user->update(['public_key' => $request->public_key,'device' => $request->device,'publickey_receiver'=> $publickey_receiver]);
                    }
                       return Response::json(['status' => 200,'massage' => 'user found','data' => $user,'token'=> Crypt::encryptString($user->first()->id)],200); 
                    }else
                    return Response::json(['status' => 407,'massage' => 'user found but publickey for parent notfound'],407); 

                }
             }
             else  return Response::json(['status' => 403,'massage' => 'user is band'],403);
            
             //else  return Response::json(['status' => 407,'massage' => 'user parent dont have public key'],407);
        } catch (\Throwable $th) {
              return   Response::json(['status' => 400,'massage' => 'user not found','error' =>  $th ],400);
        }
        
    }

    public function getcontact($id, Request $request)
    {
        $authUser =$this->Authorization($request);
        try {
            $coordinator=User::where('type_id', $this->userCoordinator)->where('id','!=',$authUser->id)->where('public_key','!=',null);
            //return Response::json($coordinatorUser);
            $chaef=User::where('id',  $authUser->parent_id)->where('public_key','!=',null);
            if( $authUser->type_id == $this->userChief){
                return Response::json(['status' => 200,'massage' => 'users found','sources' => [],'coordinator' => $coordinator->get(),'chaef' =>[]],200);
            }
            else{
            $user =User::where('parent_id', $id)->where('public_key','!=',null);
            return Response::json(['status' => 200,'massage' => 'users found','sources' => $user->get(),'coordinator' => $coordinator->get(),'chaef' => $chaef->get()],200);
            }
        } catch (\Throwable $th) {
             return  Response::json(['status' => 400,'massage' => 'user not found'],400);
        }
    }
        
    public function getUserMassages($id,$user, Request $request)
    
    {
     try {
       $authUser = $this->Authorization($request);
       return  Massage::where('receiver_id', '=',  $authUser->id)->where('sender_id', '=',$user)->where('is_download', '=',0)->get();
         } catch (\Throwable $th) {
            return  Response::json(['status' => 401,'massage' => 'user Authorization not found'],401);
        }
    }
    public function getMassages($id, Request $request)
    {
     try {
            $authUser = $this->Authorization($request);
            return  Massage::where('receiver_id', '=', $authUser->id)->where('is_download', '=',0)->get();
     } catch (\Throwable $th) {
                return  Response::json(['status' => 401,'massage' => 'user Authorization not found'],401);
            }
    }
    public function ackUserMassages($sender,$receiver,$date)
    {
        $date = substr($date, 0, strpos($date, "."));
            try {
                $massage =Massage::where('receiver_id', '=', $sender)->where('sender_id','=',$receiver)->where('created_at','<=',$date)->update(['is_download' => 1]);
                if($massage){
                    return Response::json(['status' => 200,'massage' => 'operation is  success file downloaded'],200);
                }else
                    return Response::json(['status' => 200,'massage' => 'operation is  success but no new massage'],200);
            } catch (\Throwable $th) {
                return $th;
                    return  Response::json(['status' => 400,'massage' => 'massage not found'],400);
            }
            
    }
    public function userLocation($id)
    {
        // date('Y-m-d H:i:s', strtotime($data['datetime']))
            try {
                $massage =Massage::where('sender_id','=',$id)->get();
                $massage = $massage->map(function ($massage) {
                    return ['lat' => floatval(Crypt::decryptString($massage->Lat)),'lng' => floatval(Crypt::decryptString($massage->lng))] ;
                });          
                 return Response::json(['status' => 200,'massage' => 'massage','data' =>   $massage],200);

            } catch (\Throwable $th) {
                return $th;
                    return  Response::json(['status' => 400,'massage' => 'massage not found'],400);
            }
    }
    public function Authorization($request){
        $token = substr($request->header('Authorization') ,7);;
        try {
            $id = Crypt::decryptString($token) ;
        $authUser = User::where('id', $id) ? User::where('id', $id)->first() :0;
        if($authUser && !$authUser->is_band){
           return $authUser;
        }
        else
        return  Response::json(['status' => 401,'massage' => 'user not Authorize'],401);
        } catch (\Throwable $th) {
            return  Response::json(['status' => 401,'massage' => 'user not Authorize'],401);
        }
        }
    }