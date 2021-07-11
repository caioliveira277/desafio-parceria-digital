<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ProdutosController;

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

Route::post('/produto', [ProdutosController::class, 'inserirProduto']);
Route::get('/produtos', [ProdutosController::class, 'obterPodutos']);
Route::put('/produto/{produto_id}', [ProdutosController::class, 'atualizarProduto']);
Route::delete('/produto/{produto_id}', [ProdutosController::class, 'deletarProduto']);
