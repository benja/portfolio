import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import styled from 'styled-components';
import { dateToReadableDate, getPostBySlug, getPostSlugs } from '../../lib/api';
import React from 'react';

export async function getStaticPaths() {
  const posts = getPostSlugs();

  return {
    paths: posts.map(post => ({
      params: { slug: post },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const post = getPostBySlug(context.params.slug);
  const mdxSource = await renderToString(`${post.content}`, {});
  return { props: { post: post, content: mdxSource } };
}

export default function Article(props) {
  const content = hydrate(props.content, {});

  return (
    <Container>
      <Blur />
      <Content>
        <Title>{props.post.metadata.title}</Title>
        <SubTitle>{dateToReadableDate(props.post.metadata.date)}</SubTitle>
        <Wrapper>{content}</Wrapper>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
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

  @media (max-width: 700px) {
    margin-top: 5px;
  }
`;

const Title = styled.h1`
  font-size: 25px;
  color: white;
  font-weight: bold;

  @media (max-width: 700px) {
    padding: 20px 20px 10px 20px;
  }
`;

const SubTitle = styled.h3`
  font-size: 17px;
  font-weight: 400;
  color: #969696;
  margin-top: 5px;
  margin-bottom: 30px;
  opacity: 0.5;

  @media (max-width: 700px) {
    padding: 0 20px;
    margin-bottom: 8px;
  }
`;

const Wrapper = styled.article`
  width: 500px;
  color: #bbbbbb;
  padding-bottom: 150px;

  @media (max-width: 700px) {
    padding: 20px;
    width: 100%;
  }

  code {
    white-space: pre-wrap;
  }

  kbd {
    display: inline-block;
    padding: 3px 5px;
    font: 11px SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
    line-height: 10px;
    color: #444d56;
    vertical-align: middle;
    background-color: linear-gradient(180deg, #35363a 0%, rgba(39, 40, 43, 0.82) 100%);
    border: 1px solid #343434;
    border-radius: 3px;
    box-shadow: 0px 13px 1.2em rgba(0, 0, 0, 0.3), 0px 4px 4px rgba(0, 0, 0, 0.35);
  }

  blockquote,
  details,
  dl,
  ol,
  p,
  pre,
  table,
  ul {
    margin-top: 0;
    margin-bottom: 16px;
  }

  blockquote {
    padding: 0 1em;
    border-left: 0.25em solid #9755ec;
  }

  blockquote > :first-child {
    margin-top: 0;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  table {
    display: block;
    width: 100%;
    overflow: auto;
  }

  table th {
    font-weight: 600;
  }

  table td,
  table th {
    padding: 6px 13px;
    border: 1px solid #303030;
  }

  table tr {
    background-color: #4a4a4a;
    border-top: 1px solid #303030;
  }

  table tr:nth-child(2n) {
    background-color: #404040;
  }

  img {
    max-width: 100%;
    border-radius: 10px;
    box-sizing: initial;
  }

  h1 {
    font-size: 20px;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 19px;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 15px;
  }

  h4 {
    font-size: 17px;
    margin-bottom: 15px;
  }

  h5 {
    font-size: 16px;
    margin-bottom: 15px;
  }

  h6 {
    font-size: 15.5px;
    margin-bottom: 15px;
  }

  p {
    font-size: 15px;
    margin-bottom: 15px;
    line-height: 150%;
  }

  a {
    color: cornflowerblue;
  }

  ul {
    list-style: square;
    margin-top: 10px;
  }

  li {
    padding-bottom: 2px;
    margin: 20px 0 15px 35px;
  }
`;