import React from 'react';
import styled, { ThemeContext } from 'styled-components';

// Components
import { Text } from './Text';

interface SectionProps {
  title?: string;
  style?: any;
  children?: any;
}

export const Section = ({ title, style, children }: SectionProps) => {
  return (
    <Container style={{ ...style }}>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.75rem;
`;

const Title = styled(Text).attrs({
  assistant: true,
  semibold: true,
  fontSize: 18,
})`
  display: flex;
  opacity: 0.5;
  flex-direction: column;
  color: ${props => props.theme.lightGrayText};
  position: relative;
  width: fit-content;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;
