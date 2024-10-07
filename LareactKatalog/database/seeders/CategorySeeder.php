<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create([
            'name' => 'MagicCom'
        ]);
        Category::create([
            'name' => 'Kipas Angin'
        ]);
        Category::create([
            'name' => 'Kompor'
        ]);
        Category::create([
            'name' => 'Mesin Cuci'
        ]);
        Category::create([
            'name' => 'Kulkas'
        ]);
    }
}
