import Head from 'next/head';
import styled, { ThemeContext } from 'styled-components';
import { useContext, useState, useEffect } from 'react';

// Components
import { Text } from '../ui/components/Text';
import { ITheme } from '../ui/themes';
import { Section } from '../ui/components/Section';

interface ILink {
  text: string;
  onClick: () => void;
}

export default function Home() {
  const theme: ITheme = useContext(ThemeContext);

  // All links will be in here
  const [links] = useState({
    socials: [
      {
        text: '@mail',
        onClick: () => {
          console.log('asd');
        },
      },
      {
        text: 'github',
        onClick: () => {
          console.log('asd');
        },
      },
      {
        text: 'twitter',
        onClick: () => {
          console.log('asd');
        },
      },
    ],
    writings: [],
  });

  return (
    <Container>
      <Column width="60%">
        <Title>
          Hey, I'm <Benja src="/images/benja.jpg" /> Benjamin
        </Title>

        {/* Some information about myself */}
        <Section title="who am i">
          <StyledText>
            19-year-old from Oslo, Norway striving to <span>innovate</span> great solutions to modern day problems
          </StyledText>
          <StyledText>
            I specialize within digital design and development, but any activity requiring problem solving and creative
            thinking is where you will find me.
          </StyledText>
        </Section>

        {/* Social links */}
        <Section title="find me online">
          <List direction="row">
            {links.socials.map((link: ILink, index: number) => (
              <Link key={index} onClick={link.onClick}>
                <Line color={theme.purple}>{link.text}</Line>
              </Link>
            ))}
          </List>
        </Section>

        {/* My writings */}
        <Section title="writing">
          <List direction="column">
            {links.writings.length > 0 ? (
              links.writings.map((link: ILink, index: number) => (
                <Link key={index} fontSize={20} onClick={link.onClick} noHover>
                  <BorderBottom>{link.text}</BorderBottom>
                </Link>
              ))
            ) : (
              <StyledText>No writing found.</StyledText>
            )}
          </List>
        </Section>
      </Column>
      <Column width="30%">
        <Box>
          <Section style={{ marginTop: 0 }} title="work experience"></Section>
        </Box>
      </Column>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5rem;
`;

const Column = styled.div<any>`
  display: flex;
  flex-direction: column;
  width: ${props => props.width || '100%'};
`;

const Title = styled(Text).attrs({
  roboto: true,
  fontSize: 25,
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${props => props.theme.text};
`;

const Line = styled.div`
  position: relative;
  font-family: inherit;
  font-weight: inherit;
  display: inline-flex;
  width: fit-content;

  &:hover {
    &:before {
      bottom: 5px;
      opacity: 0.8;
    }

    transition: 0.2s;
    &:active {
      transition: 0.2s;
      transform: translateY(2px);
    }
  }

  &:before {
    content: ' ';
    height: 10px;
    width: 80%;
    background: ${props => props.color || 'gray'};
    opacity: 0.5;
    position: absolute;
    bottom: 3px;
    z-index: -1;
    transition: 0.25s ease-in-out;
  }
`;

const BorderBottom = styled.div`
  position: relative;
  font-family: inherit;
  font-weight: inherit;
  display: inline-flex;
  width: fit-content;
  transition: 0.25s ease-in-out;
  opacity: 0.8;

  &:hover {
    transition: 0.25s ease-in-out;
    opacity: 1;

    &:before {
      background: ${props => props.theme.text};
      width: 100%;
    }
  }

  &:before {
    content: ' ';
    height: 1px;
    width: 80%;
    background: ${props => props.theme.border};
    opacity: 0.5;
    position: absolute;
    bottom: 2px;
    z-index: -1;
    transition: 0.25s ease-in-out;
  }
`;

// Could've named this Avatar, but hey it's me ;p *easter egg*
const Benja = styled.img.attrs({
  width: 40,
  height: 40,
})`
  border-radius: 50%;
  margin: 0 0.5rem 0 0.5rem;
`;

const StyledText = styled(Text).attrs({
  assistant: true,
})`
  color: ${props => props.theme.grayText};
  white-space: pre-line;
  line-height: 35px;
  font-size: 23px;
  margin-bottom: 0.55rem;

  :last-child {
    margin-bottom: 0;
  }

  span {
    font-family: 'Assistant';
    font-weight: 600;
  }
`;

const List = styled.div<any>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
`;

const Link = styled(Text).attrs({
  assistant: true,
})<any>`
  font-size: 23px;
  color: ${props => props.theme.grayText};
  line-height: 35px;
  margin: 0 1.25rem 0.55rem 0;
  cursor: pointer;

  transition: 0.25s;
  &:hover {
    transform: translateY(${props => (props.noHover ? 0 : '-2.5px')});
    transition: 0.25s;
  }
`;

const Box = styled.div`
  box-shadow: 0px 4px 50px rgba(233, 233, 233, 0.51);
  padding: 2rem;
`;
