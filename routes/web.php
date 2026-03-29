<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('homepage');
})->name('homepage');

Route::get('/experience', function () {
    return Inertia::render('experience');
})->name('experience');

Route::get('/messages', function () {
    return Inertia::render('messages');
})->name('messages');

Route::get('/rwfd', function () {
    return Inertia::render('projects/Rwfd');
})->name('rwfd');

Route::get('/tedx-ua', function () {
    return Inertia::render('projects/TEDX');
})->name('tedx-ua');

Route::get('/beyond-the-bite', function () {
    return Inertia::render('projects/BeyondBite');
})->name('beyond-the-bite');

Route::get('/gallery', function () {
    return Inertia::render('gallery');
})->name('gallery');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
