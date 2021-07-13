<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use App\Models\Produtos;

class ProdutosController extends Controller
{
    public function inserirProduto(Request $request) {
        $dados = $request->input('dados');
        $validator = Validator::make(array_merge($request->all(), $dados), [
            'dados' => 'required|array|min:4|max:4',
            'nome' => 'required|string|max:255',
            'marca' => 'required|string|max:255',
            'quantidade_estoque' => 'required|numeric',
            'preco' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['erros' => $validator->errors()], 404);
        }

        $novo_produto = new Produtos;
        $novo_produto->nome = $dados['nome'];
        $novo_produto->marca = $dados['marca'];
        $novo_produto->preco = $dados['preco'];
        $novo_produto->quantidade_estoque = $dados['quantidade_estoque'];

        $novo_produto->save();

        return response()->json([
            'mensagem' => 'Produco cadastrado com sucesso',
            'novo_produto' => $novo_produto
        ], 200);
    }

    public function obterPodutos(Request $request) {
        $produtos = Produtos::get();

        return response()->json([
            'mensagem' => 'Lista de produtos encontrados',
            'produtos' => $produtos
        ], 200);
    }

    public function atualizarProduto($produto_id, Request $request) {
        $validator = Validator::make(array_merge(['produto_id' => $produto_id], $request->dados), [
            'produto_id' => 'required|numeric|exists:App\Models\Produtos,id',
            'nome' => 'required|string|max:255',
            'marca' => 'required|string|max:255',
            'quantidade_estoque' => 'required|numeric',
            'preco' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['erros' => $validator->errors()], 404);
        }

        $produto = new Produtos();

        $dados = $request->input('dados');

        $produto_atualizado = $produto->atualizarProduto($produto_id, $dados);

        return response()->json([
            'mensagem' => 'Produto atualizado com sucesso',
            'produto_atualizado' => $produto_atualizado
        ], 200);
    }

    public function deletarProduto($produto_id, Request $request) {
        $validator = Validator::make(['produto_id' => $produto_id], [
            'produto_id' => 'required|numeric|exists:App\Models\Produtos,id',
        ]);

        if ($validator->fails()) {
            return response()->json(['erros' => $validator->errors()], 404);
        }

        Produtos::find($produto_id)->delete();

        return response()->json([
            'mensagem' => 'Produto deletado com sucesso',
        ], 200);
    }
}
