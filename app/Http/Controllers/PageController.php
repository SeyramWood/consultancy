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
    public function news()
    {
        return Inertia::render('News');
    }

    // publication
    public function publications()
    {
        return Inertia::render('Publications');
    }
}

