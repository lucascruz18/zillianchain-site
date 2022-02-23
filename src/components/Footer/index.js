import React from 'react';

import { FaTwitter } from 'react-icons/fa';

import { Container, SocialText, SocialButton } from './styles';

export default function Footer() {
  return (
    <Container>
      <SocialButton href="https://twitter.com/luquitute" rel="noopener noreferrer external nofollow" target="_blank">
        <SocialText>
          <FaTwitter size={30} />
        </SocialText>
      </SocialButton>
    </Container>
  );
}
