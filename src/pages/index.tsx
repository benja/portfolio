import styled, { ThemeContext, keyframes, useTheme } from 'styled-components';
import { useContext, useState } from 'react';

// Components
import { Text } from '../ui/components/Text';
import { Section } from '../ui/components/Section';
import { WorkTree } from '../ui/components/WorkTree';
import { Meta } from '../ui/components/Meta';
import { Icon } from '../ui/icons/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { getTheme, setTheme } from '../redux/slices/themeSlice';
import { links } from '../utils/links';
import { positions } from '../utils/work';

export default function Home() {
  const theme = useTheme();
  const currentTheme = useSelector(getTheme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    if (currentTheme === 'light') {
      localStorage.setItem('theme', 'dark');
      dispatch(setTheme({ name: 'dark' }));
    }

    if (currentTheme === 'dark') {
      localStorage.setItem('theme', 'light');
      dispatch(setTheme({ name: 'light' }));
    }
  };

  return (
    <>
      <Meta title="Benjamin Akar" />
      <WidthLimit>
        <Container>
          <Left>
            {/* Some information about myself */}
            <Section>
              <StyledText fontSize={20}>
                19-year-old from Oslo, Norway striving to <span>innovate</span> great solutions to modern day problems
              </StyledText>
              <StyledText fontSize={20}>
                I specialize within digital design and development, but any activity requiring problem solving and
                creative thinking is where you will find me.
              </StyledText>
            </Section>

            <List direction="row" style={{ marginTop: 20 }}>
              {links.socials.map((link: ILink, index: number) => (
                <LinkContainer key={index} onClick={link.onClick}>
                  <Line color={theme.linkBackground}>{link.text}</Line>
                </LinkContainer>
              ))}
            </List>

            {/* My writings */}
            {links.writings.length > 0 && (
              <Section title="writing">
                <List direction="column">
                  {links.writings.map((link: Link, index: number) => (
                    <LinkContainer key={index} onClick={link.onClick} noHover>
                      <BorderBottom>{link.text}</BorderBottom>
                    </LinkContainer>
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
          <ThemeToggle onClick={toggleTheme}>
            <Icon name="moon" color={theme.text} />
          </ThemeToggle>
        </Container>
      </WidthLimit>
    </>
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

const ThemeToggle = styled.div`
  background: ${props => props.theme.text + '15'};
  border-radius: 50%;
  padding: 0.5rem;
  width: fit-content;
  height: fit-content;

  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  transition: 0.2s;
  &:hover {
    transition: 0.2s;
    cursor: pointer;
    background: ${props => props.theme.text + '30'};
    transform: scale(0.95);
  }

  &:active {
    background: ${props => props.theme.text + '40'};
    transform: scale(0.93);
  }
`;

const StyledText = styled(Text).attrs({
  regular: true,
})`
  color: ${props => props.theme.grayText};
  white-space: pre-line;
  line-height: 35px;
  margin-bottom: 0.55rem;

  :last-child {
    margin-bottom: 0;
  }

  span {
    font-family: inherit;
    font-size: inherit;
    font-weight: 600;
  }
`;

const Box = styled.div`
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: 3px;
  border: 1px solid ${props => props.theme.border};
  padding: 2rem;
  position: relative;

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
  margin: 5rem auto 0;
  width: 1350px;

  @media (max-width: 1350px) {
    width: 100%;
    margin: 0 auto;
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

const Line = styled.div`
  position: relative;
  font-family: inherit;
  font-weight: inherit;
  display: inline-flex;
  width: fit-content;

  &:hover {
    &:before {
      bottom: 8px;
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
    height: 5px;
    width: 80%;
    background: ${props => props.theme.linkBackground || 'gray'};
    opacity: 0.5;
    position: absolute;
    bottom: 8px;
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
    }
  }

  &:before {
    content: ' ';
    height: 1px;
    width: 100%;
    background: ${props => props.theme.border};
    opacity: 0.5;
    position: absolute;
    bottom: 2px;
    z-index: -1;
    transition: 0.25s ease-in-out;
  }
`;

// Could've named this Avatar, but hey it's me ;p *easter egg*
const Wave = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-5deg) scale(1.05);
  }
  50% {
    transform: rotate(5deg) scale(1.05);
  }
  75% {
    transform: rotate(-5deg) scale(1.05);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
`;

const Benja = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 0 0.5rem 0 0.5rem;
  transition: 0.2s;
  animation: ${Wave} 2.5s forwards;

  &:hover {
    transition: 0.2s;
    width: 100px;
    height: 100px;
  }

  @media (max-width: 500px) {
    &:hover {
      width: 75px;
      height: 75px;
    }
  }
`;

const List = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
`;

const LinkContainer = styled.div<{ noHover?: boolean }>`
  font-size: 20px;
  font-family: 'Assistant';
  color: ${props => props.theme.text};
  line-height: 35px;
  margin: 0 1.25rem 0.55rem 0;
  cursor: pointer;

  transition: 0.25s;
  &:hover {
    transform: translateY(${props => (props.noHover ? 0 : '-2px')});
    transition: 0.25s;
  }
`;
