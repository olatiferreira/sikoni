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
}
