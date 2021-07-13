import React, { useState, useEffect } from 'react';
import { Container, InputLabel } from './styles';
import SearchIcon from '../../../assets/icons/search.svg'
import { Card } from '../../../components';
import api from '../../../adapters/xhr/api';

export default function ProdutoLista() {
    const [listaProdutosState, setListaProdutosState] = useState([]);
    const [produtosFiltradosState, setProdutosFiltradosState] = useState([]);
    const [buscaState, setBuscarState] = useState('');

    useEffect(() => {
        api.get('produtos')
            .then(({data}) => {
                const produtos = data.produtos;
                setListaProdutosState(produtos);
                setProdutosFiltradosState(produtos);
            })
    }, []);

    function manipularBusca({target: {value}}) {
        setBuscarState(value);
        if(!value) return setProdutosFiltradosState(listaProdutosState);
        const produtosFiltrados = listaProdutosState.filter((produto) => {
            let nome = produto.nome.toLowerCase();
            let marca = produto.marca.toLowerCase();

            if(nome.includes(value) || marca.includes(value)) {
                return true;
            } else {
                return false;
            }
        });
        setProdutosFiltradosState(produtosFiltrados);
    }
    return (
        <Container className="container d-flex justify-content-center">
            <div>
                <InputLabel className="d-flex flex-column">
                    <label htmlFor="busca" className="fw-bold mb-2">Buscar produtos</label>
                    <fieldset className="d-flex">
                        <input type="text" value={buscaState} id="busca" className="form-control" placeholder="Buscar" onChange={manipularBusca} />
                        <button className="btn d-flex flex-column justify-content-center">
                            <img src={SearchIcon} alt="Icone de busca" />
                        </button>
                    </fieldset>
                    <small className="text-muted mt-1">Encontre produtos por nome, marca ou preço</small>
                </InputLabel>
                {
                   produtosFiltradosState.map((produto) => {
                       return (
                            <Card
                                key={produto.id}
                                id={produto.id}
                                nome={produto.nome}
                                marca={produto.marca}
                                preco={produto.preco}
                                quantidade={produto.quantidade_estoque}
                                data_cadastro={produto.created_at}
                                data_atualizacao={produto.updated_at}
                                edicao={false}
                            />
                       )
                   })
                }
            </div>
        </Container>
    )
}