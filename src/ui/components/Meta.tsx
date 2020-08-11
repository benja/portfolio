import React from 'react';
import Head from 'next/head';
import { Icon } from '../icons/Icon';

interface MetaProps {
  title: string;
}

export const Meta = ({ title }: MetaProps) => {
  return (
    <Head key="sadasa">
      <title>{title}</title>
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href="https://benjaminakar.com/" />

      {/* Other meta tags for social media */}
      <meta
        name="description"
        content="19-year-old from Oslo, Norway striving to innovate great solutions to modern day problems. I specialize within digital design and development, but any activity requiring problem solving and creative thinking is where you will find me."
      />
      <meta
        name="keywords"
        content="Benjamin Akar, Oslo, Norway, Web Utvikler Norge, Web Developer, Developer, Web, Norge, Norwey, Programmers, Entrepreneur Norway, Entreprenør, Ungdom, Ung Utvikler, Utvikler, Ung, Web Design, Design, Digital Design, React Utvikler Norge, Design Agency, Agency, Trenger nettside, JavaScript Utvikler Norge, nettsider, norske nettsider, trenger ny nettside"
      />
      <meta property="author" name="author" content="Benjamin Akar" />

      {/* Open Graph meta tags */}
      <meta property="og:site_name" content="Benjamin Akar" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Benjamin Akar — Software Engineer & Designer" />
      <meta property="og:url" content="https://benjaminakar.com/" />
      <meta property="og:image" content="https://benjaminakar.com/images/benja.jpg" />
      <meta
        property="og:description"
        content="19-year-old from Oslo, Norway striving to innovate great solutions to modern day problems. I specialize within digital design and development, but any activity requiring problem solving and creative thinking is where you will find me."
      />

      {/* Twitter meta tags */}
      <meta name="twitter:image" content="https://benjaminakar.com/images/benja.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@benjaminakar" />
      <meta name="twitter:creator" content="@benjaminakar" />
      <meta name="twitter:url" content="https://benjaminakar.com/" />
      <meta name="twitter:title" content="Benjamin Akar — Software Engineer & Designer" />
      <meta
        name="twitter:description"
        content="19-year-old from Oslo, Norway striving to innovate great solutions to modern day problems. I specialize within digital design and development, but any activity requiring problem solving and creative thinking is where you will find me."
      />
    </Head>
  );
};
