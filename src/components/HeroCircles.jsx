import { Link } from "react-router-dom"
import imageIcon from "../assets/images/image-detect.png"
import videoIcon from "../assets/images/video-detect.png"
import audioIcon from "../assets/images/audio-detect.png"

export default function HeroCircles() {

    return (

        <div className="flex gap-20 mt-16">

            <div className="flex flex-col items-center">

                <Link to="/image-detect">
                    <div className="circle">
                        <img src={imageIcon} />
                    </div>
                </Link>

                <p className="circle-label">Image</p>

            </div>


            <div className="flex flex-col items-center">

                <Link to="/video-detect">
                    <div className="circle">
                        <img src={videoIcon} />
                    </div>
                </Link>

                <p className="circle-label">Video</p>

            </div>


            <div className="flex flex-col items-center">

                <Link to="/audio-detect">
                    <div className="circle">
                        <img src={audioIcon} />
                    </div>
                </Link>

                <p className="circle-label">Audio</p>

            </div>

        </div>

    )

}