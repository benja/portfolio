import styled from 'styled-components';
import { Article } from '../../ui/components/Article';
import { getAllPosts } from '../../lib/api';

export function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}

export default function Lifelogs({ posts }) {
  return (
    <Container>
      <Blur />
      <Content>
        <Title>Lifelogs</Title>
        <SubTitle>By Benjamin Akar</SubTitle>
        <ArticleList>
          {posts.map((article, index) => (
            <Article first={index} article={article} />
          ))}
        </ArticleList>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #0a0a0a;
  min-height: 100vh;
  height: 100%;
`;

const Blur = styled.div`
  width: 1000px;
  height: 1000px;
  position: absolute;
  top: -1000px;
  left: 500px;
  z-index: 0;
  opacity: 0.6;
  background: conic-gradient(from 180deg at 50% 50%, #7957ff 0deg, #531cf0 75deg, #141414 273.75deg, #1a1a1a 360deg);
  filter: blur(250px);
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 100px;
  z-index: 100;
  position: relative;

  min-width: 700px;
  transition: 0.2s all ease-in-out;

  @media (max-width: 1400px) {
    min-width: 500px;
  }

  @media (max-width: 950px) {
    min-width: 400px;
  }

  @media (max-width: 700px) {
    min-width: unset;
  }
`;

const ArticleList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 25px;
  color: white;
  font-weight: bold;
`;

const SubTitle = styled.h3`
  font-size: 17px;
  font-weight: 400;
  color: #969696;
  margin-top: 5px;
  margin-bottom: 30px;
  opacity: 0.5;
`;
