<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Validator;    

class Ticket extends Controller
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
    public function getTickets(){
        $ticket = DB::table('tickets')
        ->orderBy('id')
        ->distinct()->get();
        return response()->json(['data' => $ticket]);
    }    

    public function countTickets(){
       $ticket = DB::table('tickets')        
        ->count();
        return response()->json(['data' => $ticket]);
    }  

    public function addTickets(Request $request){
        $validator = Validator::make($request->input(), [
            'name' => 'required',
            'email' => 'required',
            'descryption' => 'required',                     
        ]);

        if ($validator->fails()) {
            $error = $this->getValidateMessages($validator->messages()->getMessages());
            return response()->json(['status' => 'error', 'message' => $error], 422);
        } else {
            
            DB::table('tickets')->insert([
                'name' => $request->input('name'), 
                'email' => $request->input('email'), 
                'descryption' => $request->input('descryption'),
                'status' => 'Em processamento',
                'entry_date' => date('Y-m-d H:i'),
                'update_at' =>  NULL,
            ]);

            return response()->json(['status' => 'success', 'message' => 'ticket created'], 201);
        } 
    }
}

