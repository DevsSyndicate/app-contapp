<?php

namespace App\Http\Controllers;

use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use App\Models\User;

class AuthController extends Controller
{
    /**
     * Authenticate a user
     */
    public function login(Request $request)
    {
        // If authentication fails
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response([
                'error' => 'Invalid credentials'
            ], Response::HTTP_UNAUTHORIZED);
        }

        // If works, return token and cookie
        $token = $request->user()->createToken('token')->plainTextToken;
        $cookie = cookie('jwt', $token, 60 * 24);

        return response([
            'jwt' => $token
        ])->withCookie($cookie);
    }

    /**
     * Perform logout
     */
    public function logout()
    {
        $cookie = Cookie::forget('jwt');

        return response(['message' => 'success'])->withCookie($cookie);
    }

    /**
     * Returns authenticated user
     */
    public function user(Request $request)
    {
        return $request->user();
    }
}
