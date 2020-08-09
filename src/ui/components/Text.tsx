import React, { ReactChildren } from 'react';
import styled from 'styled-components';

interface TextProps {
  // Customizable settings
  roboto?: boolean;
  assistant?: boolean;
  semibold?: boolean;
  color?: string;
  fontSize?: number | string;

  // Customizability
  style?: any;
  className?: any;
  children?: any;

  // Actions
  onClick?: () => void;
}

export const Text = (props: TextProps) => {
  // Deconstruct some props
  const { style, className, children, onClick } = props;

  // Define styles object
  let styles: {
    fontFamily?: string;
    fontWeight?: number;
    fontSize?: number | string;
    color?: string;
    [key: string]: any;
  } = {
    fontWeight: 400, // By default font weight is regular (400)
  };

  // Check props and see what styles to append
  if (props.roboto) styles.fontFamily = 'Roboto Slab';
  else if (props.assistant) styles.fontFamily = 'Assistant';

  if (props.semibold) styles.fontWeight = 600;
  if (props.fontSize) styles.fontSize = props.fontSize;
  if (props.color) styles.color = props.color;
  return (
    <StyledText className={className} onClick={onClick} style={{ ...styles, ...style }}>
      {children}
    </StyledText>
  );
};

const StyledText = styled.h1`
  color: #000000;
`;
