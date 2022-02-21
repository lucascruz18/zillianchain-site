import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { ethers } from 'ethers';

import myEpicNft from '../utils/MyEpicNft.json';

import Header from '../components/Header';
// import Footer from "../components/Footer"

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
} from '../styles/pages/home';

export default function Home() {
  const [currentAccount, setCurrentAccount] = useState('');
  const [loading, setLoading] = useState(false);

  const CONTRACT_ADDRESS = '0xc7Bdf8559566722a734a4be3c8F8A05FcAbb4435';

  // Setup our listener.
  const setupEventListener = async () => {
    // Most of this looks the same as our function askContractToMintNft
    try {
      const { ethereum } = window;

      if (ethereum) {
        // Same stuff again
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, myEpicNft.abi, signer);

        // THIS IS THE MAGIC SAUCE.
        // This will essentially "capture" our event when our contract throws it.
        // If you're familiar with webhooks, it's very similar to that!
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

  /*
  * Gotta make sure this is async.
  */
  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log('Make sure you have metamask!');
      return;
    }
    console.log('We have the ethereum object', ethereum);

    /*
    * Check if we're authorized to access the user's wallet
    */
    const accounts = await ethereum.request({ method: 'eth_accounts' });

    /*
    * User can have multiple authorized accounts, we grab the first one if its there!
    */
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

      /*
      * Fancy method to request access to account.
      */
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

      /*
      * Boom! This should print out public address once we authorize Metamask.
      */
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
        {specialNftData.map(item => (
          <SpecialNFTItem src={item.image} />
        ))}
      </SpecialNFTWrapper> */}

      {/* <Footer /> */}
    </Container>
  );
}
