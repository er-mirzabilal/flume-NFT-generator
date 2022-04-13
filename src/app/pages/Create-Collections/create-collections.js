import Header from "../Components/Header/Header";
import Empty from "../../../assets/images/collections/empty.png";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { TextField } from "@mui/material";
import LongMenu from '../Components/Menu/Menu';
import { ArrowBackIos } from "@mui/icons-material";
import row1img from '../../../assets/images/collections/create/Layer1/image 25.png';
import row1img2 from '../../../assets/images/collections/create/Layer1/Mask group-1.png';
import deleteicon from '../../../assets/images/collections/create/Icon/delete.png';
import blankimg from '../../../assets/images/collections/create/Layer1/Group 87.png';
const CreateCollection = () => {
  return (
    <div>
      <Header />
      <section class="bg-gray-200">
        <div class="w-4/5 flex flex-row py-5 mx-auto">
          <a href="/view-collections">
            <button class="align-sub"> <ArrowBackIos /> </button>
          </a>
          <h2 class="text-2xl font-semibold">
            <span class="text-purple-800 px-3">Create</span>
            NFT Collectons
          </h2>
          
        </div>
      </section>
      <section>
      <div class="w-4/5 flex flex-row mx-auto">
      <div class="w-fit p-2 self-center">
      <div class="w-full h-fit rounded-xl shadow-xl">
      <img src={Empty} class="w-full h-full" />
      </div>
      <div class="flex flex-row justify-center py-5">
      <button class="bg-cyan-500 p-2 rounded-lg mx-2 text-white">Randomize</button>
      <a href="" class="self-center p-1 border border-black rounded-full"> i </a>
      </div>
      </div>
      <div class="w-full p-4">
      <form>
      <lable class="text-md block my-2">NFT Collection Title:</lable>
      <TextField  id="demo-helper-text-misaligned-no-helper" label="Emoji Collections" />
      <lable class="text-md block my-2">Image Format:</lable>
      <TextField  id="demo-helper-text-misaligned-no-helper" label="500 x 500 xp" />
      <lable class="text-md block my-2">Enter the number of NFT to mint:</lable>
      <TextField  id="demo-helper-text-misaligned-no-helper" label="2000" />
      <a href="/preview-images"><button class="block text-sm mt-2 mb-5 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Generate Collections</button></a>
      </form>
      </div>
      </div>
      </section>
      <section class="my-10">
      <div class="w-4/5 flex flex-wrap mx-auto">

      <div class="w-1/3 m-2 p-3 rounded-xl shadow-xl">
      
      <div class="flex flex-row">
      <p className="self-center flex-none mx-1">Layer 1:</p>
      <div class="grow p-2 border border-slate-200 text-black bg-gray-200 rounded-lg" >background</div>
      <LongMenu className="self-center flex-none mx-1"/>
      </div>
      <hr className="my-5"/>

      <div className="flex">
      <div class="w-full h-full self-center relative">
       <img src={row1img} />
       <a href="" class="absolute bottom-0" ><img src={deleteicon} /></a>
      </div>
      <div class="w-full">
      <lable class="text-md block my-1">Image Name:</lable>
      <TextField  id="demo-helper-text-misaligned-no-helper" label="Blue" />
      <lable class="text-md block my-1">Rarity:</lable>
      <TextField  id="demo-helper-text-misaligned-no-helper" label="Common" />
      <a href=""><button class="block text-sm mt-2 text-white bg-gray-400 border-0 py-2 px-5 focus:outline-none hover:bg-gray-600 rounded">Randomize</button></a>
      </div>
      </div>

      <div className="flex">
      <div class="w-full h-full self-center relative">
       <img src={row1img2} />
       <a href="" class="absolute bottom-0" ><img src={deleteicon} /></a>
      </div>
      <div class="w-full">
      <lable class="text-md block my-1">Image Name:</lable>
      <TextField  id="demo-helper-text-misaligned-no-helper" label="Blue" />
      <lable class="text-md block my-1">Rarity:</lable>
      <TextField  id="demo-helper-text-misaligned-no-helper" label="Common" />
      <a href=""><button class="block text-sm mt-2 text-white bg-gray-400 border-0 py-2 px-5 focus:outline-none hover:bg-gray-600 rounded">Randomize</button></a>
      </div>
      </div>

      <hr className="my-5" />

      <div className="flex mb-5">
      <div class="w-full h-full self-center relative">
       <img src={blankimg} />
       <a href="" class="absolute -bottom-2" ><button class="text-sm text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Add Image</button></a>
      </div>
      <div class="w-full flex flex-col justify-between text-sm">
      <p>Lorem jkj kddk  kldk dl k lkflfdk d dfkdfkd dk fdf dk dkfdk dkfkdfkd k fdk fdkfldkdk </p>
      <a href="">Need Help? <span class=" text-indigo-600 underline">Read our Guidelines</span></a>
      </div>
      </div>

      </div>

      <div class="w-1/3  m-2 p-3 rounded-xl shadow-xl">

      <div class="flex flex-row">
      <p className="self-center flex-none mx-1">Layer 2:</p>
      <div class="grow p-2 border border-slate-200 text-black bg-gray-200 rounded-lg" >Eyes and Ears</div>
      <LongMenu className="self-center flex-none mx-1"/>
      </div>
      <hr className="my-5"/>

      <div className="flex">
      <div class="w-full h-full self-center relative">
       <img src={row1img} />
       <a href="" class="absolute bottom-0" ><img src={deleteicon} /></a>
      </div>
      <div class="w-full">
      <lable class="text-md block my-1">Image Name:</lable>
      <TextField  id="demo-helper-text-misaligned-no-helper" label="Eyes" />
      <lable class="text-md block my-1">Rarity:</lable>
      <TextField  id="demo-helper-text-misaligned-no-helper" label="Common" />
      <a href=""><button class="block text-sm mt-2 text-white bg-gray-400 border-0 py-2 px-5 focus:outline-none hover:bg-gray-600 rounded">Randomize</button></a>
      </div>
      </div>

      <div className="flex">
      <div class="w-full h-full self-center relative">
       <img src={row1img2} />
       <a href="" class="absolute bottom-0" ><img src={deleteicon} /></a>
      </div>
      <div class="w-full">
      <lable class="text-md block my-1">Image Name:</lable>
      <TextField  id="demo-helper-text-misaligned-no-helper" label="Hair" />
      <lable class="text-md block my-1">Rarity:</lable>
      <TextField  id="demo-helper-text-misaligned-no-helper" label="Common" />
      <a href=""><button class="block text-sm mt-2 text-white bg-gray-400 border-0 py-2 px-5 focus:outline-none hover:bg-gray-600 rounded">Randomize</button></a>
      </div>
      </div>

      <hr className="my-5" />

      <div className="flex mb-5">
      <div class="w-full h-full self-center relative">
       <img src={blankimg} />
       <a href="" class="absolute -bottom-2" ><button class="text-sm text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Add Image</button></a>
      </div>
      <div class="w-full flex flex-col justify-between text-sm">
      <p>Lorem jkj kddk  kldk dl k lkflfdk d dfkdfkd dk fdf dk dkfdk dkfkdfkd k fdk fdkfldkdk </p>
      <a href="">Need Help? <span class=" text-indigo-600 underline">Read our Guidelines</span></a>
      </div>
      </div>

      </div>

      <div class="w-1/3  m-2 p-3">

      <button class="bg-cyan-500 text-lg p-2 rounded-lg mx-2 text-white">Add new Layer</button>

      </div>
      
      </div>
      </section>
    </div>
  );
};

export default CreateCollection;
