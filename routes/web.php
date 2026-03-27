<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('homepage.tsx');
})->name('homepage');

Route::get('/experience', function () {
    return Inertia::render('experience.tsx');
})->name('experience');

Route::get('/rwfd', function () {
    return Inertia::render('projects/Rwfd.tsx');
})->name('rwfd');

Route::get('/tedx-ua', function () {
    return Inertia::render('projects/TEDX.tsx');
})->name('tedx-ua');

Route::get('/beyond-the-bite', function () {
    return Inertia::render('projects/BeyondBite.tsx');
})->name('beyond-the-bite');

Route::get('/gallery', function () {
    return Inertia::render('gallery.tsx');
})->name('gallery');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
