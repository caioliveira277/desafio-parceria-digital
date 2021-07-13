import React, { useState, useEffect } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { Container, Button, BoxPreco, BotaoCadastro } from './styles';
import closeIcon from '../../assets/icons/close.svg';
import checkIcon from '../../assets/icons/check.svg';
import editIcon from '../../assets/icons/edit.svg';
import trashIcon from '../../assets/icons/trash.svg';
import api from '../../adapters/xhr/api';

export default function Card({
    id,
    nome,
    marca,
    preco = 0,
    quantidade,
    data_cadastro,
    data_atualizacao,
    edicao,
    cadastro = false
}) {
    const [edicaoState, setEdicaoState] = useState(edicao);
    const [attrsState, setAttrsState] = useState({});
    const [dadosState, setDadosState] = useState({
        nome: nome,
        marca: marca,
        preco: preco,
        quantidade_estoque: quantidade,
    });
    const [removidoState, setRemovidoState] = useState(false);
    
    useEffect(() => {
        if (!edicaoState) {
            setAttrsState({
                disabled: 'disabled'
            });
        } else {
            setAttrsState({});
        }
    }, [edicaoState]);

    function manipularAlteracaoCampo({target: {name, value}}) {
        let valor = value;

        if(name === "quantidade_estoque") {
            valor = parseInt(value) || 0;
        }
        setDadosState({
            ...dadosState,
            [name]: valor
        });
    }

    function salvarProduto(event) {
        event.preventDefault();

        if(cadastro) {
            api.post(`/produto`, {dados: dadosState})
                .then(() => {
                    setDadosState({
                        nome: '',
                        marca: '',
                        preco: 0,
                        quantidade_estoque: 0,
                    })
                })
        } else {
            api.put(`/produto/${id}`, {dados: dadosState})
                .then(() => {
                    setEdicaoState(false);
                })
                .catch(() => {
                    setEdicaoState(true);
                });
        }
            
    }

    function apagarProduto() {
        api.delete(`/produto/${id}`)
        .then(() => {
            setRemovidoState(true);
        })
    }
    return removidoState ? null : (
        <Container className={`card-custom ${edicaoState ? 'editavel':''}`} onSubmit={salvarProduto}>
            <div className="content">
                <div className={`d-flex justify-content-end ${cadastro ? 'd-none':''}`}>
                    <Button type="button" className={`btn shadow d-flex justify-content-center align-itens-center me-3 ${edicaoState ? 'd-none':''}`} onClick={() => setEdicaoState(true)}>
                        <img src={editIcon} alt="Icone de edição azul" height="100%" />
                    </Button>
                    <Button type="submit" className={`btn shadow d-flex justify-content-center align-itens-center me-3 ${!edicaoState ? 'd-none':''}`}>
                        <img src={checkIcon} alt="Icone de confirmação verde" height="100%" />
                    </Button>
                    <Button type="button" className={`btn shadow d-flex justify-content-center align-itens-center ${edicaoState ? 'd-none':''}`} onClick={apagarProduto}>
                        <img src={trashIcon} alt="Icone de apagar vermelho" height="100%" />
                    </Button>
                    <Button type="button" className={`btn shadow d-flex justify-content-center align-itens-center ${!edicaoState ? 'd-none':''}`} onClick={() => setEdicaoState(false)}>
                        <img src={closeIcon} alt="Icone de cancelar vermelho" height="100%" />
                    </Button>
                </div>
                <fieldset>
                    <label className="fw-bold mb-1">Nome:</label>
                    <input type="text" required name="nome" {...attrsState} value={dadosState.nome} className="form-control" placeholder="Informe o nome do produto" onChange={manipularAlteracaoCampo} />
                </fieldset>
                <fieldset>
                    <label className="fw-bold mb-1">Marca:</label>
                    <input type="text" required name="marca" {...attrsState} value={dadosState.marca} className="form-control" placeholder="Informe o marca do produto" onChange={manipularAlteracaoCampo} />
                </fieldset>
                <fieldset className={!edicaoState ? 'd-none':''}>
                    <label className="fw-bold mb-1">Preço:</label>
                    <CurrencyInput
                        placeholder="Informe o preço do produto"
                        defaultValue={dadosState.preco}
                        decimalsLimit={2}
                        className="form-control"
                        prefix="R$ "
                        required
                        onValueChange={(value) => setDadosState({...dadosState, preco: value})}
                    />
                </fieldset>
                <fieldset>
                    <label className="fw-bold mb-1">Quantidade:</label>
                    <input type="text" required name="quantidade_estoque" {...attrsState} value={dadosState.quantidade_estoque} className="form-control" placeholder="Informe a quantidade em estoque" onChange={manipularAlteracaoCampo} />
                </fieldset>
                <div className={!edicaoState || cadastro ? 'd-none':''}>
                    <p className="fw-bold mb-1">Data de cadastro</p>
                    <p>{data_cadastro}</p>
                </div>
                <div className={!edicaoState || cadastro ? 'd-none':''}>
                    <p className="fw-bold mb-1">Data de atualização</p>
                    <p>{data_atualizacao}</p>
                </div>
                <BoxPreco className="d-inline-block">
                <p className="fw-bold mb-0">Preço:</p>
                <p className="mb-0 valor">R$ {dadosState.preco}</p>
            </BoxPreco>
            </div>
            {
                cadastro ? (
                    <BotaoCadastro type="submit" className="btn ms-auto d-block">
                        Cadastrar produto
                    </BotaoCadastro>
                ) : null
            }
        </Container>
    )
}