import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
// import { version } from 'package.json';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<meta property='og:site_name' content='Sitegrass' />
					<meta name='build version' content={'version'} />
					<meta name='author' content='Michael Khoussid' />
					<link rel='icon' href='/favicon.ico' />
					<link
						href='https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500&display=swap'
						rel='stylesheet'
					/>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

MyDocument.getInitialProps = async (ctx) => {
	const originalRenderPage = ctx.renderPage;

	try {
		ctx.renderPage = () =>
			originalRenderPage({
				enhanceApp: (App) => (props) => <App {...props} />,
			});

		const initialProps = await Document.getInitialProps(ctx);

		return {
			...initialProps,
			styles: <>{initialProps.styles}</>,
		};
	} catch (err) {
		console.log('An error occurred in _document.tsx!', err);
	}
};
