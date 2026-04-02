<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AnonymousMessage extends Model
{
    protected $fillable = ['content','is_approved'];
}
