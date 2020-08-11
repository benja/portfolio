import React from 'react';
import { Moon } from './moon';
import { Text } from '../components/Text';

interface IconProps {
  name: string;
  color: string;
}

export const Icon = ({ name, color }: IconProps) => {
  switch (name) {
    case 'moon':
      return <Moon color={color} />;
    default:
      return <Text>Icon not found.</Text>;
  }
};
