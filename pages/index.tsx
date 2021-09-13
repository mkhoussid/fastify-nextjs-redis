import * as React from 'react';
import { GetServerSideProps } from 'next';
import Landing from 'components/Landing';

type IndexProps = {
	value: string;
	shouldFetchClientSide: boolean;
};
const Index = React.memo(({ shouldFetchClientSide, value, ...pageProps }: IndexProps) => {
	return <Landing value={value} />;
});

export default Index;

export const getServerSideProps: GetServerSideProps = async function (ctx) {
	//@ts-ignore
	if (!ctx.req.redisInstance) {
		return {
			props: {
				value: '',
				shouldFetchClientSide: true,
			},
		};
	}

	try {
		//@ts-ignore
		let value = await ctx.req.redisInstance.get('redis-value');

		if (!value) {
			// store value if this is the first time loading
			//@ts-ignore
			await ctx.req.redisInstance.set('redis-value', 'value for redis');

			value = 'value for redis';
		}

		return {
			props: {
				value,
				shouldFetchClientSide: false,
			},
		};
	} catch (err) {
		console.log('error caught in index', err);
	}
};
