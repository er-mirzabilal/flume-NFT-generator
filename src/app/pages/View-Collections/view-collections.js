import Header from '../Components/Header/Header';
import  viewCollection1img from '../../../assets/images/collections/view/view-collection1-img.png';
import view1 from '../../../assets/images/collections/view/NFT/view1.png';
import view2 from '../../../assets/images/collections/view/NFT/view2.png';
import view3 from '../../../assets/images/collections/view/NFT/view3.png';
import view4 from '../../../assets/images/collections/view/NFT/view4.png';
import { useEffect, useState } from 'react';
import { getColections } from '../../api/core';
const ViewCollection = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        getColections()
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error)
        })
    })
    return (
        <div>
         <Header />
         <section class="bg-gray">
         <div class="max-w-screen-2xl w-11/12 mx-auto flex sm:flex-nowrap flex-wrap">
         <div class="mt-6 lg:mt-0 pr-0 sm:pr-6 text-left self-center">
         <h1 class="text-primary xl:text-6xl lg:text-5xl md:text-4xl text-3xl mb-3">Create or Monitor</h1>
         <h1 class="text-third xl:text-6xl lg:text-5xl md:text-4xl text-3xl mb-3">NFT Collections</h1>
         </div>
         <div class="my-5 mr-0 ml-auto shrink-0 text-right">
         <img class="-mb-20 w-96 h-auto md:w-full md:h-auto rounded" src={viewCollection1img} />
         </div>
         </div>
         </section>
         <section>
         <div class="max-w-screen-2xl w-11/12 mx-auto">
         <p class="text-md text-third my-10 sm:my-6">You have no project yet, create one to get started.</p>
         <a href="/create-collections"><button class="text-sm mb-6 text-white bg-primary border-0 py-2 px-5 focus:outline-primary rounded">Create new NFT Collection</button></a>
         </div>
         </section>
         <section>
         <div class="max-w-screen-2xl w-11/12 mx-auto">
         <div class="flex flex-wrap">
         <div class="w-80 rounded-xl m-2 p-4 shadow-xl">
         <div class="block">
         <img src={view1} />
         </div>
         <div class="flex flex-row pt-2 justify-between">
         <h3 class="text-third">Emoji Collections</h3><p class="bg-secondary rounded-md text-white px-2 text-sm self-center">In progress</p>
         </div>
         </div>
         <div class="w-80 rounded-xl m-2 p-4 shadow-xl">
         <div class="block">
         <img src={view2} />
         </div>
         <div class="flex flex-row pt-2 justify-between">
         <h3 class="text-third">Emoji Collections</h3><p class="bg-primary rounded-md text-white px-2 text-sm self-center">Deployed</p>
         </div>
         </div>
         <div class="w-80 rounded-xl m-2 p-4 shadow-xl">
         <div class="block">
         <img src={view3} />
         </div>
         <div class="flex flex-row pt-2 justify-between">
         <h3 class="text-third">Emoji Collections</h3><p class="bg-secondary rounded-md text-white px-2 text-sm self-center">In progress</p>
         </div>
         </div>
         <div class="w-80 rounded-xl m-2 p-4 shadow-xl">
         <div class="block">
         <img src={view4} />
         </div>
         <div class="flex flex-row pt-2 justify-between">
         <h3 class="text-third">Emoji Collections</h3><p class="bg-primary rounded-md text-white px-2 text-sm self-center">Deployed</p>
         </div>
         </div>
         </div>
         </div>
         </section>
        </div>
    );
}

export default ViewCollection;