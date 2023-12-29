<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Log;

class LogRequests
{
    public function handle($request, Closure $next)
    {
        // Log request details
        $this->logRequest($request);

        return $next($request);
    }

    private function logRequest($request)
    {
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

   
        

    }
}
