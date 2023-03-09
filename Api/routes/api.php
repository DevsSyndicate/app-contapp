<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\MovementsController;
use App\Http\Controllers\StatisticsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Login and register
Route::post('/login', [AuthController::class, 'login'])->name('auth.login');

// Dashboard
Route::get('/dashboard/global-position', [DashboardController::class, 'globalPosition'])->name('dashboard.globalPosition');
Route::post('/dashboard/global-position', [DashboardController::class, 'updateGlobalPosition'])->name('dashboard.updateGlobalPosition');

// Categories
Route::get('/categories', [CategoriesController::class, 'index'])->name('categories.index');
Route::get('/categories/select', [CategoriesController::class, 'select'])->name('categories.select');
Route::get('/categories/{id}', [CategoriesController::class, 'show'])->name('categories.show');
Route::post('/categories', [CategoriesController::class, 'store'])->name('categories.store');
Route::post('/categories/{id}', [CategoriesController::class, 'update'])->name('categories.update');
Route::delete('/categories/{id}', [CategoriesController::class, 'delete'])->name('categories.delete');

// Movements
Route::get('/movements', [MovementsController::class, 'index'])->name('movements.index');
Route::get('/movements/{id}', [MovementsController::class, 'show'])->name('movements.show');
Route::post('/movements', [MovementsController::class, 'store'])->name('movements.store');
Route::post('/movements/{id}', [MovementsController::class, 'update'])->name('movements.update');
Route::delete('/movements/{id}', [MovementsController::class, 'delete'])->name('movements.delete');

// Statistics
Route::get('/statistics/entries-expenses-month', [StatisticsController::class, 'entriesExpensesMonth'])->name('statistics.entriesExpensesMonth');
Route::get('/statistics/entries-expenses-current-month', [StatisticsController::class, 'entriesExpensesCurrentMonth'])->name('statistics.entriesExpensesCurrentMonth');
