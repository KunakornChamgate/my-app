export default function dashboard() {
    return (
        <main className="ml-8 mt-10 mr-8">
   <div className="border2 border-red-500 flex justify-between">
     <div id="left text"> {/* Add closing angle bracket here */}
       <h1 className="text-white text-3xl font-bold"> Hello, Kunakorn </h1>
       <h2 className="text-es text-white font-light">Let’s start your workout</h2>
     </div> {/* Closing tag for div with id "left nav" */}
     <img className="[w-70px] h-[70px] rounded-full"
     src="/Ellipse 1.jpg"  id="right-nav" /> {/* Closing angle bracket added */}
   </div> 
   <section id="card section" className="ml-8 mt-10 mr-8">
   <div className="border2 border-red-500 flex justify-between">
    <h2 className="text-xl text-lime-300 font-medium">New workout</h2>
    <img src="/Line 1.svg" />
    <h3 className="text-xl text-zinc-600 font-medium">History</h3>
    </div>


   </section>
   <section id="image section" className="ml-0 mt-10 mr-0  ">
   <img className="[w-450px] h-[210px] rounded-xl"
   src="/warm2.jpg" />
   <div class="absolute top-5 left-12 w-full h-full flex items-center justify-items-start">
        <div class="text-center text-white">
            <h1 class="text-2xl font-semibold">Warm up</h1>
            </div>  
    </div>
      </section>
      <section id="image-section" className="ml-0 mt-5 mr-0 ">
   <img className="[w-450px] h-[210px] rounded-xl" src="/work.jpg" />
   <div className="absolute top-10 left-12 w-full h-full flex items-center justify-items-start">
            <h1 className="text-2xl font-semibold text-white">Workout</h1>
     
   </div>
</section>

   

    <div id="image section" className="ml-0 mt-5 mr-0  ">
    <img className="[w-450px] h-[210px] rounded-xl"
   src="/cool.jpg" />
    </div>

 
</main>

    )
}