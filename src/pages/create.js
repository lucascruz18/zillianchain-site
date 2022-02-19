import React, {useEffect, useState} from "react"
import Head from "next/head";
import { ethers } from "ethers";

import myEpicNft from '../utils/MyEpicNft.json'

import Header from "../components/Header"
import Footer from "../components/Footer"
import FileInput from "../components/FileInput"

import {Container, Main, Title, LabelInput, Input, TextArea, SubmitButton} from "../styles/pages/create"

export default function CreateNFT() {
  const [currentAccount, setCurrentAccount] = useState("")

  const CONTRACT_ADDRESS = "0xc7Bdf8559566722a734a4be3c8F8A05FcAbb4435";

   /*
  * Gotta make sure this is async.
  */
   const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
    } else {
        console.log("We have the ethereum object", ethereum);
    }

    /*
    * Check if we're authorized to access the user's wallet
    */
    const accounts = await ethereum.request({ method: 'eth_accounts' });

    /*
    * User can have multiple authorized accounts, we grab the first one if its there!
    */
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account)
      setupEventListener()
    } else {
      console.log("No authorized account found")
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      /*
      * Fancy method to request access to account.
      */
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      /*
      * Boom! This should print out public address once we authorize Metamask.
      */
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

  const askContractToMintNft = async () => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, myEpicNft.abi, signer);

        console.log("Going to pop wallet now to pay gas...")
        let nftTxn = await connectedContract.makeAnEpicNFT();

        console.log("Mining...please wait.")
        await nftTxn.wait();

        console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);

      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  }

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
        connectedContract.on("NewEpicNFTMinted", (from, tokenId) => {
          console.log(from, tokenId.toNumber())
          alert(`Hey there! We've minted your NFT and sent it to your wallet. It may be blank right now. It can take a max of 10 min to show up on OpenSea. Here's the link: https://testnets.opensea.io/assets/${CONTRACT_ADDRESS}/${tokenId.toNumber()}`)
        });

        console.log("Setup event listener!")

      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

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
      />

      <Main>
        <Title>Create New Item</Title>

        <FileInput name="file_input" />

        <LabelInput for="itemName">Name</LabelInput>
        <Input id="itemName" name="itemName" placeholder="Item name" />

        <LabelInput for="externalLink">External link</LabelInput>
        <Input id="externalLink" name="externalLink" placeholder="External link" />

        <LabelInput for="description">Description</LabelInput>
        <TextArea id="description" name="description" placeholder="Description" />

        <SubmitButton>Create</SubmitButton>
      </Main>

      {/* <Footer /> */}
    </Container>
  );
}
