<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProdutosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('Produtos')->insert([
            'nome' => 'Abraçadeira Nylon 3X100MM com 100 Preto',
            'marca' => 'MD9',
            'preco' => 6.90,
        ]);
        DB::table('Produtos')->insert([
            'nome' => 'Mini Hub USB Bright, 4 Portas 2.0, Preto',
            'marca' => 'Bright',
            'preco' => 24.90,
        ]);
        DB::table('Produtos')->insert([
            'nome' => 'Alicate para Crimpar ALC01',
            'marca' => 'HYX',
            'preco' => 44.59,
        ]);
        DB::table('Produtos')->insert([
            'nome' => 'Splitter HDMI 4 Portas 1.4 3D',
            'marca' => 'C3 Tech',
            'preco' => 149.90,
        ]);
        DB::table('Produtos')->insert([
            'nome' => 'Conector MD9 RJ-45 Pacote com 20 Unidades 8 Vias',
            'marca' => 'MD9',
            'preco' => 7.90,
        ]);
    }
}
