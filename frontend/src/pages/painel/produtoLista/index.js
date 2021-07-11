import React from 'react';
import { Container, InputLabel } from './styles';
import SearchIcon from '../../../assets/icons/search.svg'
import { Card } from '../../../components';

export default function ProdutoLista() {
    return (
        <Container className="container d-flex justify-content-center pt-4">
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
                <Card />
            </div>
        </Container>
    )
}