<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GlobalPosition extends Model
{
    use HasFactory;

    /**
     * The table name
     *
     * @var String
     */
    protected $table = 'global_position';

    /**
     * Disable table primary key
     *
     * @var null
     */
    protected $primaryKey = null;

    /**
     * Disable table timestamps
     *
     * @var boolean
     */
    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var Array
     */
    protected $fillable = [
        'amount'
    ];
}
