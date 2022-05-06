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
          <div class="pl-6 sm:pl-10 pr-6 sm:pr-10 sm:py-0 py-10 self-center">
            <h2 class="xl:text-7xl lg:text-5xl md:text-4xl text-3xl lg:mb-4 mb-1 font-semibold text-third">
            Create and Deploy<br></br> NFT Collections<br></br> without coding
            </h2>
            
            <p className="my-3 text-xl font-normal text-third sm:text-2xl lg:my-10">
            Generate, deploy, and trade NFT collections without writing any line of code. 
            <br></br>All in a matter of minutes!
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
              The simplest way to {" "}
              <span class="text-secondary">
                {" "}
                generate and deploy NFT
              </span>{" "}
              collections on the blockchain
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
            Integrated
            </h2>
            <hr class="w-6 mb-3 text-2xl font-normal border-primary" />
          </div>
            
            <h1 class="text-third font-medium xl:text-5xl md:text-4xl text-3xl mb-3">
            Trade your NFTs on famous marketplaces like{" "}
              <span class="text-secondary">OpenSea</span>
            </h1>

            <p class="text-third font-normal text-xl md:text-2xl mb-3">
            Once minted, the NFTs will be instantly available in the most
            famous NFT marketplaces and ready for sale.
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
              <span class="text-secondary">Mint Price</span>  <br></br>and <span class="font-bold">Deploy</span> to Blockchain
            </h1>

            <p class="text-third font-normal text-xl md:text-2xl mb-3">
            Configure certain attributes to be more rare than others, 
            set the minting price and deploy your collection to the blockchain.
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
          Customizable
            </h2>
            <hr class="w-6 mb-3 text-2xl font-normal border-primary" />
          </div>
            
            <h1 class="text-third font-medium xl:text-5xl md:text-4xl text-3xl mb-3">
              <span class="text-secondary"> Pre built </span>  Minting Button
            </h1>

            <p class="text-third font-normal text-xl md:text-2xl mb-3">
            Embed a minting button linked to your collection to any website.<br></br> 
            Customize it as you want and allow people to mint<br></br> directly from there.
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
          <h2 class="text-base font-normal title-font text-center text-primary tracking-widest mt-4">
            Fully Featured
          </h2>
          <hr class="w-10 my-2 text-base mx-auto border-primary"></hr>

          <h2 class="text-center text-third font-medium text-4xl mb-10">
            Everything you need
          </h2>

          <div class="flex flex-wrap text-left">
            <div class="p-1 md:w-1/4 sm:w-1/2 w-full">
              <div class=" bg-white p-6 rounded-lg h-full overflow-hidden relative flex flex-col">
                <div class="flex flex-col justify-evenly">
                <div class="h-10">
                    <img src={featured1img} class="h-full" />
                    </div>
                    <h3 class="font-bold text-md my-3 text-third">
                      Super Simple (no code)
                    </h3>
                    <p class="text-sm text-third">
                      Quickly generate your NFT collection without coding
                    </p>
                  <div class="-right-1 -bottom-1 opacity-10 w-max absolute">
                  <img src={featured1img}></img>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-1 md:w-1/4 sm:w-1/2 w-full">
              <div class=" bg-white p-6 rounded-lg h-full overflow-hidden relative flex flex-col">
                <div class="flex flex-col justify-evenly">
                  <div class="h-10 flex">
                    <img src={featured2img}  class="h-6 w-12 self-center"/>
                  </div>
                    <h3 class="font-bold text-md my-3 text-third">Own Your Contract</h3>
                    <p class="text-sm text-third">
                      Create NFT collections with ease, using the all-in-one
                      generator
                    </p>
                  <div class="-right-1 -bottom-1 opacity-10 w-max absolute">
                  <img src={featured2img}></img>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-1 md:w-1/4 sm:w-1/2 w-full">
              <div class=" bg-white p-6 rounded-lg h-full overflow-hidden relative flex flex-col">
                <div class="flex flex-col justify-evenly">
                  <div class="h-10">
                    <img src={featured3img} class="h-full"/>
                  </div>
                    <h3 class="font-bold text-md my-3 text-third">Set Traits Rarity</h3>
                    <p class="text-sm text-third">
                      Configure how rare each trait of your NFT should be
                    </p>
                  <div class="-right-1 -bottom-1 opacity-10 w-max absolute">
                  <img src={featured3img}></img>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-1 md:w-1/4 sm:w-1/2 w-full">
              <div class=" bg-white p-6 rounded-lg h-full overflow-hidden relative flex flex-col">
                <div class="flex flex-col justify-evenly">
                  <div class="h-10">
                    <img src={featured4img} class="h-full"/>
                  </div>
                    <h3 class="font-bold text-md my-3 text-third">IPFS File Hosting</h3>
                    <p class="text-sm text-third">
                      Create NFT collections with ease, using the all-in-one
                      generator
                    </p>
                  <div class="-right-1 -bottom-1 opacity-10 w-max absolute">
                  <img src={featured4img}></img>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-1 md:w-1/4 sm:w-1/2 w-full">
              <div class=" bg-white p-6 rounded-lg h-full overflow-hidden relative flex flex-col">
                <div class="flex flex-col justify-evenly">
                  <div class="h-10">
                    <img src={featured5img} class="h-full"/>
                  </div>
                    <h3 class="font-bold text-md my-3 text-third">Generate Metadata</h3>
                    <p class="text-sm text-third">
                      Generate automatically metadata for your NFTs
                    </p>
                  <div class="-right-1 -bottom-1 opacity-10 w-max absolute">
                  <img src={featured5img}></img>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-1 md:w-1/4 sm:w-1/2 w-full">
              <div class=" bg-white p-6 rounded-lg h-full overflow-hidden relative flex flex-col">
                <div class="flex flex-col justify-evenly">
                  <div class="h-10">
                    <img src={featured6img} class="h-full"/>
                  </div>
                    <h3 class="font-bold text-md my-3 text-third">Lazy Minting</h3>
                    <p class="text-sm text-third">
                      No upfront minting gas fee for you. Defer them to your
                      buyers
                    </p>
                  <div class="-right-1 -bottom-1 opacity-10 w-max absolute">
                  <img src={featured6img}></img>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-1 md:w-1/4 sm:w-1/2 w-full">
              <div class=" bg-white p-6 rounded-lg h-full overflow-hidden relative flex flex-col">
                <div class="flex flex-col justify-evenly">
                  <div class="h-10">
                    <img src={featured7img} class="h-full"/>
                  </div>
                    <h3 class="font-bold text-md my-3 text-third">
                      Embeddable Minting Button
                    </h3>
                    <p class="text-sm text-third">
                      Embed your minting button into any website by using our
                      ready-made code snippet
                    </p>
                  
                  <div class="-right-1 -bottom-1 opacity-10 w-max absolute">
                  <img src={featured7img}></img>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-1 md:w-1/4 sm:w-1/2 w-full">
              <div class="bg-white p-6 rounded-lg h-full overflow-hidden relative flex flex-col">
                <div class="flex flex-col justify-evenly">
                  <div class="h-10">
                    <img src={featured8img} class="h-full"/>
                  </div>
                    <h3 class="font-bold text-md my-3 text-third">Anonymous</h3>
                    <p class="text-sm text-third">
                      No email address, no names, no private info required
                    </p>
                  <div class="-right-1 -bottom-1 opacity-10 w-max absolute">
                  <img src={featured8img} ></img>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="max-w-screen-2xl w-11/12 py-12 mx-auto">
          <h2 class="text-base font-normal text-center text-primary tracking-widest mt-4">
            Pricing
          </h2>
          <hr class="w-10 my-2 text-base mx-auto border-primary"></hr>

          <h2 class="text-center font-medium text-third text-4xl mb-10">Use for FREE</h2>
          <div class="flex flex-wrap md:flex-nowrap justify-between">
            <div class="m-2 shadow-lg w-full">
              <div class="bg-primary rounded-t-xl h-20 relative flex justify-center items-end">
                <div class="rounded-full bg-white h-16 w-16 p-3 -mb-8">
                  <img src={Polygon} class="w-10 h-10 rotate-14" />
                </div>
              </div>

              <div class="bg-white rounded-b-xl py-5">
                <div class="flex flex-row">
                  <div class="p-5 font-semibold self-center">
                    <p class="text-third text-2xl">Polygon</p>
                    <h3 class="text-primary text-7xl">FREE</h3>
                  </div>
                  <div class="p-5 border-l-2 self-center">
                    <ul class="list-disc font-normal text-lg">
                      <li class=" list-none m-2 text-third flex">
                        {" "}
                        <CheckCircleIcon fontSize="small" className="self-start m-1 text-primary" /> 
                        <p class="ml-1">FREE (just pay gas)</p>
                      </li>
                      <li class="flex list-none m-2 text-third">
                        {" "}
                        <CheckCircleIcon fontSize="small" className="self-start m-1 text-primary" />
                        <p class="ml-1">10% Minting fee on the initial sale</p>
                      </li>
                      <li class="flex list-none m-2 text-third">
                        {" "}
                        <CheckCircleIcon fontSize="small" className="self-start m-1 text-primary" /> 
                        <p class="ml-1">1% royalty</p>
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
                  <div class="p-5 font-semibold self-center">
                    <p class="text-third text-2xl">Ethereum</p>
                    <h3 class="text-secondary text-6xl m-0">0.02</h3>
                    <h4 class="text-secondary text-3xl">ETH</h4>
                  </div>
                  <div class="p-5 border-l-2 self-center">
                    <ul class="list-disc font-normal text-lg">
                      <li class="flex list-none m-2 text-third">
                        {" "}
                        <CheckCircleIcon fontSize="small" className="self-start m-1 text-secondary"/>
                        <p class="ml-1">0.02 ETH to add collection to blockchain + pay gas</p>
                      </li>
                      <li class="flex list-none m-2 text-third">
                        {" "}
                        <CheckCircleIcon fontSize="small" className="self-start m-1 text-secondary" />
                        <p class="ml-1">9% Minting fee on the initial sale</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-gray body-font">
        <div class="max-w-screen-2xl w-11/12 mx-auto py-14 flex sm:justify-between justify-center sm:flex-nowrap flex-wrap">
          <div class="m-2 text-third sm:text-left text-center">
            <h2 class="text-4xl md:text-6xl font-semibold">Ready to get started?</h2>
            <p class="text-xl md:text-2xl leading-8 mt-3">
              Get your NFT collections done and start trading{" "}
            </p>
            <p class="text-xl md:text-2xl leading-8">
              {" "}
              Any question? Just ping us on{" "}
              <span className="text-primary">
                <a className="hover:cursor-pointer"> Join Discord </a>
              </span>
              . We'll be happy to help{" "}
            </p>
          </div>
          <div class="m-2 flex">
            <button class="bg-secondary text-white rounded-md p-5 w-72 text-2xl font-semibold self-center">
              Connect Your Wallet
            </button>
          </div>
        </div>
      </section>
      <section class=" text-third body-font">
        <div class="max-w-screen-2xl w-11/12 mx-auto flex sm:justify-between justify-center sm:flex-nowrap flex-wrap">
          <div class="m-2 text-xl font-semibold">
            <nav class="ml-auto flex flex-wrap items-center justify-right">
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
          <div class="m-2 text-xl font-semibold">
            <p>Copyright @ Flume 2022, All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
