<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Imgproduct;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // public function index()
    // {
    //     return Inertia::render('Product',[
    //         "products" => Product::all()
    //     ]);
    // }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Crud/CreateProduct',[
            "brands" => Brand::all(), "categories" => Category::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|unique:products',
            'desc' => 'required',
            'brand' => 'required',
            'category' => 'required',
            'image' => 'required',
            'image.*' => 'mimes:jpeg,png,jpg|max:2048',
        ]);
        $product = new Product();

        $product->name = $request->name;
        $product->desc = $request->desc;
        $product->brand_id = $request->brand;
        $product->category_id = $request->category;
        $product->save();

        if ($request->hasfile('image')) {
            foreach ($request->image as $image) {
                $imagesave = new Imgproduct();
                $imagesave->product_id = $product->id;
                $imageName =  $image->hashName();
                $image->move(public_path('img'), $imageName);
                $imagesave->image = $imageName;
                $imagesave->save();
            }
        }
    }

    /**
     * Display the specified resource.
     */
    // public function show()
    // {
    //     //
    // }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $post)
    {
        return Inertia::render('Crud/UpdateProduct',[
            "products" => $post, "brands" => Brand::all(), "categories" => Category::all()
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Product $post, Request $request)
    {
        $request->validate([
            'name' => 'required',
            'desc' => 'required',
            'brand' => 'required',
            'category' => 'required',
            'image.*' => 'mimes:jpeg,png,jpg|max:2048',
        ]);
        $product = $post;
$product->name = $request->name;
$product->desc = $request->desc;
$product->brand_id = $request->brand;
$product->category_id = $request->category;
$product->save();

if ($request->hasfile('image')) {
    foreach ($post->image as $imagedlt) {
        $imgdlt = Imgproduct::find($imagedlt->id);
$imgdlt->delete();
    }
    foreach ($request->image as $image) {
        $imagesave = new Imgproduct();
        $imagesave->product_id = $product->id;
        $imageName =  $image->hashName();
        $image->move(public_path('img'), $imageName);
        $imagesave->image = $imageName;
        $imagesave->save();
    }
}
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $post)
    {
    	$post->delete();
    }
}
