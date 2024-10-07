<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Brand;
use App\Models\Product;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Category;
use App\Models\Imgproduct;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory(1)->create([
        //     'name' => 'Cliffton Soenarto',
        //     'email' => 'clifftonsoenarto8@gmail.com',
        //     'email' => 'clifftonsoenarto8@gmail.com',
        // ]);

        $this->call([CategorySeeder::class, BrandSeeder::class, UserSeeder::class]);


        $products = Product::factory(100)->recycle([
            Category::all(),
            Brand::all()
        ])->create();
        foreach ($products as $product) {
            Imgproduct::factory()->create(['product_id' => $product->id]);
        }
        Imgproduct::factory(150)->recycle(Product::all())->create();
    }
}
