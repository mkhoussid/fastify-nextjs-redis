import * as React from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/dist/client/router';

const Another = React.memo(() => {
	const router = useRouter();

	const handleGoHome = React.useCallback(() => {
		router.push('/');
	}, []);

	return (
		<Container>
			<Button onClick={handleGoHome}>Go home</Button>
		</Container>
	);
});

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	min-height: 100vh;
	font-size: 3rem;
`;

const Button = styled.button``;

export default Another;
