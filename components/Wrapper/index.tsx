import React from 'react';

import { AppProps } from 'next/dist/shared/lib/router/router';

export default React.memo(({ Component, pageProps }: Omit<AppProps, 'router'>) => {
	return <Component {...pageProps} />;
});
