import React from 'react';
import styled, { ThemeContext } from 'styled-components';

// Components
import { Text } from './Text';

interface SectionProps {
  title: string;
  style?: any;
  children?: any;
}

export const Section = ({ title, style, children }: SectionProps) => {
  return (
    <Container style={{ ...style }}>
      <Title>/ {title} /</Title>
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
`;

const Title = styled(Text).attrs({
  roboto: true,
  fontSize: 20,
})`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.lightGrayText};
  position: relative;
  width: fit-content;
  margin-bottom: 1rem;
`;
