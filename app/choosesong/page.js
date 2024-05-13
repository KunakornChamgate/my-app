import React from 'react';
import SongCard from "@/components/SongCard";


export default function ChooseSong() {
    return (
        <main className="relative">

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
                    <h1 className="text-lime-300 text-xl font-regular pt-5"> Suggestion </h1>
                </div>
            </section>
            <section className="flex mt-5">
                <SongCard imageSrc="/halftheworld.png" titleText="Half the world away" artistName="Oasis" size="large" />
            </section>
        </section>

            
        <section>
            <section className="ml-10 mt-20">
                <h1 className="text-lime-300 text-xl font-regular">Recents</h1>
                <div className="mt-3 flex flex-row">
                    <SongCard imageSrc="/stand.png" titleText="Stand by me" artistName="Oasis" size="small" />
                    <SongCard imageSrc="/all.png" titleText="Yellow" artistName="Coldplay" size="small" />
                    <SongCard imageSrc="/all.png" titleText="Song 3" artistName="Artist 3" size="small" />
                    <SongCard imageSrc="/all.png" titleText="Song 3" artistName="Artist 3" size="small" />
                </div>
            </section>
``
            <section className="mt-5 ml-10">
                <h1 className="text-white text-xl font-regular"> Hits </h1>
                <div className="flex row pt-3 pr-10">
                    <SongCard imageSrc="/halftheworld.jpg" titleText="Stand by me" artistName="Oasis" size="small" />
                    <SongCard imageSrc="/halftheworld.jpg" titleText="Stand by me" artistName="Oasis" size="small" />
                    <SongCard imageSrc="/halftheworld.jpg" titleText="Yellow" artistName="Coldplay" size="small" />
                    {/* <SongCard imageSrc="/halftheworld.jpg" titleText="All my loving" artistName="The Beatles" size="small" />
                    <SongCard imageSrc="/halftheworld.jpg" titleText="Golden" artistName="Harry Styles" size="small" />
                    <SongCard imageSrc="/halftheworld.jpg" titleText="Massachusettes" artistName="Bee Gees" size="small" /> */}
                </div>
            </section>
        </section>
        </main>
    );
}