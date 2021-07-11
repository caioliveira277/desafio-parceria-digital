<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Produtos extends Model
{
    protected $table = 'Produtos';
    protected $casts = [
        'created_at' => 'datetime:d/m/Y H:i',
        'updated_at' => 'datetime:d/m/Y H:i',
    ];

    public function atualizarProduto(int $produto_id, array $dados){
        $produto = $this::firstWhere('id', $produto_id);

        foreach ($produto->attributes as $chave => $valor) {
            if(isset($dados[$chave])){
                $produto[$chave] = $dados[$chave];
            }
        }
        $produto->save();

        return $produto;
    }
}
