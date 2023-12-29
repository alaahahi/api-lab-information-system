<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hospital extends Model
{
    use HasFactory;
    protected $table = 'hospital';
    protected $fillable = [
        'id',
        'name',
        'hospital_code',
        'created_at',
        'updated_at',
        'note',
        'url'
    ];
    protected $hidden = [
        'id',
        'note',
        'updated_at',
        'created_at',
        'password',
        'username',
        'database_name',
        'port',
        'host',
        'driver'

    ];
}