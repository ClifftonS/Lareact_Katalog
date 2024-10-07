<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Brand;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

class DashboardController extends Controller
{
    public function index(Request $request){
        $query = Product::latest();

        if ($request->has('search')) {
            $query->where('name', 'like', '%' . $request->search . '%');
        }

        if ($request->has('brand') && $request->brand != "") {
            $query->where('brand_id', $request->brand);
        }

        if ($request->has('category') && $request->category != "") {
            $query->where('category_id', $request->category);
        }

        $products = $query->paginate(12)->withQueryString();
        return Inertia::render('Maindashboard', [
            "products" => $products,  'isAdmin' => Gate::allows('admin'), "brands" => Brand::all(), "categories" => Category::all()
        ]);
    }
}
