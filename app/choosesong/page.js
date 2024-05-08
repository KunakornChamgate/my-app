import React from 'react';
import SongCard from "@/components/SongCard";

export default function ChooseSong() {
    return (
        <main className="ml-10 mt-20 mr-10 relative">
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

            <section className="flex pt-3">
                <SongCard imageSrc="/halftheworld.png" titleText="Half the world away" artistName="Oasis" size="large" />
            </section>
            <section className="mt-">
                <h1 className="text-lime-300 text-xl font-regular "> Recents </h1>
                <div className="flex row pt-3 pr-10">
                    <SongCard imageSrc="/stand.png" titleText="Stand by me" artistName="Oasis" size="small" />
                    <SongCard imageSrc="/yellow.png" titleText="Yellow" artistName="Coldplay" size="small" />
                    <SongCard imageSrc="/all.png" titleText="Yellow" artistName="Coldplay" size="small" />
                    {/* <SongCard imageSrc="/halftheworld.jpg" titleText="All my loving" artistName="The Beatles" size="small" />
                    <SongCard imageSrc="/halftheworld.jpg" titleText="Golden" artistName="Harry Styles" size="small" />
                    <SongCard imageSrc="/halftheworld.jpg" titleText="Massachusettes" artistName="Bee Gees" size="small" /> */}
                </div>
            </section>

            <section className="mt-5">
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
        </main>
    );
}