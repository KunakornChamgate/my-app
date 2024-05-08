export default function dashboard() {
    return (
        <main className="ml-8 mt-10 mr-8">
   <div className=" flex justify-start">
   <img src="back.svg"  id="right-nav" /> 
   <h1 className="text-white text-3xl font-semibold ml-5"> Warm up </h1>
  </div> 
  
  <div className="relative">
  {/* Second div */}
  <div className="[w-350px] h-[350px] flex justify-center mt-10">
    <img src="Group 48.png" id="right-nav" />
  </div>

  {/* First div positioned absolutely */}
  <div className="absolute inset-0 flex justify-center items-center">
    <div className="ml-20 mr-20 flex justify-between">
      <img src="minus.svg" id="right-nav" /> 
      <h1 className="text-white text-xl font-light m-10">15Mins</h1>
      <img src="plus1.svg" id="ml-10" /> 
    </div>
  </div>
</div>



  
  
  <div className="flex justify-between items-center mt-10 w-full">
  <div className="flex items-center">
    <h1 className="text-white text-xl font-regular">1 </h1>
    <div id="left-text" className="ml-10">
      <h1 className="text-white text-xl font-regular">Stand by me</h1>
      <h2 className="text-es text-white font-thin">Oasis</h2>
    </div>
  </div>
  <img src="/burger.svg" />
</div>

<div className="flex justify-between items-center mt-2 w-full">
  <div className="flex items-center">
    <h1 className="text-white text-xl font-regular">2 </h1>
    <div id="left-text" className="ml-10">
      <h1 className="text-white text-xl font-regular">Yellow</h1>
      <h2 className="text-es text-white font-thin">Coldplay</h2>
    </div>
  </div>
  <img src="/burger.svg" />
</div>

<div className="flex justify-between items-center mt-2 w-full">
  <div className="flex items-center">
    <h1 className="text-white text-xl font-regular">3 </h1>
    <div id="left-text" className="ml-10">
      <h1 className="text-white text-xl font-regular">Half the world away</h1>
      <h2 className="text-es text-white font-thin">Oasis</h2>
    </div>
  </div>
  <img src="/burger.svg" />
</div>

<div className="grid justify-items-center mt-20 w-full
bg-lime-300 min-h-[5vh] min-w-[10vh]">
<h1 className="text-zinc-900 text-2xl font-  ">Done </h1>

</div>

</main>

    )
}