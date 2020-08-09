import Head from 'next/head';
import styled, { ThemeContext } from 'styled-components';
import { useContext } from 'react';

// Components
import { Text } from '../ui/components/Text';
import { ITheme } from '../ui/themes';

export default function Home() {
  const theme: ITheme = useContext(ThemeContext);

  return (
    <Container>
      <Column width="80%">
        <Title></Title>
        <Text roboto fontSize={25} color={theme.text}>
          Hey, I'm
        </Text>
      </Column>
      <Column width="20%">asdsa</Column>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Column = styled.div<any>`
  display: flex;
  flex-direction: column;
  width: ${props => props.width || '100%'};
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
`;
