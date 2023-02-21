import ReactPlayer from "react-player";

function Video(){

    const vidUrl = "https://www.youtube.com/watch?v=r5BN84pFxY8"
    return(
        <div>
            <ReactPlayer
            url={vidUrl}
            playing={false}
            volume={0.5}
            
            
            />
            
        </div>
    );
}

export default Video;