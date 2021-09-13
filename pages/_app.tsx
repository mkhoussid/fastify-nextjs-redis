import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { AppProps } from 'next/dist/shared/lib/router/router';
import Wrapper from 'components/Wrapper';

const App = React.memo(({ Component, ...pageProps }: AppProps) => {
	return (
		<ThemeProvider theme={{}}>
			<Wrapper Component={Component} {...pageProps} />
		</ThemeProvider>
	);
});

export default App;
