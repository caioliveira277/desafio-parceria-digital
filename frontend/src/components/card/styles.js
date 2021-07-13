import styled from 'styled-components';

export const Container = styled.form`
    width: 100%;
    max-width: 360px;
    .content {
        border-radius: 5px;
        padding: 10px;
        border: 1px solid ${({theme}) => theme.black};
        position: relative;
        padding-bottom: 45px;
    
        fieldset {
            margin-bottom: 15px;
            input {
                transition: none;
                &:disabled {
                    background: transparent;
                    border: none;
                    cursor: text;
                }
            }
        }
    }
`;

export const Button = styled.button`
    width: 35px;
    height: 35px;
    background: #fff;
    border-radius: 50%;
    transition: all 200ms ease;
    &:hover {
        transform: scale(1.2);
    }
`;

export const BoxPreco = styled.span`
    border-radius: 3px;
    background: #D4FFD9;
    padding: 3px 8px;
    color: ${({theme}) => theme.black};
    bottom: -10px;
    right: -10px;
    position: absolute;
    .valor {
        padding: 0 20px;
        font-family: 'Roboto Slab', serif;
        font-size: 18px;
    }
`;

export const BotaoCadastro  = styled.button`
    background: ${({theme}) => theme.black};
    color: #fff;
    margin-top: 50px;
    &:hover {
        color: #fff;
    }
`;