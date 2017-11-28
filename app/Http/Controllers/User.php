<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Validator;    

class User extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function getUser(Request $request, $login, $password){
         $user = DB::table('users')
                    ->where('login', $login)
                    ->where('password', md5($password))
                    ->first();

        if($user){
            return response()->json(['status' => 'success', 'data' => $user]);
        } else {
            return response()->json(['status' => 'error', 'message' => 'there is no user with this login or password'], 400);
        }

    }   
    public function addUser(Request $request){
        $validator = Validator::make($request->input(), [
            'name' => 'required',
            'login' => 'required',
            'password' => 'required',                     
        ]);

        if ($validator->fails()) {
            $error = $this->getValidateMessages($validator->messages()->getMessages());
            return response()->json(['status' => 'error', 'message' => $error], 422);
        } else {
            $hasUser =  DB::table('users')
                            ->where('login', $request->input('login'))
                            ->first();
            if(!$hasUser){
                DB::table('users')->insert([
                    'name' => $request->input('name'), 
                    'login' => $request->input('login'), 
                    'password' => md5($request->input('password')),
                    'entry_date' => date('Y-m-d H:i'),
                    'update_at' =>  NULL,
                ]);

                return response()->json(['status' => 'success', 'message' => 'user created'], 201);
            } else {
                return response()->json(['status' => 'error', 'message' => 'there is already user with this login'], 422);
            }
        }
    }

    public function delUser(Request $request, $id){
        $hasUser = DB::table('users')
                    ->where('id', $id)
                    ->first();

        if($hasUser){ 
            DB::table('users')
            ->where('id', $id)
            ->update(['update_at' => date('Y-m-d H:i')]);
            
            return response()->json(['status' => 'success', 'message' => 'user deleted'], 200);
        } else {
            return response()->json(['status' => 'error', 'message' => 'there is no user with this ID'], 422);
        }
    }
}
