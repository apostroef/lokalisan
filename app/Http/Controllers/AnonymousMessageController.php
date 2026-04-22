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
                function ($attribute, $value, $fail) {
                    if (str_word_count($value) > 300) {
                        $fail('The message cannot exceed 300 words.');
                    }
                },
            ],
        ]);

        AnonymousMessage::create([
            'content' => $request->content,
            'is_approved' => false
        ]);

        return redirect()->back()->with('success', 'Message sent! Waiting for approval.');
    }
}
