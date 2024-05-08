export default function SongList(props) {
    return (
      <div className="flex row justify-between items-center mt-2 w-full">
        <div className="flex row">
            <h5 id="number" className ="text-white text-xl font-regular">{props.numberText}</h5>
                <div className="pl-10">
                    <h5 id="songName" className="flex col text-white text-xl font-regular">{props.songName}</h5>
                    <h5 id ="artist" className="text-es text-white font-thin">{props.artist}</h5>
                </div>
        </div>
        <img className="" src="/burger.svg"/>
      </div>
    );
}
