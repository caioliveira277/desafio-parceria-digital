import React from 'react';
import { useLocation } from 'react-router-dom';
import {
    Header,
    Nav 
} from '../../components';
import { Main } from './styles';
import ProdutoLista from './produtoLista';
import ProdutoCadastro from './produtoCadastro';

export default function Painel() {
    const {pathname} = useLocation();
    return (
        <>
            <Header />
            <Nav />
            <Main className="mt-4">
                {
                    pathname === '/produtos/cadastrar' ? (
                        <ProdutoCadastro />
                    ) : (
                        <ProdutoLista />
                    )
                }
            </Main>
        </>
    )
}