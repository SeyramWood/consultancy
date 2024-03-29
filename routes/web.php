<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
// welcome route

Route::get('/config', function ()
{
   Artisan::call("config:clear");
   Artisan::call("cache:clear");
   Artisan::call("config:cache");
   
   return "Done";
   
});

Route::get('/', 'PageController@index');

// about route
Route::get('/about', 'PageController@about');

// services route
Route::get('/service', 'PageController@service');

// news route
Route::get('/events', 'PageController@events');

//publications route
Route::get('/publications', 'PageController@publications');

//test
Route::get("/test", 'PageController@test');

// section
Route::get("/section", 'PageController@section');

Route::get("/training", 'PageController@training');

