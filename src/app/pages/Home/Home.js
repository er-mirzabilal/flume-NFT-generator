import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useMoralis } from "react-moralis";
import Logo from "../../../assets/images/Logo.png";
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
import "./Home.css";
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

      <header class="text-gray-600 body-font shadow-lg md:px-5">
        <div class="container mx-auto flex flex-wrap p-5 sm:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 md:mb-0">
            <img src={Logo} />
          </a>
          <nav class="ml-auto flex flex-wrap items-center text-base justify-right">
            <a class="mr-5 hover:text-gray-900 hover:cursor-pointer">Guide</a>
            <a class="mr-5 hover:text-gray-900 hover:cursor-pointer">
              <img src={Vector} />
            </a>
          </nav>
          <button class="inline-flex items-center text-white bg-cyan-500 border-0 py-1 px-3 focus:outline-none hover:bg-cyan-300 rounded text-base mt-4 sm:mt-0">
            Connect Wallet
          </button>
        </div>
      </header>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Create NFT
              <br class="hidden lg:inline-block" />
              Collections Easily
            </h1>
            <p class="mb-8 leading-relaxed">
              Create NFT collections, tradeable on Opensea & marketplaces
              without writing a single line of code
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Join the Discord
              </button>
              <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Generate Collection
              </button>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="w-full" alt="image" src={Section1img} />
          </div>
        </div>
      </section>
      <section class="text-gray-600 bg-gray-200 body-font overflow-hidden">
        <div class="lg:w-4/5 mx-auto flex flex-row">
          <div class="lg:w-1/2 w-full lg:pl-0 my-10 text-center">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={Section2img}
            />
          </div>

          <div class="lg:w-1/2 w-full lg:pl-0 lg:py-6 mt-6 lg:mt-0 text-left">
            <h2 class="text-sm title-font text-blue-800 tracking-widest mt-4">
              Simple
            </h2>
            <hr class="w-5 mb-3 font-bold" />
            <h1 class="text-gray-900 text-3xl title-font font-small mb-3">
              The easiest way to{" "}
              <span class="text-cyan-500">create NFT collectibles</span> on the
              blockchain
            </h1>

            <p class="leading-relaxed mb-3">
              Create 10,000+ NFT collections, by uploading the layers. Without
              requiring code.
            </p>
            <button class="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="lg:w-4/5 mx-auto flex flex-row">
          <div class="lg:w-1/2 w-full lg:pl-0 lg:py-6 mt-6 lg:mt-0 text-left">
            <h2 class="text-sm title-font text-blue-800 tracking-widest mt-4">
              Compatible
            </h2>
            <hr class="w-6 mb-3 font-xl border-blue-800" />
            <h1 class="text-gray-900 text-3xl title-font font-small mb-3">
              Sell your NFTs on marketplaces like{" "}
              <span class="text-cyan-500">OpenSea</span>
            </h1>

            <p class="leading-relaxed mb-3">
              Once minted, NFTs can be traded on opensea and other
              marketplaces.Since you own your contract, you keep the royalties.
            </p>
            <button class="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Learn More
            </button>
          </div>
          <div class="lg:w-1/2 w-full lg:pl-0 my-10 text-right">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 rounded"
              src={Section3img}
            />
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="lg:w-4/5 mx-auto flex flex-row">
          <div class="lg:w-1/2 w-full lg:pl-0 my-10 text-center">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={Section4img}
            />
          </div>

          <div class="lg:w-1/2 w-full lg:pl-0 lg:py-6 mt-6 lg:mt-0 text-left">
            <h2 class="text-sm title-font text-blue-800 tracking-widest mt-4">
              Powerful
            </h2>
            <hr class="w-6 mb-3 font-xl border-blue-800" />
            <h1 class="text-gray-900 text-3xl title-font font-small mb-3">
              Configure Rarity, <span class="text-cyan-500">Mint Fees</span> and
              more
            </h1>

            <p class="leading-relaxed mb-3">
              Configure how rare each layer of an NFT is. Add custom metadata.
              Set your own minting fees, and perform air drops easily.
            </p>
            <button class="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Learn More
            </button>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="lg:w-4/5 mx-auto flex flex-row">
          <div class="lg:w-1/2 w-full lg:pl-0 lg:py-6 mt-6 lg:mt-0 text-left">
            <h2 class="text-sm title-font text-pink-500 tracking-widest mt-4">
              Fast
            </h2>
            <hr class="w-6 mb-3 font-xl border-blue-800" />
            <h1 class="text-gray-900 text-3xl title-font font-small mb-3">
              <span class="text-cyan-500">Ready-made </span> minting pages
            </h1>

            <p class="leading-relaxed mb-3">
              Beautiful minting pages let people mint your NFTs. You can choose
              from multiple minting strategies including random assignment, and
              individual section.
            </p>
            <button class="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Learn More
            </button>
          </div>
          <div class="lg:w-1/2 w-full lg:pl-0 my-10 text-center">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={Section5img}
            />
          </div>
        </div>
      </section>
      <section class="text-gray-600 bg-gray-200 body-font overflow-hidden">
        <h2 class="text-md title-font text-center text-blue-800 tracking-widest mt-4">
          Fully Featured
        </h2>
        <hr class="w-10 my-2 text-xl mx-auto border-blue-800"></hr>

        <h2 class="text-center font-extrabold text-xl">Everything you need</h2>

        <div class="md:w-4/5 px-5 py-24 mx-auto">
          <div class="flex flex-wrap text-left">
            <div class="p-1 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 bg-white p-6 rounded-lg overflow-hidden">
               <div class="container">
               <div class="w-10 h-10 mb-4">
               <img src={featured1img} />
               </div>
               <div class="container">
                <h3 class="font-bold text-md mb-3">Super Simple (no code)</h3>
                <p class="text-sm">Create NFT collections with ease,
                using the all-in-one generator</p>
               </div>
               <div class="-mr-7 -mb-7 h-16 bg-featured1 bg-no-repeat bg-right-bottom bg-opacity-90">

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
               <div class="-mr-7 -mb-7 h-16 bg-featured2 bg-no-repeat bg-right-bottom bg-opacity-90">

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
                <h3 class="font-bold text-md mb-3">Set Layer Rarity</h3>
                <p class="text-sm">Create NFT collections with ease,
                using the all-in-one generator</p>
               </div>
               <div class="-mr-7 -mb-7 h-16 bg-featured3 bg-no-repeat bg-right-bottom bg-opacity-90">

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
               <div class="-mr-7 -mb-7 h-16 bg-featured4 bg-no-repeat bg-right-bottom bg-opacity-90">

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
                <h3 class="font-bold text-md mb-3">Add Custom Metadata</h3>
                <p class="text-sm">Create NFT collections with ease,
                using the all-in-one generator</p>
               </div>
               <div class="-mr-7 -mb-7 h-16 bg-featured5 bg-no-repeat bg-right-bottom bg-opacity-90">

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
                <h3 class="font-bold text-md mb-3">Random Minting</h3>
                <p class="text-sm">Create NFT collections with ease,
                using the all-in-one generator</p>
               </div>
               <div class="-mr-7 -mb-7 h-16 bg-featured6 bg-no-repeat bg-right-bottom bg-opacity-90">

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
                <h3 class="font-bold text-md mb-3">Prebuilt Minting Pages</h3>
                <p class="text-sm">Create NFT collections with ease,
                using the all-in-one generator</p>
               </div>
               <div class="-mr-7 -mb-7 h-16 bg-featured7 bg-no-repeat bg-right-bottom bg-opacity-90">

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
                <h3 class="font-bold text-md mb-3">Run Air Drops</h3>
                <p class="text-sm">Create NFT collections with ease,
                using the all-in-one generator</p>
               </div>
               <div class="-mr-7 -mb-7 h-16 bg-featured8 bg-no-repeat bg-right-bottom bg-opacity-10">

               </div>
               </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font overflow-hidden">
        <h2 class="text-md title-font text-center text-blue-800 tracking-widest mt-4">
          Pricing
        </h2>
        <hr class="w-10 my-2 text-xl mx-auto border-blue-800"></hr>

        <h2 class="text-center font-extrabold text-xl">Use for FREE</h2>
        <div class="md:w-4/5 px-5 py-24 mx-auto flex flex-grow">
          <div class="md:w-1/2 m-4 shadow-lg">
            <div class="bg-purple-800 rounded-t-xl h-20 relative">
            <div class="rounded-full bg-white h-16 w-16 p-3 absolute inset-2/4">
            <img src={Vector} class="w-10 h-10 absolute inset-x-auto"/>
            </div>
            </div>

            <div class="bg-white rounded-b-xl pt-14 pb-10">
              <div class="flex flex-row">
                <div class="p-5">
                <p>Polygon</p>
                <h3 class="text-purple-700">FREE</h3>
                </div>
                <div class="pl-10 border-l-2">
                <ul class="list-disc text-lg">
                <li class="list-item">FREE (just pay gas)</li>
                <li class="list-item">10% Minting fee on the initial sale</li>
                <li class="list-item">0 - 1% royalty</li>
                </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="md:w-1/2 m-4 shadow-lg">
            <div class="bg-cyan-600 rounded-t-xl h-20 relative">
            <div class="rounded-full bg-white h-16 w-16 p-3 absolute inset-2/4">
            <img src={Vector} class="w-10 h-10 absolute inset-x-auto"/>
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
                <li class="list-item">0.02 ETH to add collection to
                blockchain + pay gas
                </li>
                <li class="list-item">9% Minting fee on the initial sale</li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 bg-gray-200 body-font overflow-hidden">
      <div class="md:w-4/5 px-5 flex flex-row py-24 mx-auto">
          <div class="md:w-1/2 m-4">
          <h2 class="text-4xl font-bold">Ready to get started?</h2>
          <p class="text-md leading-8 mt-3">Start uploading and create the next big NFT collection 
             for any further questions, please <span class="text-purple-700"><a class="hover:cursor-pointer">join the discard.</a></span></p>
          </div>
          <div class="md:w-1/2 m-4 text-right">
          <button class="bg-cyan-500 text-white rounded-md p-5 w-60 text-lg">Connect Your Wallet</button>
          </div>
      </div>
      </section>
      <section class="text-gray-600 body-font overflow-hidden">
      <div class="md:w-4/5 px-4 flex flex-row mx-auto">
          <div class="md:w-1/2 m-4">
          <nav class="ml-auto flex flex-wrap items-center text-base justify-right">
            <a class="mr-5 hover:text-gray-900 hover:cursor-pointer">Guide</a>
            <a class="mr-5 hover:text-gray-900 hover:cursor-pointer">Terms & Legal</a>
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
