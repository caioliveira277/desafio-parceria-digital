import React from 'react';
import {
    Header,
    Nav 
} from '../../components';
import ProdutoLista from './produtoLista';
import { Main } from './styles';

export default function Painel() {
    return (
        <>
            <Header />
            <Nav />
            <Main className="mt-4">
                <ProdutoLista />
            </Main>
        </>
    )
}