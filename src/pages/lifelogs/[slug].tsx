import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula as dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { dateToReadableDate, getPostBySlug, getPostSlugs } from '../../lib/api';
import Head from 'next/head';

export async function getStaticPaths() {
  const posts = getPostSlugs();

  return {
    paths: posts.map(post => ({
      params: { slug: post },
    })),
    fallback: false,
  };
}

const components = {
  code: props => <CodeBlock {...props} />,
};

export async function getStaticProps(context) {
  const post = getPostBySlug(context.params.slug);
  const mdxSource = await renderToString(`${post.content}`, { components });
  return { props: { post: post, content: mdxSource } };
}

const CodeBlock = props => {
  return (
    <SyntaxHighlighter language={props.className?.replace(/language-/, '')} style={dark}>
      {props.children}
    </SyntaxHighlighter>
  );
};

export default function Article(props) {
  const content = hydrate(props.content, { components });

  return (
    <>
      <Head>
        <title>{props.post.metadata.title}</title>
        <meta name="description" content={props.post.metadata.excerpt} />
        <meta name="twitter:site" content={'@' + props.post.metadata.author.twitter} />
        <meta name="twitter:title" content={props.post.metadata.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={props.post.metadata.excerpt} />
        <meta name="twitter:creator" content={'@' + props.post.metadata.author.twitter} />
        <meta name="twitter:image" content={`https://benjaminakar.com${props.post.metadata.cover}`} />
        <meta property="og:title" content={props.post.metadata.title} />
        <meta property="og:author" content={props.post.metadata.author.name} />
        <meta property="og:url" content={`https://benjaminakar.com/lifelogs/${props.post.slug}`} />
        <meta property="og:description" content={props.post.metadata.excerpt} />
        <meta property="og:image" content={`https://benjaminakar.com${props.post.metadata.cover}`} />
        <meta name="keywords" content={props.post.metadata.tags} />
        <meta property="og:type" content="website" />
      </Head>
      <Container>
        <Blur />
        <Content>
          <Title>{props.post.metadata.title}</Title>
          <SubTitle>
            {dateToReadableDate(props.post.metadata.date)} by {props.post.metadata?.author?.name}
            <a href={`https://twitter.com/${props.post.metadata.author.twitter}`} target={'_blank'}>
              <svg viewBox="328 355 335 276" xmlns="http://www.w3.org/2000/svg">
                <path d="M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A  70,  70 0 0 1 370, 523 A  70,  70 0 0 0 401, 521 A  70,  70 0 0 1 344, 455 A  70,  70 0 0 0 372, 460 A  70,  70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A  67,  67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A  65,  65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A  65,  65 0 0 1 630, 425Z" />
              </svg>
            </a>
          </SubTitle>
          {/*<Cover src={props.post.metadata.cover} />*/}
          <Wrapper>{content}</Wrapper>
        </Content>
      </Container>
    </>
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
  width: 100%;
`;

const Blur = styled.div`
  width: 1000px;
  height: 1000px;
  position: fixed;
  top: -850px;
  left: 500px;
  z-index: 0;
  opacity: 0.6;
  background: conic-gradient(from 180deg at 50% 50%, #7957ff 0deg, #531cf0 75deg, #141414 273.75deg, #1a1a1a 360deg);
  background: -webkit-conic-gradient(
    from 180deg at 50% 50%,
    #7957ff 0deg,
    #531cf0 75deg,
    #141414 273.75deg,
    #1a1a1a 360deg
  );
  filter: blur(250px);
  filter: -webkit-blur(250px);
`;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 100px;
  z-index: 100;
  position: relative;

  @media (max-width: 800px) {
    width: 100%;
    margin-top: 5px;
  }
`;

const Title = styled.h1`
  font-size: 25px;
  color: white;
  font-weight: bold;

  @media (max-width: 800px) {
    padding: 20px 20px 10px 20px;
  }
`;
1;

const SubTitle = styled.h3`
  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: 400;
  color: #969696;
  margin-top: 5px;
  margin-bottom: 30px;

  a {
    margin-left: 5px;
    margin-top: 4px;

    svg {
      fill: #1da1f2;
      width: 20px;
      opacity: 1;
    }
  }

  @media (max-width: 800px) {
    padding: 0 20px;
    margin-bottom: 8px;
  }
`;

const Wrapper = styled.article`
  width: 650px;
  color: #bbbbbb;
  padding-bottom: 150px;

  @media (max-width: 800px) {
    padding: 20px;
    width: 100%;
  }

  code {
    font-family: 'Roboto Mono', monospace !important;
  }

  pre {
    background: rgba(100, 100, 100, 0.1) !important;
    border-radius: 5px;
    font-size: 15px;
  }

  small {
    display: flex;
    font-size: 13px;
    margin-bottom: 15px;
  }

  hr {
    border: 0.5px solid gray;
    opacity: 0.2;
    margin: 15px 0 20px;
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
    color: white;
  }

  h2 {
    font-size: 19px;
    margin-bottom: 15px;
    color: white;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 15px;
    color: white;
  }

  h4 {
    font-size: 17px;
    margin-bottom: 15px;
    color: white;
  }

  h5 {
    font-size: 16px;
    margin-bottom: 15px;
    color: white;
  }

  h6 {
    font-size: 15.5px;
    margin-bottom: 15px;
    color: white;
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

const Cover = styled.img`
  width: 100%;
  max-width: 700px;
  margin-bottom: 20px;
`;
