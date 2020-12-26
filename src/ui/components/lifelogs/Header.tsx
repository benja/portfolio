import React from 'react';
import { dateToReadableDate } from '../../../lib/api';
import styled from 'styled-components';
import Link from 'next/link';

interface HeaderProps {
  post: {
    title: string;
    date: string;
    cover: string;
    author: {
      name: string;
      twitter: string;
    };
  };
}

export default function Header({ post }: HeaderProps) {
  return (
    <>
      <WidthLimit>
        <Link href={'/lifelogs'} passHref>
          <Back>← Go back</Back>
        </Link>
        <Title>{post.title}</Title>
        <SubTitle>
          Published {dateToReadableDate(post.date)} by {post.author.name}
          <a href={`https://twitter.com/${post.author.twitter}`} target={'_blank'}>
            <svg viewBox="328 355 335 276" xmlns="http://www.w3.org/2000/svg">
              <path d="M 630, 425 A 195, 195 0 0 1 331, 600 A 142, 142 0 0 0 428, 570 A  70,  70 0 0 1 370, 523 A  70,  70 0 0 0 401, 521 A  70,  70 0 0 1 344, 455 A  70,  70 0 0 0 372, 460 A  70,  70 0 0 1 354, 370 A 195, 195 0 0 0 495, 442 A  67,  67 0 0 1 611, 380 A 117, 117 0 0 0 654, 363 A  65,  65 0 0 1 623, 401 A 117, 117 0 0 0 662, 390 A  65,  65 0 0 1 630, 425Z" />
            </svg>
          </a>
        </SubTitle>
      </WidthLimit>
      {/*<Cover image={post.cover} />*/}
    </>
  );
}

const Title = styled.h1`
  font-size: 25px;
  color: white;
  font-weight: bold;

  @media (max-width: 800px) {
    padding: 5px 20px 10px 20px;
  }
`;

const WidthLimit = styled.div`
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

const Back = styled.button`
  font-size: 15px;
  font-weight: 400;
  color: #969696;
  background: transparent;
  border: none;
  margin-bottom: 30px;
  cursor: pointer;
  transition: 0.2s all ease-in-out;

  @media (max-width: 800px) {
    padding: 20px 20px 0px 20px;
  }

  &:hover {
    color: white;
    opacity: 0.8;
  }
`;

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

const Cover = styled.div<{ image: string }>`
  width: 100%;
  height: 300px;
  margin-bottom: 30px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${props => props.image ?? ''});

  @media (max-width: 800px) {
    margin: 10px auto;
    width: 90%;
  }
`;
