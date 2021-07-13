import styled from 'styled-components';

export const Container = styled.header`
    background: ${({theme}) => theme.black};
    width: 100vw;
    min-height: 40vh;

    h1, h2 {
        color: ${({theme}) => theme.white};
        font-weight: bold;
    }
    h1 {
        font-size: 58px;
    }
    h2 {
        font-size: 48px;
    }
`;