const VideoTittle =({data})=>{

    return(
        <div className=" absolute pt-36 px-12 bg-gradient-to-tr from-black aspect-video">
            <p className=" font-bold text-6xl text-white">{data?.tittle}</p>
            <p className=" text-lg w-1/4 py-5 text-white">{data?.overview}</p>
            <div>
                <button className=" bg-slate-500 text-lg px-5 rounded-sm text-white">Play</button>
                <button className=" bg-slate-300 text-lg px-5 rounded-sm text-white m-2 opacity-90" >More Info</button>
            </div>
        </div>
    )
}

export default VideoTittle;