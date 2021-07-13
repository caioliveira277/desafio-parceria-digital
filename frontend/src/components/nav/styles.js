import styled from 'styled-components';

export const Container = styled.nav`
    background: #fff;
    width: 100vw;
    height: 50px;
    
    ul {
        list-style: none;
        font-size: 18px;

        li.ativo {
            a {
                text-decoration: none;
                color: ${({theme}) => theme.black};
                font-weight: bold;
            }
        }
    }
`;