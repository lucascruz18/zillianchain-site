/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { ethers } from 'ethers';

import myEpicNft from '../utils/MyEpicNft.json';

import Header from '../components/Header';
// import Footer from '../components/Footer';

import {
  Container,
  Main,
  MainWrapper,
  FeaturedWrapper,
  FeaturedImage,
  Title,
  SubTitle,
  ExploreButton,
  // SpecialNFTTitle,
  // SpecialNFTWrapper,
  // SpecialNFTItem,
} from './home.styles';

export default function Home() {
  const [currentAccount, setCurrentAccount] = useState('');
  const [loading, setLoading] = useState(false);

  const CONTRACT_ADDRESS = '0xe545078846281A6D91887b5aE8067aaaB025E353';

  const setupEventListener = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, myEpicNft.abi, signer);

        connectedContract.on('NewEpicNFTMinted', (from, tokenId) => {
          console.log(from, tokenId.toNumber());
          alert(`Hey there! We've minted your NFT and sent it to your wallet. It may be blank right now. It can take a max of 10 min to show up on OpenSea. Here's the link: https://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${tokenId.toNumber()}`);
        });

        console.log('Setup event listener!');
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log('Make sure you have metamask!');
      return;
    }
    console.log('We have the ethereum object', ethereum);

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log('Found an authorized account:', account);
      setCurrentAccount(account);
      setupEventListener();
    } else {
      console.log('No authorized account found');
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert('Get MetaMask!');
        return;
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

      console.log('Connected', accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const askContractToMintNft = async () => {
    try {
      setLoading(true);
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, myEpicNft.abi, signer);

        console.log('Going to pop wallet now to pay gas...');
        const nftTxn = await connectedContract.makeAnEpicNFT();

        console.log('Mining...please wait.');
        await nftTxn.wait();

        console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
        setLoading(false);
      } else {
        console.log("Ethereum object doesn't exist!");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <Container>
      <Head>
        <title>ZILLIANCHAIN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        currentAccount={currentAccount}
        connectToWallet={connectWallet}
        askContractToMintNft={askContractToMintNft}
        loading={loading}
      />

      <Main>
        <MainWrapper>
          <Title>Discover, collect, and sell extraordinary NFTs</Title>
          <SubTitle>Zillianchain is the new NFT marketplace</SubTitle>
          <ExploreButton><strong>Explore</strong></ExploreButton>
        </MainWrapper>

        <FeaturedWrapper>
          <FeaturedImage src="https://i.pinimg.com/originals/57/5d/db/575ddb3262a4c842e1bcd293fe12291d.jpg" />
        </FeaturedWrapper>
      </Main>

      {/* <SpecialNFTTitle>Special NFT's</SpecialNFTTitle>

      <SpecialNFTWrapper>
        <SpecialNFTItem />
        <SpecialNFTItem />
        <SpecialNFTItem />
      </SpecialNFTWrapper> */}

      {/* <Footer /> */}
    </Container>
  );
}
