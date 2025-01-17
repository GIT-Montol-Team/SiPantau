import { Card, Space, Typography } from 'antd';
import { ReactChild } from 'react';
import { useTranslation } from 'react-i18next';

import { Container, LeftContainer, Logo } from './styles';

const { Title } = Typography;

function WelcomeLeftContainer({
	version,
	children,
}: WelcomeLeftContainerProps): JSX.Element {
	const { t } = useTranslation();

	return (
		<Container>
			<LeftContainer direction="vertical">
				<Space align="center">
					<Logo src="signoz-signup.svg" alt="logo" />
					<Title style={{ fontSize: '46px', margin: 0 }}>SiPantau</Title>
				</Space>
				<Typography>Ketahui Proses Aplikasi Anda Berjalan</Typography>
				<Card
					style={{ width: 'max-content' }}
					bodyStyle={{ padding: '1px 8px', width: '100%' }}
				>
					Global Innovation Technology
				</Card>
			</LeftContainer>
			{children}
		</Container>
	);
}

interface WelcomeLeftContainerProps {
	version: string;
	children: ReactChild;
}

export default WelcomeLeftContainer;
