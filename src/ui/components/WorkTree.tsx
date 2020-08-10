import React, { useEffect } from 'react';
import styled, { ThemeContext } from 'styled-components';

// Components
import { Text } from './Text';

export interface IPosition {
  company: string;
  position: string;
  duration: string;
}

export interface WorkTreeProps {
  positions: IPosition[];
}

export const WorkTree = ({ positions }: WorkTreeProps) => {
  return (
    <Container>
      {positions && positions.length > 0
        ? positions.map((entry: IPosition, index: number) => (
            <WorkEntry>
              <Company>{entry.company}</Company>
              <Position>{entry.position}</Position>
              <Duration>{entry.duration}</Duration>
            </WorkEntry>
          ))
        : ':('}
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
`;

const WorkEntry = styled.li`
  position: relative;
  font-family: 'Assistant';
  font-weight: 600;
  font-size: 20px;
  margin: 0 0 1rem 1rem;

  :last-child {
    margin-bottom: 0;
  }

  /* First child shouldn't have the long line linking to the element before */
  :not(:first-child) {
    &:before {
      position: absolute;
      content: '';
      height: 84px;
      width: 1px;
      left: -15px;
      top: -70px;
      background: ${props => props.theme.bar};
    }
  }

  &:before {
    position: absolute;
    content: '';
    height: 15px;
    width: 1px;
    left: -15px;
    top: -1px;
    background: ${props => props.theme.bar};
  }

  &:after {
    content: '';
    position: absolute;
    transform: rotate(90deg);
    height: 10px;
    width: 1px;
    top: 9px;
    left: -10px;
    background: ${props => props.theme.bar};
  }
`;

const Company = styled(Text).attrs({
  assistant: true,
  semibold: true,
})<any>`
  margin-left: 0.25rem;
  font-size: 20px;
  color: ${props => props.theme.grayText};
`;

const Position = styled(Text).attrs({
  assistant: true,
})<any>`
  margin-left: 0.25rem;
  font-size: 17px;
  color: ${props => props.theme.lightGrayText};
`;

const Duration = styled(Text).attrs({
  assistant: true,
  semibold: true,
})<any>`
  margin-left: 0.25rem;
  font-size: 15px;
  color: ${props => props.theme.lightGrayText};
  text-transform: uppercase;
  opacity: 0.5;
`;
