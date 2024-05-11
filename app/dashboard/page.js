"use client";

import React from 'react';
import ImageCard from "@/components/ImageCard";

export default function Dashboard() {
    return (
        <main className="ml-8 mt-10 mr-8">
            <div className="border2 border-red-500 flex justify-between">
                <div id="left text"> {/* Add closing angle bracket here */}
                    <h1 className="text-white text-3xl font-bold"> Hello, Kunakorn </h1>
                    <h2 className="text-es text-white font-light">Let’s start your workout</h2>
                </div> {/* Closing tag for div with id "left text" */}
                <img className="[w-70px] h-[70px] rounded-full" src="/Ellipse 1.jpg" id="right-nav" /> {/* Closing angle bracket added */}
            </div> 
            

            <section id="card section" className="ml-8 mt-10 mr-8">
                <div className="border2 border-red-500 flex justify-between">
                    <h2 className="text-xl text-lime-300 font-medium">New workout</h2>
                    <img src="/Line 1.svg" />
                    <h3 className="text-xl text-zinc-600 font-medium">History</h3>
                </div>
            </section>
            
            <a href="/addyour">
            <section className="ml-0 mt-10 mr-0 font-s font-semibold"> 
                <div>
                    <ImageCard imageSrc="/warmup.jpg" titleText="Warm up" />
                </div>
            </section>
            </a>

            <section className="ml-0 mt-5 mr-0 font-semibold"> 
                <div>
                    <ImageCard imageSrc="/workout.jpg" titleText="Workout" />
                </div>
            </section>

            <section className="ml-0 mt-5 mr-0 font-semibold"> 
                <div>
                    <ImageCard imageSrc="/cool.jpg" titleText="Cool Down" />
                </div>
            </section>
            
           
        </main>
    );
}