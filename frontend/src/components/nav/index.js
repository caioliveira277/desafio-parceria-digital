import React from 'react';
import { Container } from './styles';
import { useLocation, Link } from 'react-router-dom';

export default function Nav() {
    const {pathname} = useLocation();
    const routes = [
        '/produtos/cadastrar',
        '/produtos/listar'
    ]

    return (
        <Container className="d-flex align-items-center shadow-sm">
            <ul className="container d-flex align-itens-center justify-content-center mb-0">
                <li className={`me-4 ${pathname === routes[0] ? 'ativo':''}`}>
                    <Link to={routes[0]}>Cadastrar um novo produto</Link>
                </li>
                <li className={`${pathname === routes[1] ? 'ativo':''}`}>
                    <Link to={routes[1]}>Lista de produtos</Link>
                </li>
            </ul>
        </Container>
    )
}