import Head from 'next/head';
import styled, { ThemeContext } from 'styled-components';
import { useContext, useState, useEffect } from 'react';

// Components
import { Text } from '../ui/components/Text';
import { ITheme } from '../ui/themes';
import { Section } from '../ui/components/Section';
import { WorkTree, WorkTreeProps } from '../ui/components/WorkTree';

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
        text: 'Say hello',
        onClick: () => {
          window.location.assign('mailto:benjaminakar2001@gmail.com');
        },
      },
      {
        text: 'twitter',
        onClick: () => {
          window.open('https://twitter.com/benjaminakar', '_blank');
        },
      },
      {
        text: 'github',
        onClick: () => {
          window.open('https://github.com/benja', '_blank');
        },
      },
    ],
    writings: [],
  });

  // All previous work
  const [positions] = useState([
    {
      company: 'Notify Technology, Inc.',
      position: 'Frontend Engineer & Designer',
      duration: 'Apr 2020 - present',
    },
    {
      company: 'Bolteløkka Legesenter',
      position: 'Full Stack Developer & Designer',
      duration: 'Dec 2017 - present',
    },
  ]);

  return (
    <WidthLimit>
      <Container>
        <Left>
          <Title>
            Hey, I'm <Benja src="/images/benja.jpg" /> Benjamin
          </Title>

          {/* Some information about myself */}
          <Section title="who am i">
            <StyledText>
              19-year-old from Oslo, Norway striving to <span>innovate</span> great solutions to modern day problems
            </StyledText>
            <StyledText>
              I specialize within digital design and development, but any activity requiring problem solving and
              creative thinking is where you will find me.
            </StyledText>
          </Section>

          <List direction="row">
            {links.socials.map((link: ILink, index: number) => (
              <Link key={index} onClick={link.onClick}>
                <Line color={theme.purple}>{link.text}</Line>
              </Link>
            ))}
          </List>

          {/* My writings */}
          {links.writings.length > 0 && (
            <Section title="writing">
              <List direction="column">
                {links.writings.map((link: ILink, index: number) => (
                  <Link key={index} fontSize={20} onClick={link.onClick} noHover>
                    <BorderBottom>{link.text}</BorderBottom>
                  </Link>
                ))}
              </List>
            </Section>
          )}
        </Left>
        <Right>
          <Box>
            <Section style={{ marginTop: 0 }} title="work experience">
              <WorkTree positions={positions} />
            </Section>
            <StyledText fontSize={15}>Contact me for more work references.</StyledText>
          </Box>
        </Right>
      </Container>
    </WidthLimit>
  );
}

const Left = styled.div<any>`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const Right = styled.div<any>`
  display: flex;
  flex-direction: column;
  width: 30%;
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

const Box = styled.div`
  box-shadow: 0px 4px 50px rgba(233, 233, 233, 0.51);
  padding: 2rem;
  position: relative;

  transition: 0.2s ease-in-out;
  ${StyledText} {
    opacity: 0;
    margin-bottom: 0;
    height: 0;
    position: absolute;
    bottom: 0px;
    left: 0;
    transition: 0.2s ease-in-out;
  }

  &:hover {
    ${StyledText} {
      opacity: 0.5;
    }
  }
`;

const WidthLimit = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  width: 1500px;

  @media (max-width: 1500px) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5rem;

  @media (max-width: 1220px) {
    ${Left} {
      width: 50%;
    }

    ${Right} {
      width: 40%;
    }
  }

  @media (max-width: 950px) {
    flex-direction: column;
    padding: 3rem;

    ${Left} {
      width: 100%;
    }

    ${Right} {
      width: 100%;
    }

    ${Box} {
      margin-top: 2rem;
    }
  }

  @media (max-width: 500px) {
    padding: 2rem;
  }
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

const List = styled.div<any>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  margin-top: 1.5rem;
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
