<?php

namespace App\Users\Infrastructure\Controllers;

use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Request;
use App\Core\Infrastructure\Controllers\Controller;
use App\Users\Domain\Models\User;

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
