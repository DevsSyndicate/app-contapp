<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\Account;

class Movement extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'date', 'type', 'amount', 'category_id', 'account_id'];

    /**
     * Movement category
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Movement account
     */
    public function account()
    {
        return $this->belongsTo(Account::class);
    }
}
