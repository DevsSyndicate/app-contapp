<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AccountsController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\MovementsController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AnalysisController;

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
    return 'ngBiblio API';
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