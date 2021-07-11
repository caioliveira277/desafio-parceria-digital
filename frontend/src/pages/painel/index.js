import React from 'react';
import {
    Header,
    Nav 
} from '../../components';
import ProdutoLista from './produtoLista'

export default function Painel() {
    return (
        <>
            <Header />
            <Nav />
            <ProdutoLista />
        </>
    )
}