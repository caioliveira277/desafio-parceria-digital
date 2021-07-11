import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 360px;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid ${({theme}) => theme.black};

    fieldset {
        margin-bottom: 15px;
    }
`;