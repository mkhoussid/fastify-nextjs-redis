import React from 'react';
import styled from '@emotion/styled';
import { AppProps } from 'next/dist/shared/lib/router/router';
import { useRouter } from 'next/dist/client/router';

type LandingProps = {
	value: string;
};
const Landing = React.memo(({ value }: LandingProps) => {
	const router = useRouter();

	const handleGoToAnotherPage = React.useCallback(() => {
		router.push('/another');
	}, []);

	return (
		<Container>
			Value is: {value} {!value && <Subtext>(redis instance unavailable unless you refresh)</Subtext>}
			<Button onClick={handleGoToAnotherPage}>Go to another page</Button>
		</Container>
	);
});

const Subtext = styled.div`
	font-size: 1rem;
	margin-bottom: 2rem;
`;

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	min-height: 100vh;
	font-size: 3rem;
`;

const Button = styled.button``;

export default Landing;
