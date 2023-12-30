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
use App\Models\Hospital;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class HospitalController extends Controller

{
    public function index(Request $request){
        try {
            $authUser = $this->Authorization($request);
            $data=  Hospital::get();
            return  Response::json(['status' => 200,'data' =>$data ,'massage' => 'hospital List'],200);

     } catch (\Throwable $th) {
                return  Response::json(['status' => 401,'massage' => 'user Authorization not found'],401);
            }
    }

    
    public function getProfile(Request $request){
        $profile_no = $request->profile_no;
        $hospital_code = $request->hospital_code;
        if(!$profile_no){
            return  Response::json(['status' => 301,'massage' => 'profile no is required'],301);
        }
        if(!$hospital_code){
            return  Response::json(['status' => 301,'massage' => 'hospital code is required'],301);
        }
        
        try {
            $authUser = $this->Authorization($request);
      
            $connectionInfo = Hospital::where('hospital_code', $hospital_code)->first();

            // التحقق مما إذا كان هناك اتصال موجود
            if ($connectionInfo) {
                $driver = $connectionInfo->driver;
                $host = $connectionInfo->host;
                $port = $connectionInfo->port;
                $database = $connectionInfo->database_name;
                $username = $connectionInfo->username;
                $password = $connectionInfo->password;
            
                // القيام بما تحتاج إليه مع معلومات الاتصال...
            } else {
                return  Response::json(['status' => 401,'massage' => 'dont any connection found'],401);
            }
            config([
                'database.connections.custom_connection.driver' => $driver,
                'database.connections.custom_connection.host' => $host,
                'database.connections.custom_connection.port' => $port,
                'database.connections.custom_connection.database' => $database,
                'database.connections.custom_connection.username' => $username,
                'database.connections.custom_connection.password' => $password,
                'database.connections.custom_connection.charset' => 'utf8mb4', // or 'utf8' depending on your requirements
                'database.connections.custom_connection.collation' => 'utf8mb4_unicode_ci', // or 'utf8_general_ci' depending on your requirements
            ]);



            $data = DB::connection('custom_connection')
            ->table('profile')
            ->join('results', 'profile.id', '=', 'results.profile_id')
            ->join('doctor_reslts', 'profile.id', '=', 'doctor_reslts.profile_id')
            ->where('profile.no', $profile_no) // Adjust the condition based on your needs
            ->select('profile.*','doctor_reslts.*','results.*' /*... other columns*/)
            ->get();

            if($data){
                $ipAddress = $request->ip();
                $method = $request->method();
                $uri = $request->path();
                $parameters = $request->all();
         
                Log::channel('apiprofile')->info('Request Information', [
                        'ip_address' => $ipAddress,
                        'method' => $method,
                        'uri' => $uri,
                        'parameters' => $parameters,
                    ]);
    
    
                return  Response::json(['status' => 200,'data' =>$data ,'massage' => 'profile found'],200);
            }else{
                return  Response::json(['status' => 401,'massage' => 'Profile not found'],401);
            }

     } catch (\Throwable $th) {
                return  Response::json(['status' => 401,'massage' => 'user not Authorize or Falid'],401);
            }
    }
    public function Authorization($request){
        $token = substr($request->header('Authorization') ,7);
        $id = Crypt::decryptString($token) ;
        $authUser = User::where('id', $id) ? User::where('id', $id)->first() :0;
        if($authUser && !$authUser->is_band){
           return $authUser;
        }
        else {
            return 0;
        }
    }
}