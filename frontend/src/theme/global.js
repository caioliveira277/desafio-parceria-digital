import { createGlobalStyle } from 'styled-components';

export const theme = {
	black: '#2e2e2e',
	white: '#fafafa'
};

export const GlobalStyle = createGlobalStyle`
	* {
		font-family: 'Roboto', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	body {
		background: #fafafa;
		overflow-x: hidden;
	}
	input.form-control{
		&:focus {
			border-color: #2E2E2E;
			box-shadow: none;
		}
	}
`;