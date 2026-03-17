import { useState } from "react"
import { Link } from "react-router-dom"
import NeuralBackground from "../components/NeuralBackground"

export default function AudioDetect(){

const [file,setFile] = useState(null)
const [result,setResult] = useState(null)
const [loading,setLoading] = useState(false)

const handleDetect = async () => {

if(!file){
alert("Please upload an audio file")
return
}

setLoading(true)
setResult(null)

const formData = new FormData()
formData.append("file",file)

try{

const response = await fetch("http://10.25.18.85:8000/detect",{
method:"POST",
body:formData
})

const data = await response.json()

console.log("API RESPONSE:",data)

setResult(data)

}catch(error){

console.error("Error:",error)

alert("Detection failed. Check API.")

}

setLoading(false)

}

return(

<div className="min-h-screen flex items-center justify-center relative text-white">

{/* background */}
<NeuralBackground/>

{/* center container */}
<div className="w-[520px] bg-[#0f172a]/85 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-10 text-center relative z-10">

<h1 className="text-3xl font-bold mb-8">
Deepfake Audio Detector
</h1>

{/* upload section */}
{!loading && !result && (

<div>

<input
type="file"
accept="audio/*"
onChange={(e)=>setFile(e.target.files[0])}
className="w-full mb-6 p-3 bg-white/10 rounded-lg border border-white/20"
/>

<button
onClick={handleDetect}
className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
>
Detect
</button>

</div>

)}

{/* radar loading */}
{loading && (

<div className="flex flex-col items-center py-10">

<div className="radar"></div>

<p className="mt-6 text-blue-400 animate-pulse">
AI analyzing audio...
</p>

</div>

)}

{/* result */}
{result && (

<div className="bg-white text-black rounded-xl p-6 shadow-lg">

<h2 className="text-xl font-semibold mb-4">
Detection Result
</h2>

<div className={`text-2xl font-bold mb-4 ${
result.label === "bonafide"
? "text-green-600"
: "text-red-600"
}`}>

{result.label === "bonafide" ? "REAL AUDIO" : "FAKE AUDIO"}

</div>

<div className="mb-4">

<p className="text-sm text-gray-500 mb-1">
Confidence
</p>

<div className="w-full bg-gray-200 rounded-full h-3">

<div
className="bg-blue-600 h-3 rounded-full transition-all duration-700"
style={{width:`${result.score * 100}%`}}
></div>

</div>

</div>

<div className="grid grid-cols-2 gap-4 text-sm">

<div>
<p className="text-gray-500">Bonafide</p>
<p className="font-semibold">
{(result.bonafide_prob * 100).toFixed(2)}%
</p>
</div>

<div>
<p className="text-gray-500">Spoof</p>
<p className="font-semibold">
{(result.spoof_prob * 100).toFixed(2)}%
</p>
</div>

</div>

<p className="text-xs text-gray-400 mt-4">
Model: {result.model}
</p>

</div>

)}

<Link to="/">
<button className="mt-8 text-blue-400 hover:text-blue-300">
← Back to Home
</button>
</Link>

</div>

</div>

)

}