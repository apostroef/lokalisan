<?php

namespace App\Http\Controllers;

use App\Models\AnonymousMessage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AnonymousMessageController extends Controller
{
    public function index(){
        $messages = AnonymousMessage::where('is_approved',true)
        ->latest()
        ->get();

        return Inertia::render('messages', ['messages' => $messages]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'content' => [
                'required',
                'string',
                // Custom rule to ensure max 300 words
                function ($attribute, $value, $fail) {
                    if (str_word_count($value) > 300) {
                        $fail('The message cannot exceed 300 words.');
                    }
                },
            ],
        ]);

        AnonymousMessage::create([
            'content' => $request->content,
            'is_approved' => true, // Requires your manual approval in the database
        ]);

        return redirect()->back()->with('success', 'Message sent! Waiting for approval.');
    }
}
