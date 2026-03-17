import Navbar from "../components/Navbar"
import NeuralBackground from "../components/NeuralBackground"

import profile1 from "../assets/images/profile1.png"
import profile2 from "../assets/images/profile2.png"
import profile3 from "../assets/images/profile3.png"
import telosLogo from "../assets/images/telos.png"

export default function About(){

return(

<div className="min-h-screen text-white relative">

<NeuralBackground/>
<Navbar/>

<div className="max-w-6xl mx-auto pt-32 px-6 relative z-10">

<h1 className="about-title">
About Us
</h1>

{/* TEAM MEMBERS */}

<div className="grid md:grid-cols-3 gap-10 mb-20">

{/* Member 1 */}

<div className="bg-[#0f172a]/90 border border-white/10 rounded-xl p-8 text-center shadow-xl hover:scale-105 transition">

<img
src={profile1}
className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
/>

<h3 className="text-xl font-semibold">
Prathamesh Shelke
</h3>

<p className="text-blue-400 mt-1">
Frontend Developer
</p>

<p className="text-gray-300 text-sm mt-3">
Built the user interface and integrated the AI model APIs.
</p>

</div>


{/* Member 2 */}

<div className="bg-[#0f172a]/90 border border-white/10 rounded-xl p-8 text-center shadow-xl hover:scale-105 transition">

<img
src={profile2}
className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
/>

<h3 className="text-xl font-semibold">
Prateek Manjunath
</h3>

<p className="text-blue-400 mt-1">
Model Developer
</p>

<p className="text-gray-300 text-sm mt-3">
Developed the deepfake detection models for audio, image and video.
</p>

</div>


{/* Member 3 */}

<div className="bg-[#0f172a]/90 border border-white/10 rounded-xl p-8 text-center shadow-xl hover:scale-105 transition">

<img
src={profile3}
className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
/>

<h3 className="text-xl font-semibold">
Vedant patke
</h3>

<p className="text-blue-400 mt-1">
Model trainer
</p>

<p className="text-gray-300 text-sm mt-3">
Handled data preprocessing and model training for improved accuracy and performance.
</p>

</div>

</div>


{/* TEAM TELOS SECTION */}

<div className="bg-[#0f172a]/90 border border-white/10 rounded-2xl p-10 shadow-xl grid md:grid-cols-2 gap-12 items-center">

<img
src={telosLogo}
className="w-64 mx-auto rounded-lg"
/>

<div>

<h2 className="text-3xl font-bold mb-4">
Team Telos
</h2>

<p className="text-gray-300 leading-relaxed">

Team Telos is a group of passionate developers focused on building
AI-powered solutions that address real-world challenges.

Our mission is to leverage artificial intelligence to improve digital
trust by detecting manipulated media such as deepfake images, videos
and audio.

Through collaboration and innovation, Team Telos aims to develop
tools that help make digital platforms safer and more reliable.

</p>

</div>

</div>

</div>

</div>

)

}