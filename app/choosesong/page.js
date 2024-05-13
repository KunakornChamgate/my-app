import React from 'react';
import SongCard from "@/components/SongCard";


export default function ChooseSong() {
    return (
        <main>

        <section className="ml-10 mt-20 mr-10">
            <img src="back.svg" /> 
            <section>
                <div id="left text">
                    <h1 className="text-white text-3xl font-bold mt-5"> Hello, Kunakorn </h1>
                </div>
                <div  className="pt-5 ">
                <img className="searchicon" src="search1.svg"  /> 
                    <input type="text" placeholder="Search artist, song or album"  className="bg-neutral-600 px-12 py-3 w-full rounded-full" />
                </div>
            </section>
            <section>
                <div>
                    <h1 className="text-lime-300 text-xl font-regular pt-7"> Suggestion </h1>
                </div>
            </section>
            <section className="flex mt-5">
                <a href="/song"> 
                    <SongCard imageSrc="/halftheworld.png"  titleText="Half the world away" artistName="Oasis" size="large"   />
                </a>
            </section>
         </section>

            
        <section>
            <section className="ml-10 ">
                <h1 className="text-lime-300 text-xl font-regular">Recents</h1>
                <div className="mt-3 flex flex-row">
                    <SongCard imageSrc="/stand.png" titleText="Stand by me" artistName="Oasis" size="small" />
                    <SongCard imageSrc="/All my.jpg" titleText="All My Loving" artistName="The Beatles" size="small" />
                 
                </div>
            </section>
``
            <section className=" ml-10">
                <h1 className="text-lime-300 text-xl font-regular mt-0"> Hits </h1>
                <div className="mt-3 flex flex-row">
                    <SongCard imageSrc="/Rectangle 10.jpg" titleText="Arabella" artistName="Arctic Monkeys" size="small" />
                    <SongCard imageSrc="/Rectangle 13.jpg" titleText="Please, Please, Please" artistName="The Smiths" size="small" />
                   
                </div>
            </section>
        </section>
        </main>
    );
}