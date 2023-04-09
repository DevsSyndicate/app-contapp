<?php

namespace App\Http\Controllers;

use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Get current user
     */
    public function get()
    {
        $user = auth()->user();

        return response()->json([
            'data' => $user,
        ], Response::HTTP_OK);
    }
}
