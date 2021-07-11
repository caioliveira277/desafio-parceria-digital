import React from 'react';
import { Container } from './styles';

export default function Nav() {
    return (
        <Container className="d-flex align-items-center shadow-sm">
            <ul className="container d-flex align-itens-center justify-content-center mb-0">
                <li className="me-4">
                    <a href="#">Cadastrar um novo produto</a>
                </li>
                <li>
                    <a href="#">Lista de produtos</a>
                </li>
            </ul>
        </Container>
    )
}