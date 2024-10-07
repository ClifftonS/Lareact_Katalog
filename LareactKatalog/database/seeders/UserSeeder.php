<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => "Cliffton Soenarto",
            'email' => "clifftonsoenarto7@gmail.com",
            'email_verified_at' => now(),
            'is_admin' => true,
            'telpnum' => "082145634674",
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10),
        ]);
        User::factory(2)->create();
    }
}
