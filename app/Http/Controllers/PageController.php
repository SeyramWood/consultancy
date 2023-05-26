<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    // welcome 
    public function index()
    {
        return Inertia::render('Welcome');
    }

    // about
    public function about()
    {
        return Inertia::render('About');
    }

    // services
    public function service()
    {
        return Inertia::render('Service');
    }

    // news
    public function events()
    {
        return Inertia::render('Events');
    }

    // publication
    public function publications()
    {
        return Inertia::render('Publications');
    }

     public function training()
    {
        return Inertia::render('Training');
    }

    // section
    public function section()
    {
        return Inertia::render('Section');
    }

     //test
     public function test()
    {
        return Inertia::render('Test');
    }

}

