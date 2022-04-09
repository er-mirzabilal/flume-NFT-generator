import Header from "../Components/Header/Header";
import Empty from "../../../assets/images/collections/empty.png";
const CreateCollection = () => {
  return (
    <div>
      <Header />
      <section class="bg-gray-200">
        <div class="w-4/5 flex flex-row py-5 mx-auto">
          <a href="/view-collections">
            <button class="align-sub"> Go </button>
          </a>
          <h2 class="text-2xl font-semibold">
            <span class="text-purple-800 px-3">Create</span>
            NFT Collectons
          </h2>
          
        </div>
      </section>
      <section>
      <div class="w-4/5 flex flex-row mx-auto">
      <div class="w-fit p-4">
      <div class="w-full h-fit rounded-xl shadow-xl">
      <img src={Empty} class="w-full h-full" />
      </div>
      <div class="flex flex-row justify-center py-5">
      <button class="bg-cyan-500 p-2 rounded-lg mx-2 text-white">Randomize</button>
      <a href="" class="self-center p-1 h-fit border border-black rounded-full"> i </a>
      </div>
      </div>
      <div class="w-full p-4">
      <form>
      <lable class="text-md">NFT Collection Title:</lable>
      <input class="block p-3 border my-3 border-slate-200 text-black bg-gray-200 rounded-lg" placeholder="Emoji Collections" />
      <lable class="text-md">Image Format:</lable>
      <input class="block p-3 border my-3 border-slate-200 text-black bg-gray-200 rounded-lg" disabled placeholder="500 x 500 px" />
      <lable class="text-md">Enter the number of NFT to mint:</lable>
      <input class="block p-3 border my-3 border-slate-200 text-black bg-gray-200 rounded-lg" disabled placeholder="2000" />
      <a href=""><button class="text-sm mb-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Generate Collections</button></a>
      </form>
      </div>
      </div>
      </section>
    </div>
  );
};

export default CreateCollection;
