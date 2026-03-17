import Navbar from "../components/Navbar"
import NeuralBackground from "../components/NeuralBackground"
import FeatureCard from "../components/FeatureCard"

import imageDetect from "../assets/images/image-detection.png"
import videoDetect from "../assets/images/video-detection.png"
import audioDetect from "../assets/images/audio-detection.png"

export default function Features(){

return(

<div>

<NeuralBackground/>
<Navbar/>

<div className="max-w-6xl mx-auto pt-32 px-6">

<FeatureCard
title="Image Deepfake Detection"
text="Upload an image and our AI model analyzes pixel inconsistencies and facial artifacts to detect manipulated or AI-generated images."
image={imageDetect}
/>

<FeatureCard
title="Video Deepfake Detection"
text="Frame-by-frame analysis detects synthetic faces, lip sync mismatches and temporal inconsistencies in manipulated videos."
image={videoDetect}
reverse
link="/video-detect"
/>

<FeatureCard
title="Audio Deepfake Detection"
text="Voice analysis and spectrogram features help identify synthetic voices and AI-generated speech patterns."
image={audioDetect}
link="/audio-detect"
/>

</div>

</div>

)

}