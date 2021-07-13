import React from 'react';
import { Container } from './styles';
import { Card } from '../../../components';

export default function ProdutoCadastro() {
    return (
        <Container className="container d-flex justify-content-center align-items-center flex-column">
            <h4 className="fw-bold mb-5">Preencha os campos abaixo para cadastrar um novo produto:</h4>
            <Card edicao={true} cadastro={true} />
        </Container>
    )
}