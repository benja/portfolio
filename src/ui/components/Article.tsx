import { dateToVersionNumber } from '../../lib/api';
import styled from 'styled-components';
import { useRouter } from 'next/router';

type Article = {
  metadata: {
    title: string;
    date: string;
  };
  content: string;
  slug: string;
};

export interface ArticleProps {
  article: Article;
  first: number;
}

export function Article(props: ArticleProps) {
  const Router = useRouter();

  return (
    <Container>
      <Date first={props.first === 0}>{dateToVersionNumber(props.article.metadata.date)}</Date>
      <Title onClick={() => Router.push(`/lifelogs/${props.article.slug}`)}>{props.article.metadata.title}</Title>
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  position: relative;
  margin-bottom: 25px;
`;

const Date = styled.small<{ first?: boolean }>`
  position: absolute;
  border-radius: 4px;
  left: -100px;
  top: -3px;
  padding: 5px 10px;
  color: #9755ec;
  background: rgba(124, 54, 214, 0.13);

  transition: all 0.2s ease-in-out;
  opacity: ${props => (props.first ? 1 : 0.5)};
`;

const Title = styled.a`
  color: #969696;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: cornflowerblue;
    text-decoration: -webkit-link;
  }
`;
