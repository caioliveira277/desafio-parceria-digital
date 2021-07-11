import React from 'react';
import { Container } from './styles';

export default function Card({
    nome,
    marca,
    preco,
    quantidade,
    data_cadastro,
    data_atualizacao,
}) {
    return (
        <Container>
            <fieldset>
                <label className="fw-bold mb-1">Nome:</label>
                <input type="text" value={nome} className="form-control" placeholder="Informe o nome do produto" />
            </fieldset>
            <fieldset>
                <label className="fw-bold mb-1">Marca:</label>
                <input type="text" value={marca} className="form-control" placeholder="Informe o marca do produto" />
            </fieldset>
            <fieldset>
                <label className="fw-bold mb-1">Preço:</label>
                <input type="text" value={preco} className="form-control" placeholder="Informe o preço do produto" />
            </fieldset>
            <fieldset>
                <label className="fw-bold mb-1">Quantidade:</label>
                <input type="text" value={quantidade} className="form-control" placeholder="Informe a quantidade em estoque" />
            </fieldset>
            <div>
                <p className="fw-bold mb-1">Data de cadastro</p>
                <p>{data_cadastro}</p>
            </div>
            <div>
                <p className="fw-bold mb-1">Data de atualização</p>
                <p>{data_atualizacao}</p>
            </div>
        </Container>
    )
}