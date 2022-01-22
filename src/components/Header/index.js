import React from 'react'

import {Container, LogoWrapper, Logo, NavItems, NavItemsText, LoginButton, LoginButtonText} from './styles'

export default function Header() {
  return (
    <Container>
      <LogoWrapper>
        <Logo>ZILLIANCHAIN</Logo>
      </LogoWrapper>

      <NavItems>
        <NavItemsText>Market</NavItemsText>
        <NavItemsText>Exchange</NavItemsText>
        <NavItemsText>Tutorials</NavItemsText>
        <NavItemsText>Wallets</NavItemsText>

        <LoginButton>
          <LoginButtonText>Login</LoginButtonText>
        </LoginButton>
      </NavItems>

      {/* <Donate>D</Donate> */}

    </Container>
  );
}
