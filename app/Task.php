<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['name'];

    public function user(){
        return $this->belongsto(\App\User::class);
    }
}
