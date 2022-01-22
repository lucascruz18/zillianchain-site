import React, {useEffect} from 'react'
import Head from 'next/head';

import Header from '../components/Header'
import Footer from '../components/Footer'

import {Container, Main, Title, SubTitle, Description} from '../styles/pages/Home'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>ZILLIANCHAIN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Main>
        <Title>Em breve...</Title>
        <SubTitle>blockchain solutions</SubTitle>
      </Main>

      <Footer />
    </Container>
  );
}
