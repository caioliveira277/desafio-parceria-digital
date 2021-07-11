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
`;