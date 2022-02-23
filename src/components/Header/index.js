import React from 'react';
import Link from 'next/link';

import {
  Container, LogoWrapper, Logo, NavItems, NavItemsText, LoginButton, LoginButtonText,
} from './styles';

export default function Header({
  currentAccount,
  connectToWallet,
  askContractToMintNft,
  loading,
}) {
  return (
    <Container>

      <Link href="/">
        <LogoWrapper>
          <Logo>ZILLIANCHAIN</Logo>
        </LogoWrapper>
      </Link>

      <NavItems>
        <NavItemsText>Explore</NavItemsText>
        <NavItemsText>Market</NavItemsText>
        <NavItemsText>Exchange</NavItemsText>
      </NavItems>

      {currentAccount ? (
        <LoginButton onClick={askContractToMintNft}>
          <LoginButtonText>{loading ? 'Minting' : 'Mint NFT'}</LoginButtonText>
        </LoginButton>
      ) : (
        <LoginButton onClick={connectToWallet}>
          <LoginButtonText>Connect to Wallet</LoginButtonText>
        </LoginButton>
      )}
    </Container>
  );
}
