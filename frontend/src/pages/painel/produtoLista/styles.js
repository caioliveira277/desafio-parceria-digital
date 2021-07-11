import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 400px;
`;

export const InputLabel = styled.div`
    label {
        font-size: 18px;
        color: ${({theme}) => theme.black};
    }
    fieldset {
        overflow: hidden;
        height: 40px;
        border-radius: 3px;
        border: 0.5px solid #2E2E2E;
        input {
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
            border-radius: 0;
            &:focus {
                border-color: #2E2E2E;
                box-shadow: none;
            }
        }
        button {
            width: 40px;
            height: 40px;
            background: ${({theme}) => theme.black};
            border-radius: 0;
            margin-left: -1px;
        }
    }
`;