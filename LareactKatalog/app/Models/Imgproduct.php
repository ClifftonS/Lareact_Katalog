<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Imgproduct extends Model
{
    use HasFactory,SoftDeletes;
    protected $fillable = [
        'image',
    ];
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}
