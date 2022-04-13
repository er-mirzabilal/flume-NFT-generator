import Header from '../Components/Header/Header';
import view1 from '../../../assets/images/collections/view/NFT/view1.png';
const Preview = () => {

    return (<div>
        <Header />
      <section class="bg-gray-200">
        <div class="w-4/5 flex flex-row py-5 mx-auto">
          <h2 class="text-2xl font-semibold">
            <span class="text-purple-800 px-3">Preview</span>
            Images
          </h2>
          
        </div>
      </section>
   
      <section class="w-4/5 mx-auto">
      <a href="/create-collections"><button class="text-sm my-5 mx-2 text-white bg-cyan-500 border-0 py-2 px-5 focus:outline-none hover:bg-cyan-700 rounded">Back to Edit</button></a>
      <a href="/create-collections"><button class="text-sm my-5 mx-2 text-white bg-gray-800 border-0 py-2 px-5 focus:outline-none hover:bg-gray-600 rounded">Regenerate Images</button></a>
      <a href="/create-collections"><button class="text-sm my-5 mx-2 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-700 rounded">Add Collection to Blockchain</button></a>
       </section>
      <section class="w-4/5 mx-auto">
      <div class="flex flex-wrap">
      <div class="flex-initial m-2 rounded-xl p-4 shadow-xl">
         <div class="block">
         <img src={view1} />
         </div>
         <div class="flex flex-row pt-2 justify-between">
         <h3>Emoji Collections</h3><p class="bg-cyan-500 rounded-md text-white px-2 text-sm self-center">In progress</p>
         </div>
      </div>
      <div class="flex-initial m-2 rounded-xl p-4 shadow-xl">
         <div class="block">
         <img src={view1} />
         </div>
         <div class="flex flex-row pt-2 justify-between">
         <h3>Emoji Collections</h3><p class="bg-cyan-500 rounded-md text-white px-2 text-sm self-center">In progress</p>
         </div>
      </div>
      <div class="flex-initial m-2 rounded-xl p-4 shadow-xl">
         <div class="block">
         <img src={view1} />
         </div>
         <div class="flex flex-row pt-2 justify-between">
         <h3>Emoji Collections</h3><p class="bg-cyan-500 rounded-md text-white px-2 text-sm self-center">In progress</p>
         </div>
      </div>
      <div class="flex-initial m-2 rounded-xl p-4 shadow-xl">
         <div class="block">
         <img src={view1} />
         </div>
         <div class="flex flex-row pt-2 justify-between">
         <h3>Emoji Collections</h3><p class="bg-cyan-500 rounded-md text-white px-2 text-sm self-center">In progress</p>
         </div>
      </div>
      <div class="flex-initial m-2  rounded-xl p-4 shadow-xl">
         <div class="block">
         <img src={view1} />
         </div>
         <div class="flex flex-row pt-2 justify-between">
         <h3>Emoji Collections</h3><p class="bg-cyan-500 rounded-md text-white px-2 text-sm self-center">In progress</p>
         </div>
      </div>
      <div class="flex-initial m-2 rounded-xl p-4 shadow-xl">
         <div class="block">
         <img src={view1} />
         </div>
         <div class="flex flex-row pt-2 justify-between">
         <h3>Emoji Collections</h3><p class="bg-cyan-500 rounded-md text-white px-2 text-sm self-center">In progress</p>
         </div>
      </div>
      </div>
      </section>
        </div>);
};

export default Preview;