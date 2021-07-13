import React from 'react';
import { Container, InputLabel } from './styles';
import SearchIcon from '../../../assets/icons/search.svg'
import { Card } from '../../../components';

export default function ProdutoLista() {
    return (
        <Container className="container d-flex justify-content-center">
            <div>
                <InputLabel className="d-flex flex-column">
                    <label htmlFor="busca" className="fw-bold mb-2">Buscar produtos</label>
                    <fieldset className="d-flex">
                        <input type="text" id="busca" className="form-control" placeholder="Buscar" />
                        <button className="btn d-flex flex-column justify-content-center">
                            <img src={SearchIcon} alt="Icone de busca" />
                        </button>
                    </fieldset>
                    <small className="text-muted mt-1">Encontre produtos por nome, marca ou preço</small>
                </InputLabel>
                <Card
                    nome="Mini Hub USB Bright, 4 Portas 2.0, Preto"
                    marca="Bright"
                    preco="24.90"
                    quantidade="02"
                    data_cadastro="11/07/2021 11:11"
                    data_atualizacao="11/07/2021 11:11"
                    edicao={false}
                />
            </div>
        </Container>
    )
}