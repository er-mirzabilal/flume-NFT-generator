import Header from '../Components/Header/Header';
import  viewCollection1img from '../../../assets/images/collections/view/view-collection1-img.png';
import view1 from '../../../assets/images/collections/view/NFT/view1.png';
import view2 from '../../../assets/images/collections/view/NFT/view2.png';
import view3 from '../../../assets/images/collections/view/NFT/view3.png';
import view4 from '../../../assets/images/collections/view/NFT/view4.png';
const ViewCollection = () => {
    return (
        <div>
         <Header />
         <section class="bg-gray-200">
         <div class="w-4/5 flex flex-row mx-auto">
         <div class="w-1/2 mx-auto my-auto">
         <h1 class="text-purple-800 text-4xl font-bold">Create or Monitor</h1>
         <h1 class="text-3xl">NFT Collections</h1>
         </div>
         <div class="w-1/2 text-right">
         <img class="-mb-20" src={viewCollection1img} />
         </div>
         </div>
         </section>
         <section>
         <div class="w-4/5 mx-auto">
         <p class="text-md my-5">You have no project yet, create one to get started.</p>
         <a href="/create-collections"><button class="text-sm mb-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Create new NFT Collection</button></a>
         </div>
         </section>
         <section>
         <div class="w-4/5 flex felx-row mx-auto">
         <div class="w-1/4 rounded-xl p-4 shadow-xl">
         <div class="block">
         <img src={view1} />
         </div>
         <div class="flex flex-row pt-2 justify-between">
         <h3>Emoji Collections</h3><p class="bg-cyan-500 rounded-md text-white px-2 text-sm self-center">In progress</p>
         </div>
         </div>
         <div class="w-1/4 rounded-xl p-4 shadow-xl">
         <div class="block">
         <img src={view2} />
         </div>
         <div class="flex flex-row pt-2 justify-between">
         <h3>Emoji Collections</h3><p class="bg-purple-800 rounded-md text-white px-2 text-sm self-center">Deployed</p>
         </div>
         </div>
         <div class="w-1/4 rounded-xl p-4 shadow-xl">
         <div class="block">
         <img src={view3} />
         </div>
         <div class="flex flex-row pt-2 justify-between">
         <h3>Emoji Collections</h3><p class="bg-cyan-500 rounded-md text-white px-2 text-sm self-center">In progress</p>
         </div>
         </div>
         <div class="w-1/4 rounded-xl p-4 shadow-xl">
         <div class="block">
         <img src={view4} />
         </div>
         <div class="flex flex-row pt-2 justify-between">
         <h3>Emoji Collections</h3><p class="bg-purple-800 rounded-md text-white px-2 text-sm self-center">Deployed</p>
         </div>
         </div>
         </div>
         </section>
        </div>
    );
}

export default ViewCollection;