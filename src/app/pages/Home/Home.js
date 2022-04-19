import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useMoralis } from "react-moralis";
import Header from '../Components/Header/Header';
import Vector from "../../../assets/images/Vector.svg";
import Section1img from "../../../assets/images/Section1-img.png";
import Section2img from "../../../assets/images/Section2-img.png";
import Section3img from "../../../assets/images/Section3-img.png";
import Section4img from "../../../assets/images/Section4-img.png";
import Section5img from "../../../assets/images/Section5-img.png";
import featured1img from "../../../assets/images/featured-icons/featured1-img.png";
import featured2img from "../../../assets/images/featured-icons/featured2-img.png";
import featured3img from "../../../assets/images/featured-icons/featured3-img.png";
import featured4img from "../../../assets/images/featured-icons/featured4-img.png";
import featured5img from "../../../assets/images/featured-icons/featured5-img.png";
import featured6img from "../../../assets/images/featured-icons/featured6-img.png";
import featured7img from "../../../assets/images/featured-icons/featured7-img.png";
import featured8img from "../../../assets/images/featured-icons/featured8-img.png";
import Ethereum from '../../../assets/images/ethereum.png';
import Polygon from '../../../assets/images/polygon-matic-logo.png';
import "./Home.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export default function ButtonAppBar() {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();
  const login = async () => {
    console.log("login");
    if (
      typeof window.ethereum === "undefined" ||
      typeof window.web3 === "undefined"
    ) {
      // Web3 browser user detected. You can now use the provider.
      console.log("sada");
      window.alert("Please install metamast");
    }
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  const logOut = async () => {
    await logout();
    console.log("logged out");
  };

  return (
    <div>
      {/*<button onClick={login}>Moralis Metamask Login</button>*/}
      {/*<button onClick={logOut} disabled={isAuthenticating}>Logout</button>*/}

      <Header />
      <section class="text-gray-600 body-font">
        <div class="max-w-screen-2xl mx-auto flex flex-row">
          <div class="pl-16 mx-auto my-auto">
            <h2 class="title-font  text-6xl mb-4 font-medium text-gray-900">
                Create and Deploy
                NFT Collections without coding
            </h2>
            <p className="mb-8 text-lg leading-relaxed">
                Generate, deploy, and trade NFT collections without writing any line of code. All in a matter of minutes!
            </p>
            <div class="flex">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Join the Discord
              </button>
              <a href="/create-collections"><button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Generate Collection
              </button></a>
            </div>
          </div>
          <div class="w-full">
            <img class="w-full items-stretch" alt="image" src={Section1img} />
          </div>
        </div>
      </section>
      <section class="text-gray-600 bg-gray-200 body-font">
        <div class="max-w-screen-2xl lg:w-11/12 mx-auto flex flex-row">
          <div class="lg:w-1/2 w-full lg:pl-0 my-10 text-center">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={Section2img}
            />
          </div>

          <div class="lg:w-1/2 w-full lg:pl-0 lg:py-6 mt-6 lg:mt-0 text-left">
            <h2 class="text-sm title-font text-blue-800 tracking-widest mt-4">
                Easy
            </h2>
            <hr class="w-5 mb-3 font-bold" />
            <h1 class="text-gray-900 text-3xl title-font font-small mb-3">
                The simplest way to  {' '}
              <span class="text-cyan-500"> generate and deploy NFT collections</span> on the
              blockchain
            </h1>

            <p class="leading-relaxed mb-3">
                No coding required, at all. Create your layers, import your assets, click Generate and you are done!
            </p>
              <a href="https://docs-flume.gitbook.io/flume/what-is-flume/general-flow" target="_blank">
            <button class="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
               Learn More
            </button>
              </a>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="max-w-screen-2xl lg:w-11/12 mx-auto flex flex-row">
          <div class="lg:w-1/2 w-full lg:pl-0 lg:py-6 mx-auto my-auto text-left">
            <h2 class="text-sm title-font text-blue-800 tracking-widest mt-4">
                Integrated
            </h2>
            <hr class="w-6 mb-3 font-xl border-blue-800" />
            <h1 class="text-gray-900 text-3xl title-font font-small mb-3">
                Trade your NFTs on famous marketplaces like {" "}
              <span class="text-cyan-500">OpenSea</span>
            </h1>

            <p class="leading-relaxed mb-3">
                Once minted, the NFTs will be instantly available in the most famous NFT marketplaces and ready for sale
            </p>

              <a href="https://docs-flume.gitbook.io/flume/guides/sharing-your-nfts/marketplaces-sync" target="_blank">
                  <button
                      className="flex px-6 py-2 text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
                      Learn More
                  </button>
              </a>
          </div>  
          <div class="lg:w-1/2 md:w1/2 w-full p-20 text-center">
            <img
              alt="ecommerce"
              class="w-full h-full"
              src={Section3img}
            />
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="max-w-screen-2xl lg:w-11/12 mx-auto flex flex-row">
          <div class="lg:w-1/2 md:w1/2 w-full lg:pl-0 text-center">
            <img
              alt="ecommerce"
              class="w-full h-full"
              src={Section4img}
            />
          </div>

          <div class="lg:w-1/2 w-full lg:pl-0 lg:py-6 mx-auto my-auto text-left">
            <h2 class="text-sm title-font text-blue-800 tracking-widest mt-4">
              Powerful
            </h2>
            <hr class="w-6 mb-3 font-xl border-blue-800" />
            <h1 class="text-gray-900 text-3xl title-font font-small mb-3">
                Configure Rarity,  <span class="text-cyan-500">Mint Price and Deploy</span> to Blockchain
            </h1>

            <p class="leading-relaxed mb-3">
                Configure certain attributes to be more rare than others, set the minting price and deploy your collection to the blockchain.
            </p>
              <a href="https://docs-flume.gitbook.io/flume/guides/uploading-content" target="_blank">
            <button class="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Learn More
            </button>
              </a>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="max-w-screen-2xl lg:w-11/12 mx-auto flex flex-row">
          <div class="lg:w-1/2 w-full lg:pl-0 lg:py-6 mx-auto my-auto text-left">
            <h2 class="text-sm title-font text-pink-500 tracking-widest mt-4">
                Customizable
            </h2>
            <hr class="w-6 mb-3 font-xl border-blue-800" />
            <h1 class="text-gray-900 text-3xl title-font font-small mb-3">
              <span class="text-cyan-500"> Pre built </span> Minting Button
            </h1>

            <p class="leading-relaxed mb-3">
                Embed a minting button linked to your collection to any website. Customize it as you want and allow people to mint directly from there.

            </p>
              <a href="https://docs-flume.gitbook.io/flume/guides/sharing-your-nfts/embedding-into-your-website" target="_blank">
                  <button class="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Learn More
                </button>
              </a>
          </div>
          <div class="lg:w-1/2 md:w1/2 w-full lg:pl-0 text-center">
            <img
              alt="ecommerce"
              class="w-full h-full"
              src={Section5img}
            />
          </div>
        </div>
      </section>
      <section class="text-gray-600 bg-gray-200 body-font">
      <div class="max-w-screen-2xl lg:w-11/12 px-5 py-24 mx-auto">
        <h2 class="text-md title-font text-center text-blue-800 tracking-widest mt-4">
          Fully Featured
        </h2>
        <hr class="w-10 my-2 text-xl mx-auto border-blue-800"></hr>

        <h2 class="text-center font-extrabold text-xl">Everything you need</h2>

        
          <div class="flex flex-wrap text-left">
            <div class="p-1 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 bg-white p-6 rounded-lg overflow-hidden">
               <div class="container">
               <div class="w-10 h-10 mb-4">
               <img src={featured1img} />
               </div>
               <div class="container">
                <h3 class="font-bold text-md mb-3">Super Simple (no code)</h3>
                <p class="text-sm">Quickly generate your NFT collection without coding</p>
               </div>
               <div class="-mr-7 -mb-7 h-16 bg-featured1 bg-no-repeat bg-right-bottom opacity-10">

               </div>
               </div>
              </div>
            </div>
            <div class="p-1 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 bg-white p-6 rounded-lg overflow-hidden">
               <div class="container">
               <div class="w-10 h-10 mb-4">
               <img src={featured2img} />
               </div>
               <div class="container">
                <h3 class="font-bold text-md mb-3">Own Your Contract</h3>
                <p class="text-sm">Create NFT collections with ease,
                using the all-in-one generator</p>
               </div>
               <div class="-mr-7 -mb-7 h-16 bg-featured2 bg-no-repeat bg-right-bottom opacity-10">

               </div>
               </div>
              </div>
            </div>
            <div class="p-1 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 bg-white p-6 rounded-lg overflow-hidden">
               <div class="container">
               <div class="w-10 h-10 mb-4">
               <img src={featured3img} />
               </div>
               <div class="container">
                <h3 class="font-bold text-md mb-3">Set Traits Rarity</h3>
                <p class="text-sm">Configure how rare each trait of your NFT should be</p>
               </div>
               <div class="-mr-7 -mb-7 h-16 bg-featured3 bg-no-repeat bg-right-bottom opacity-10">

               </div>
               </div>
              </div>
            </div>
            <div class="p-1 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 bg-white p-6 rounded-lg overflow-hidden">
               <div class="container">
               <div class="w-10 h-10 mb-4">
               <img src={featured4img} />
               </div>
               <div class="container">
                <h3 class="font-bold text-md mb-3">IPFS File Hosting</h3>
                <p class="text-sm">Create NFT collections with ease,
                using the all-in-one generator</p>
               </div>
               <div class="-mr-7 -mb-7 h-16 bg-featured4 bg-no-repeat bg-right-bottom opacity-10">

               </div>
               </div>
              </div>
            </div>
            <div class="p-1 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 bg-white p-6 rounded-lg overflow-hidden">
               <div class="container">
               <div class="w-10 h-10 mb-4">
               <img src={featured5img} />
               </div>
               <div class="container">
                <h3 class="font-bold text-md mb-3">Generate Metadata</h3>
                <p class="text-sm">Generate automatically metadata for your NFTs</p>
               </div>
               <div class="-mr-7 -mb-7 h-16 bg-featured5 bg-no-repeat bg-right-bottom opacity-10">

               </div>
               </div>
              </div>
            </div>
            <div class="p-1 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 bg-white p-6 rounded-lg overflow-hidden">
               <div class="container">
               <div class="w-10 h-10 mb-4">
               <img src={featured6img} />
               </div>
               <div class="container">
                <h3 class="font-bold text-md mb-3">Lazy Minting</h3>
                <p class="text-sm">No upfront minting gas fee for you. Defer them to your buyers
                </p>
               </div>
               <div class="-mr-7 -mb-7 h-16 bg-featured6 bg-no-repeat bg-right-bottom opacity-10">

               </div>
               </div>
              </div>
            </div>
            <div class="p-1 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 bg-white p-6 rounded-lg overflow-hidden">
               <div class="container">
               <div class="w-10 h-10 mb-4">
               <img src={featured7img} />
               </div>
               <div class="container">
                <h3 class="font-bold text-md mb-3">Embeddable Minting Button</h3>
                <p class="text-sm">Embed your minting button into any website by using our ready-made code snippet</p>
               </div>
               <div class="-mr-7 -mb-7 h-16 bg-featured7 bg-no-repeat bg-right-bottom opacity-10">

               </div>
               </div>
              </div>
            </div>
            <div class="p-1 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 bg-white p-6 rounded-lg overflow-hidden">
               <div class="container">
               <div class="w-10 h-10 mb-4">
               <img src={featured8img} />
               </div>
               <div class="container">
                <h3 class="font-bold text-md mb-3">Anonymous</h3>
                <p class="text-sm">No email address, no names, no private info required
                </p>
               </div>
               <div class="-mr-7 -mb-7 h-16 bg-featured8 bg-no-repeat bg-right-bottom opacity-10">

               </div>
               </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
       <div class="max-w-screen-2xl lg:w-11/12 mx-auto my-20">
        <h2 class="text-md title-font text-center text-blue-800 tracking-widest mt-4">
          Pricing
        </h2>
        <hr class="w-10 my-2 text-xl mx-auto border-blue-800"></hr>

        <h2 class="text-center font-extrabold text-xl">Use for FREE</h2>
          <div class="flex flex-row">
          <div class="md:w-1/2 m-4 shadow-lg">
            <div class="bg-purple-800 rounded-t-xl h-20 relative flex justify-center items-end">
            <div class="rounded-full bg-white h-16 w-16 p-3 -mb-8">
            <img src={Polygon} class="w-10 h-10 rotate-14"/>
            </div>
            </div>

            <div class="bg-white rounded-b-xl pt-14 pb-10">
              <div class="flex flex-row">
                <div class="p-5">
                <p>Polygon</p>
                <h3 class="text-purple-700 text-2xl">FREE</h3>
                </div>
                <div class="pl-10 border-l-2">
                <ul class="list-disc text-lg">
                <li class="list-item list-none	m-2"> <CheckCircleIcon fontSize='small'/> FREE (just pay gas)</li>
                <li class="list-item list-none	m-2">  <CheckCircleIcon fontSize='small'/>10% Minting fee on the initial sale</li>
                <li class="list-item list-none	m-2"> <CheckCircleIcon fontSize='small'/> 1% royalty</li>
                </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="md:w-1/2 m-4 shadow-lg">
            <div class="bg-cyan-600 rounded-t-xl h-20 relative flex justify-center items-end">
            <div class="rounded-full bg-white h-16 w-16 p-3 -mb-8">
            <img src={Ethereum} class="w-10 h-10"/>
            </div>
            </div>
            <div class="bg-white rounded-b-xl pt-14 pb-10">
              <div class="flex flex-row">
                <div class="p-5">
                <p>Ethereum</p>
                <h3 class="text-cyan-600 text-2xl m-0">0.02</h3>
                <h4 class="text-cyan-600 text-base">ETH</h4>
                </div>
                <div class="pl-10 border-l-2">
                <ul class="list-disc text-lg">
                <li class="list-item list-none	m-2"> <CheckCircleIcon fontSize='small'/>0.02 ETH to add collection to
                blockchain + pay gas
                </li>
                <li class="list-item list-none	m-2"> <CheckCircleIcon fontSize='small'/>9% Minting fee on the initial sale</li>
                </ul>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 bg-gray-200 body-font">
      <div class="max-w-screen-2xl lg:w-11/12 px-5 flex flex-row py-24 mx-auto">
          <div class="md:w-1/2 m-4">
          <h2 class="text-4xl font-bold">Ready to get started?</h2>
          <p class="text-md leading-8 mt-3">Get your NFT collections done and start trading </p>
            <p> Any question? Just ping us on <span className="text-purple-700"><a className="hover:cursor-pointer"> Join Discord </a></span>. We'll be happy to help </p>
          </div>
          <div class="md:w-1/2 m-4 text-right">
          <button class="bg-cyan-500 text-white rounded-md p-5 w-60 text-lg">Connect Your Wallet</button>
          </div>
      </div>
      </section>
      <section class=" text-gray-600 body-font">
      <div class="max-w-screen-2xl lg:w-11/12 px-4 flex flex-row mx-auto">
          <div class="md:w-1/2 m-4">
          <nav class="ml-auto flex flex-wrap items-center text-base justify-right">
            <a class="mr-5 hover:text-gray-900 hover:cursor-pointer" href="https://docs-flume.gitbook.io/flume/" target="_blank">Guide</a>
            <a class="mr-5 hover:text-gray-900 hover:cursor-pointer" href="https://docs-flume.gitbook.io/flume/flume/terms-of-service" target="_blank">Terms of Services</a>
            <a class="mr-5 hover:text-gray-900 hover:cursor-pointer">
              <img src={Vector} />
            </a>
          </nav>
          </div>
          <div class="md:w-1/2 m-4 text-right">
          <p>Copyright @ Flume 2022, All rights reserved.</p>
          </div>
      </div>
      </section>
    </div>
  );
}
