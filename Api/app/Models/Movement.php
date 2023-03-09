<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;

class Movement extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'type',
        'category',
        'amount',
        'date'
    ];

    /**
     * Get the category associated with the movement.
     */
    public function category()
    {
        return $this->belongsTo(Category::class, 'category');
    }
}
