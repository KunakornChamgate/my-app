import SongList from "@/components/SongList";

export default function song() {
    return (
        <main className="ml-8 mt-10 mr-8">
          <div className=" flex justify-start">
            <img src="back.svg"  id="right-nav" /> 
            <h1 className="text-white text-3xl font-semibold ml-5"> Warm up </h1>
          </div> 

          <div className="relative">
            <div className="[w-350px] h-[350px] flex justify-center mt-10">
              <img src="Group 48.png" id="right-nav" />
            </div>

            <div className="absolute inset-0 flex justify-center items-center">
              <div className="ml-20 mr-20 flex justify-between">
                <img src="minus.svg" id="right-nav" /> 
                <h1 className="text-white text-xl font-light m-10">15Mins</h1>
                <img src="plus1.svg" id="ml-10" /> 
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-2 w-full">
            <SongList numberText="1" songName="Stand by me" artist="Oasis"/>
          </div>

          <div className="flex justify-between items-center mt-2 w-full">
            <SongList numberText="2" songName="Yellow" artist="Coldplay"/>
          </div>

          <div className="flex justify-between items-center mt-2 w-full">
            <SongList numberText="3" songName="Half the world away" artist="Oasis"/>
          </div>

          <div className="grid justify-items-center mt-20 w-full bg-lime-300 min-h-[5vh] rounded-lg ">
            <h1 className="text-zinc-900 text-2xl font- mt-1  ">Done </h1>
          </div>

          </main>

    )
}