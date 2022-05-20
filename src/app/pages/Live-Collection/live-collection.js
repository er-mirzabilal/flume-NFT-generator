import Header from "../Components/Header/Header";
import { FormControl, TextField } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Button } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";
import ViewCollection1img from "../../../assets/images/live/Etherscan.png";
import ViewCollection2img from "../../../assets/images/live/Opensea.png";
import { useParams } from 'react-router-dom';
const LiveCollection = () => {
  const params = useParams();

  
  return (
    <div>
      <Header />
      <section class="bg-gray bg-liveCollection1 bg-contain bg-right bg-no-repeat">
        <div class="max-w-screen-2xl w-11/12 mx-auto flex">
          <div class="my-5 sm:my-10 pr-0 sm:pr-6 text-left self-center">
            <h1 class="text-third xl:text-6xl lg:text-5xl md:text-4xl text-3xl mb-3">
              Collection is <span class="text-secondary">Live</span>
            </h1>
            <p class="text-third sm:text-2xl text-xl mb-3">
              Transaction Confirmed
            </p>
          </div>
        </div>
      </section>
      <section>
        <div class="max-w-screen-2xl w-11/12 mx-auto">
          <h2 class="text-2xl font-medium my-8">Embed in Your Website</h2>
          <div class="flex lg:flex-row flex-col p-10 shadow-lg rounded-lg">
            <div class="flex flex-col justify-between min-w-fit md:mr-5">
              <form class="">
                <lable class="text-md block mb-2">Mintable NFT Limit</lable>
                <TextField
                  id="demo-helper-text-misaligned-no-helper"
                  fullWidth
                  size="small"
                  value="2000"
                />
                <lable class="text-md block my-2">Cost for Minting</lable>
                <TextField
                  id="demo-helper-text-misaligned-no-helper"
                  size="small"
                  value="2000"
                />
                <p class="inline-flex p-2">Matic</p>
              </form>
              <div>
                <button class="bg-secondary text-white font-semibold text-lg py-2 px-5 my-4 rounded-lg">
                  Copy
                </button>
              </div>
            </div>
            <div class="md:ml-5">
              <h4>Snippet</h4>
              <div class="bg-gray p-10 break-words">
                <p>
                  // Line height: 44 pt // (identical to box height)
                  view.attributedText = NSMutableAttributedString(string: "Limit
                  Min Table NFT", attributes:
                  [NSAttributedString.Key.paragraphStyle: paragraphStyle]) var
                  parent = self.view!
                  view.heightAnchor.constraint(equalToConstant: 45).isActive =
                  true view.leadingAnchor.constraint(equalTo:
                  parent.leadingAnchor, constant: 260).isActive = true
                  view.topAnchor.constraint(equalTo: parent.topAnchor, constant:
                  500).isActive = true
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="max-w-screen-2xl w-11/12 mx-auto">
          <h2 class="text-2xl font-medium my-8">External Links</h2>
          <div class="flex md:flex-row flex-col p-10 shadow-lg rounded-lg justify-between">
            <div class="flex justify-between flex-grow">
              <button
                size="small"
                class="p-2 m-2 flex-grow flex border-1 rounded-lg border-gray bg-gray justify-evenly items-center"
              >
                <img src={ViewCollection1img} class="px-2"></img>{" "}
                <span class="px-2">View on Etherscan</span> <ArrowRight />
              </button>
              <button
                size="small"
                class="p-2 m-2 flex-grow flex border-1 rounded-lg border-gray bg-gray justify-evenly items-center"
              >
                <img src={ViewCollection2img} class="px-2"></img>{" "}
                <span class="px-2">View on Opensea</span> <ArrowRight />
              </button>
            </div>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value="10"
              size="small"
              className="m-2 md:w-1/2 min-w-fit grow-1"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
        </div>
      </section>
      <section>
        <div class="max-w-screen-2xl w-11/12 mx-auto">
          <h2 class="text-2xl font-medium my-8">Airdrop Your NFT’s</h2>
          <div class="flex md:flex-row flex-col p-10 shadow-lg rounded-lg justify-between">
            <form class="w-full">
              <div className="flex flex-wrap">
                <FormControl class="m-2 flex-grow sm:flex-grow-0">
                  <lable class="text-md block my-2">NFT #</lable>
                  <TextField
                    id="demo-helper-text-misaligned-no-helper"
                    size="small"
                    value="2000"
                    className="w-full sm:w-auto"
                  />
                </FormControl>
                <FormControl class="flex-grow m-2">
                  <lable class="text-md block my-2">
                    Receiving Wallet Address
                  </lable>
                  <TextField
                    id="demo-helper-text-misaligned-no-helper"
                    fullWidth
                    size="small"
                    value="2000"
                  />
                </FormControl>
              </div>
              <button class="bg-secondary text-white text-xl block font-medium my-5 mx-2 px-5 py-2 rounded-lg">
                Send Airdrop
              </button>
            </form>
          </div>
          <button></button>
        </div>
      </section>
      <section>
        <div class="max-w-screen-2xl w-11/12 mx-auto mb-16">
          <h2 class="text-2xl font-medium my-8">Files syncing with IPFS</h2>
          <div class="p-10 shadow-lg rounded-lg">
          <p class="m-2 text-lg">Please wait until this is done before sharing your collections</p>
          <hr class="mx-2 my-4 border-2 bg-primary text-primary"></hr>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LiveCollection;
