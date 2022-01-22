import React from 'react'

// import { FaLinkedin, FaGithub } from 'react-icons/fa';

import {Container, SocialText, SocialButton} from './styles'

export default function Footer() {
  return (
    <Container>
      <SocialButton href="https://github.com/zillianchain" rel="noopener noreferrer external nofollow" target="_blank">
        <SocialText>GITHUB</SocialText>
      </SocialButton>
      <SocialButton href="https://www.instagram.com/zillianchain" rel="noopener noreferrer external nofollow" target="_blank">
        <SocialText>INSTAGRAM</SocialText>
      </SocialButton>
    </Container>
  );
}
