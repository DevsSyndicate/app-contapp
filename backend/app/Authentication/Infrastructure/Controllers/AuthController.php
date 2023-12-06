<?php

namespace App\Authentication\Infrastructure\Controllers;

use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use App\Core\Infrastructure\Controllers\Controller;
use App\Users\Domain\Models\User;

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

        $token = $request->user()->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
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
