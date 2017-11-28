<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
	return $router->app->version();
});


$router->group(['middleware' => 'auth', 'cors'], function () use ($router) {

	// Test API
	$router->get('/ping', function () use ($router) {
		return response()->json("Pong!", 418);    
	});

	// Tickets
	$router->get('/ticket', 'Ticket@getTickets');

	//Users	
	$router->get('/user/{login}/{password}', 'User@getUser');
	$router->post('/user', 'User@addUser');
});