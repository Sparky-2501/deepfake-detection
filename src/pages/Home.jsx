import Navbar from "../components/Navbar"
import NeuralBackground from "../components/NeuralBackground"
import HeroCircles from "../components/HeroCircles"

export default function Home(){

return(

<div>

<NeuralBackground/>

<div className="center-blur"/>

<Navbar/>

<section className="min-h-screen flex flex-col items-center justify-center text-center">

<h1 className="hero-title">
AI Deepfake Detector
</h1>

<p className="hero-subtitle">
Detect fake images, videos and audio using advanced AI detection models
</p>

<HeroCircles/>

</section>

</div>

)
}