import React from 'react';
import Link from 'next/link';

import {
  Container, LogoWrapper, Logo, NavItems, NavItemsText, LoginButton, LoginButtonText,
} from './styles';

export default function Header({
  currentAccount, connectToWallet, askContractToMintNft, loading,
}) {
  return (
    <Container>

      <LogoWrapper>
        <Link href="/">
          <Logo>ZILLIANCHAIN</Logo>
        </Link>
      </LogoWrapper>

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
      {/* {currentAccount ? (
        <LoginButton>
          <Link href="/create">
            <LoginButtonText>Mint NFT</LoginButtonText>
          </Link>
        </LoginButton>
      ) : (
        <LoginButton onClick={connectToWallet}>
            <LoginButtonText>Connect to Wallet</LoginButtonText>
        </LoginButton>
      )} */}

    </Container>
  );
}
