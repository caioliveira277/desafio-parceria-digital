import React from 'react';
import { Container } from './styles';

export default function Header () {
    return (
        <Container className="d-flex align-items-center">
            <div className="container">
                <h1>Desafio Parceria Digital</h1>
                <h2>CRUD de produtos</h2>
            </div>
        </Container>
    );

}