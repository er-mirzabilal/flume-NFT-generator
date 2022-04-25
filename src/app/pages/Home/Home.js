import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useMoralis } from "react-moralis";
import Header from "../Components/Header/Header";
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
import Ethereum from "../../../assets/images/ethereum.png";
import Polygon from "../../../assets/images/polygon-matic-logo.png";
import "./Home.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
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
        <div class="max-w-screen-2xl mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="pl-6 pr-6 sm:pr-10 md:pl-16 sm:py-0 py-10 self-center">
            <h2 class="xl:text-7xl lg:text-5xl md:text-4xl text-3xl lg:mb-4 mb-1 font-semibold text-third">
              Create NFT
            </h2>
            <h2 class="xl:text-7xl lg:text-5xl md:text-4xl text-3xl lg:mb-4 mb-1 font-semibold text-third">
            Collections Easily
            </h2>
            <p className="my-3 text-xl font-normal text-third sm:text-2xl md:my-10">
            Create NFT collections, tradable on OpenSea & other marketplaces without writing a single line of code
            </p>
            <div class="flex no-wrap">
              <a href="#">
                <button class="m-1 text-white bg-primary border-0 py-2 sm:px-6 px-2 focus:outline-primary rounded font-semibold sm:text-lg text-md">
                  Join the Discord
                </button>
              </a>
              <a href="/create-collections">
                <button class="m-1 text-white bg-secondary border-0 py-2 sm:px-6 px-2 focus:outline-secondary rounded font-semibold sm:text-lg text-md">
                  Generate Collection
                </button>
              </a>
            </div>
          </div>
          <div class="px-6 sm:px-0 mr-0 ml-auto shrink-0">
            <img
              class="w-96 h-96 xl:w-full xl:h-auto rounded"
              alt="image"
              src={Section1img}
            />
          </div>
        </div>
      </section>
      <section class="text-gray-600 bg-gray body-font">
        <div class="max-w-screen-2xl w-11/12 mx-auto flex sm:flex-nowrap flex-wrap-reverse">
          <div class="my-10 mr-0 ml-auto shrink-0">
            <img
              alt="ecommerce"
              class="w-96 h-96 xl:w-full xl:h-auto rounded"
              src={Section2img}
            />
          </div>

          <div class="my-6 md:my-10 pl-0 sm:pl-6 text-left flex flex-col justify-evenly">
            <div>
            <h2 class="text-2xl font-normal text-primary">Easy</h2>
            <hr class="w-6 mb-3 text-2xl font-normal border-primary" />
            </div>
            <h1 class="text-third font-medium xl:text-5xl md:text-4xl text-3xl mb-3">
            The easiest way to {" "}
              <span class="text-secondary">
                {" "}
                create NFT collectibles
              </span>{" "}
               on the blockchain
            </h1>

            <p class="text-third font-normal text-xl md:text-2xl mb-3">
            Create 10,000+ NFT collections, by uploading the layers. Without requiring code
            </p>
            <a
              href="https://docs-flume.gitbook.io/flume/what-is-flume/general-flow"
              target="_blank"
            >
              <button class="flex text-white font-semibold bg-primary border-0 py-2 focus:outline-primary rounded text-sm md:text-lg sm:px-6 px-2">
                Learn More
              </button>
            </a>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="max-w-screen-2xl w-11/12 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="mt-6 lg:mt-0 pr-0 sm:pr-6 text-left flex flex-col justify-evenly">
          <div>
          <h2 class="text-2xl font-normal text-primary">
              Compatible
            </h2>
            <hr class="w-6 mb-3 text-2xl font-normal border-primary" />
          </div>
            
            <h1 class="text-third font-medium xl:text-5xl md:text-4xl text-3xl mb-3">
            Sell your NFTs on marketplaces like{" "}
              <span class="text-secondary">OpenSea</span>
            </h1>

            <p class="text-third font-normal text-xl md:text-2xl mb-3">
            Once minted, NFTs can be traded on opensea and other marketplaces.
             Since you own your contract, you keep the royalties.
            </p>

            <a
              href="https://docs-flume.gitbook.io/flume/guides/sharing-your-nfts/marketplaces-sync"
              target="_blank"
            >
              <button className="flex px-2 py-2 text-sm font-semibold text-white border-0 rounded bg-primary focus:outline-primary md:text-lg sm:px-6">
                Learn More
              </button>
            </a>
          </div>
          <div class="my-10 mr-0 ml-auto shrink-0">
            <img
              alt="ecommerce"
              class="w-96 h-96 xl:w-full xl:h-auto rounded"
              src={Section3img}
            />
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="max-w-screen-2xl w-11/12 mx-auto flex sm:flex-nowrap flex-wrap-reverse">
          <div class="my-10 sm:mr-auto mr-0 ml-auto shrink-0">
            <img
              alt="ecommerce"
              class="w-96 h-96 xl:w-full xl:h-auto rounded"
              src={Section4img}
            />
          </div>

          <div class="mt-6 lg:mt-0 pl-0 sm:pl-6 text-left flex flex-col justify-evenly">
          <div>
          <h2 class="text-2xl font-normal text-primary">
              Powerful
            </h2>
            <hr class="w-6 mb-3 text-2xl font-normal border-primary" />
          </div>
            
            <h1 class="text-third font-medium xl:text-5xl md:text-4xl text-3xl mb-3">
              Configure Rarity,{" "}
              <span class="text-secondary">Mint Fees</span>  and more
            </h1>

            <p class="text-third font-normal text-xl md:text-2xl mb-3">
            Configure how rare each layer of an NFT is. Add custom metadata. 
            Set your own minting fees, and perform air drops easily.
            </p>
            <a
              href="https://docs-flume.gitbook.io/flume/guides/uploading-content"
              target="_blank"
            >
            <button class="flex text-white font-semibold bg-primary border-0 py-2 focus:outline-primary rounded text-sm md:text-lg sm:px-6 px-2">
            Learn More
          </button>
            </a>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="max-w-screen-2xl w-11/12 mx-auto flex sm:flex-nowrap flex-wrap">
          <div class="mt-6 lg:mt-0 pr-0 sm:pr-6 text-left flex flex-col justify-evenly">
          <div>
          <h2 class="text-2xl font-normal text-primary">
              Fast
            </h2>
            <hr class="w-6 mb-3 text-2xl font-normal border-primary" />
          </div>
            
            <h1 class="text-third font-medium xl:text-5xl md:text-4xl text-3xl mb-3">
              <span class="text-secondary"> Ready-made </span> minting pages
            </h1>

            <p class="text-third font-normal text-xl md:text-2xl mb-3">
            Beautiful minting pages let people mint your NFTs. 
            You can choose from multiple minting strategies including random assignment, 
            and individual selection.
            </p>
            <a
              href="https://docs-flume.gitbook.io/flume/guides/sharing-your-nfts/embedding-into-your-website"
              target="_blank"
            >
              <button class="flex text-white font-semibold bg-primary border-0 py-2 focus:outline-primary rounded text-sm md:text-lg sm:px-6 px-2">
                Learn More
              </button>
            </a>
          </div>
          <div class="my-10 mr-0 ml-auto shrink-0">
            <img
              alt="ecommerce"
              class="w-96 h-96 xl:w-full xl:h-auto rounded"
              src={Section5img}
            />
          </div>
        </div>
      </section>
      <section class="text-gray-600 bg-gray body-font">
        <div class="max-w-screen-2xl w-11/12 py-12 mx-auto">
          <h2 class="text-md title-font text-center text-primary tracking-widest mt-4">
            Fully Featured
          </h2>
          <hr class="w-10 my-2 text-xl mx-auto border-primary"></hr>

          <h2 class="text-center text-third font-extrabold text-xl">
            Everything you need
          </h2>

          <div class="flex flex-wrap text-left">
            <div class="p-1 md:w-1/4 sm:w-1/2 w-full">
              <div class=" bg-white p-6 rounded-lg overflow-hidden">
                <div class="container">
                  <div class="w-10 h-10 mb-4">
                    <img src={featured1img} />
                  </div>
                  <div class="container">
                    <h3 class="font-bold text-md mb-3 text-third">
                      Super Simple (no code)
                    </h3>
                    <p class="text-sm text-third">
                      Quickly generate your NFT collection without coding
                    </p>
                  </div>
                  <div class="-mr-7 -mb-7 h-16 bg-featured1 bg-no-repeat bg-right-bottom opacity-10"></div>
                </div>
              </div>
            </div>
            <div class="p-1 md:w-1/4 sm:w-1/2 w-full">
              <div class=" bg-white p-6 rounded-lg overflow-hidden">
                <div class="container">
                  <div class="w-10 h-10 mb-4">
                    <img src={featured2img} />
                  </div>
                  <div class="container">
                    <h3 class="font-bold text-md mb-3 text-third">Own Your Contract</h3>
                    <p class="text-sm text-third">
                      Create NFT collections with ease, using the all-in-one
                      generator
                    </p>
                  </div>
                  <div class="-mr-7 -mb-7 h-16 bg-featured2 bg-no-repeat bg-right-bottom opacity-10"></div>
                </div>
              </div>
            </div>
            <div class="p-1 md:w-1/4 sm:w-1/2 w-full">
              <div class=" bg-white p-6 rounded-lg overflow-hidden">
                <div class="container">
                  <div class="w-10 h-10 mb-4">
                    <img src={featured3img} />
                  </div>
                  <div class="container">
                    <h3 class="font-bold text-md mb-3 text-third">Set Traits Rarity</h3>
                    <p class="text-sm text-third">
                      Configure how rare each trait of your NFT should be
                    </p>
                  </div>
                  <div class="-mr-7 -mb-7 h-16 bg-featured3 bg-no-repeat bg-right-bottom opacity-10"></div>
                </div>
              </div>
            </div>
            <div class="p-1 md:w-1/4 sm:w-1/2 w-full">
              <div class=" bg-white p-6 rounded-lg overflow-hidden">
                <div class="container">
                  <div class="w-10 h-10 mb-4">
                    <img src={featured4img} />
                  </div>
                  <div class="container">
                    <h3 class="font-bold text-md mb-3 text-third">IPFS File Hosting</h3>
                    <p class="text-sm text-third">
                      Create NFT collections with ease, using the all-in-one
                      generator
                    </p>
                  </div>
                  <div class="-mr-7 -mb-7 h-16 bg-featured4 bg-no-repeat bg-right-bottom opacity-10"></div>
                </div>
              </div>
            </div>
            <div class="p-1 md:w-1/4 sm:w-1/2 w-full">
              <div class=" bg-white p-6 rounded-lg overflow-hidden">
                <div class="container">
                  <div class="w-10 h-10 mb-4">
                    <img src={featured5img} />
                  </div>
                  <div class="container">
                    <h3 class="font-bold text-md mb-3 text-third">Generate Metadata</h3>
                    <p class="text-sm text-third">
                      Generate automatically metadata for your NFTs
                    </p>
                  </div>
                  <div class="-mr-7 -mb-7 h-16 bg-featured5 bg-no-repeat bg-right-bottom opacity-10"></div>
                </div>
              </div>
            </div>
            <div class="p-1 md:w-1/4 sm:w-1/2 w-full">
              <div class=" bg-white p-6 rounded-lg overflow-hidden">
                <div class="container">
                  <div class="w-10 h-10 mb-4">
                    <img src={featured6img} />
                  </div>
                  <div class="container">
                    <h3 class="font-bold text-md mb-3 text-third">Lazy Minting</h3>
                    <p class="text-sm text-third">
                      No upfront minting gas fee for you. Defer them to your
                      buyers
                    </p>
                  </div>
                  <div class="-mr-7 -mb-7 h-16 bg-featured6 bg-no-repeat bg-right-bottom opacity-10"></div>
                </div>
              </div>
            </div>
            <div class="p-1 md:w-1/4 sm:w-1/2 w-full">
              <div class=" bg-white p-6 rounded-lg overflow-hidden">
                <div class="container">
                  <div class="w-10 h-10 mb-4">
                    <img src={featured7img} />
                  </div>
                  <div class="container">
                    <h3 class="font-bold text-md mb-3 text-third">
                      Embeddable Minting Button
                    </h3>
                    <p class="text-sm text-third">
                      Embed your minting button into any website by using our
                      ready-made code snippet
                    </p>
                  </div>
                  <div class="-mr-7 -mb-7 h-16 bg-featured7 bg-no-repeat bg-right-bottom opacity-10"></div>
                </div>
              </div>
            </div>
            <div class="p-1 md:w-1/4 sm:w-1/2 w-full">
              <div class=" bg-white p-6 rounded-lg overflow-hidden">
                <div class="container">
                  <div class="w-10 h-10 mb-4">
                    <img src={featured8img} />
                  </div>
                  <div class="container">
                    <h3 class="font-bold text-md mb-3 text-third">Anonymous</h3>
                    <p class="text-sm text-third">
                      No email address, no names, no private info required
                    </p>
                  </div>
                  <div class="-mr-7 -mb-7 h-16 bg-featured8 bg-no-repeat bg-right-bottom opacity-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="max-w-screen-2xl w-11/12 py-12 mx-auto">
          <h2 class="text-md title-font text-center text-primary tracking-widest mt-4">
            Pricing
          </h2>
          <hr class="w-10 my-2 text-xl mx-auto border-primary"></hr>

          <h2 class="text-center font-extrabold text-third text-xl">Use for FREE</h2>
          <div class="flex flex-wrap sm:flex-nowrap justify-between">
            <div class="m-2 shadow-lg w-full">
              <div class="bg-primary rounded-t-xl h-20 relative flex justify-center items-end">
                <div class="rounded-full bg-white h-16 w-16 p-3 -mb-8">
                  <img src={Polygon} class="w-10 h-10 rotate-14" />
                </div>
              </div>

              <div class="bg-white rounded-b-xl py-5">
                <div class="flex flex-row">
                  <div class="p-5 self-center">
                    <p class="text-third">Polygon</p>
                    <h3 class="text-primary text-2xl">FREE</h3>
                  </div>
                  <div class="p-5 border-l-2 self-center">
                    <ul class="list-disc text-lg">
                      <li class="list-item list-none m-2 text-third">
                        {" "}
                        <CheckCircleIcon fontSize="small" className="text-primary" /> FREE (just pay gas)
                      </li>
                      <li class="list-item list-none m-2 text-third">
                        {" "}
                        <CheckCircleIcon fontSize="small" className="text-primary" />
                        10% Minting fee on the initial sale
                      </li>
                      <li class="list-item list-none m-2 text-third">
                        {" "}
                        <CheckCircleIcon fontSize="small" className="text-primary" /> 1% royalty
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="m-2 shadow-lg w-full">
              <div class="bg-secondary rounded-t-xl h-20 relative flex justify-center items-end">
                <div class="rounded-full bg-white h-16 w-16 p-3 -mb-8">
                  <img src={Ethereum} class="w-10 h-10" />
                </div>
              </div>
              <div class="bg-white rounded-b-xl py-5">
                <div class="flex flex-row">
                  <div class="p-5 self-center">
                    <p class="text-third">Ethereum</p>
                    <h3 class="text-secondary text-2xl m-0">0.02</h3>
                    <h4 class="text-secondary text-base">ETH</h4>
                  </div>
                  <div class="p-5 border-l-2 self-center">
                    <ul class="list-disc text-lg">
                      <li class="list-item list-none m-2 text-third">
                        {" "}
                        <CheckCircleIcon fontSize="small" className="text-secondary"/>
                        0.02 ETH to add collection to blockchain + pay gas
                      </li>
                      <li class="list-item list-none m-2 text-third">
                        {" "}
                        <CheckCircleIcon fontSize="small" className="text-secondary" />
                        9% Minting fee on the initial sale
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class=" bg-gray body-font">
        <div class="max-w-screen-2xl w-11/12 mx-auto py-5 flex sm:justify-between justify-center sm:flex-nowrap flex-wrap">
          <div class="m-2 text-third">
            <h2 class="text-4xl font-bold">Ready to get started?</h2>
            <p class="text-md leading-8 mt-3">
              Get your NFT collections done and start trading{" "}
            </p>
            <p>
              {" "}
              Any question? Just ping us on{" "}
              <span className="text-purple-700">
                <a className="hover:cursor-pointer"> Join Discord </a>
              </span>
              . We'll be happy to help{" "}
            </p>
          </div>
          <div class="m-2 flex">
            <button class="bg-secondary text-white rounded-md p-5 w-60 text-lg self-center">
              Connect Your Wallet
            </button>
          </div>
        </div>
      </section>
      <section class=" text-third body-font">
        <div class="max-w-screen-2xl w-11/12 mx-auto flex sm:justify-between justify-center sm:flex-nowrap flex-wrap">
          <div class="m-2">
            <nav class="ml-auto flex flex-wrap items-center text-base justify-right">
              <a
                class="mr-5 hover:text-gray-900 hover:cursor-pointer"
                href="https://docs-flume.gitbook.io/flume/"
                target="_blank"
              >
                Guide
              </a>
              <a
                class="mr-5 hover:text-gray-900 hover:cursor-pointer"
                href="https://docs-flume.gitbook.io/flume/flume/terms-of-service"
                target="_blank"
              >
                Terms of Services
              </a>
              <a class="mr-5 hover:text-gray-900 hover:cursor-pointer">
                <img src={Vector} />
              </a>
            </nav>
          </div>
          <div class="m-2">
            <p>Copyright @ Flume 2022, All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
