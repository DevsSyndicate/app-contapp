<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Authentication\Infrastructure\Controllers\AuthController;
use App\Accounts\Infrastructure\Controllers\AccountsController;
use App\Categories\Infrastructure\Controllers\CategoriesController;
use App\Movements\Infrastructure\Controllers\MovementsController;
use App\Users\Infrastructure\Controllers\UserController;
use App\Analysis\Infrastructure\Controllers\AnalysisController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/', function (Request $request) {
    return 'ContApp API';
});

// Auhthentication process
Route::post('login', [AuthController::class, 'login']);

// Authenticated routes
Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('accounts', AccountsController::class);
    Route::apiResource('categories', CategoriesController::class);
    Route::apiResource('movements', MovementsController::class);
    Route::get('analysis/monthly', [AnalysisController::class, 'getMonthlyAnalysis']);
    Route::get('user', [UserController::class, 'get']);
    Route::post('logout', [AuthController::class, 'logout']);
});