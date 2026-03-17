import { useState } from "react"
import { Link } from "react-router-dom"
import NeuralBackground from "../components/NeuralBackground"

export default function VideoDetect() {

    const [file, setFile] = useState(null)
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleDetect = async () => {

        if (!file) {
            alert("Upload a video first")
            return
        }

        setLoading(true)

        const formData = new FormData()

        formData.append("file", file)
        formData.append("frames", 16)
        formData.append("max_side", 512)

        try {

            const response = await fetch("http://10.25.18.85:8000/detect-video?", {
                method: "POST",
                body: formData
            })

            const data = await response.json()

            setResult(data)

        } catch (err) {
            console.error(err)
        }

        setLoading(false)

    }

    return (

        <div className="min-h-screen flex items-center justify-center relative text-white">

            <NeuralBackground />

            <div className="w-[520px] bg-[#0f172a]/85 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-10 text-center relative z-10">

                <h1 className="text-3xl font-bold mb-8">
                    Deepfake Video Detector
                </h1>


                {/* Upload UI */}

                {!loading && !result && (

                    <div>

                        <input
                            type="file"
                            accept="video/*"
                            onChange={(e) => setFile(e.target.files[0])}
                            className="w-full mb-6 p-3 bg-white/10 rounded-lg border border-white/20"
                        />

                        <button
                            onClick={handleDetect}
                            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
                        >
                            Detect
                        </button>

                    </div>

                )}


                {/* Radar animation */}

                {loading && (
                    <div className="flex flex-col items-center justify-center py-10">
                        <div className="radar-wrapper">
                            <div className="radar-ring"></div>
                            <div className="radar-ring delay-1"></div>
                            <div className="radar-ring delay-2"></div>
                        </div>

                        <p className="mt-6 text-blue-400 animate-pulse">
                            AI analyzing audio...
                        </p>
                    </div>
                )}


                {/* Result */}

                {/* Result */}

                {result && (

                    <div className="bg-white text-black rounded-xl p-6 shadow-lg">

                        <h2 className="text-xl font-semibold mb-4">
                            Detection Result
                        </h2>

                        <div className={`text-2xl font-bold mb-4 ${result.label === "real"
                            ? "text-green-600"
                            : "text-red-600"
                            }`}>

                            {result.label === "real" ? "REAL VIDEO" : "FAKE VIDEO"}

                        </div>


                        <div className="mb-4">

                            <p className="text-sm text-gray-500 mb-1">
                                Confidence
                            </p>

                            <div className="w-full bg-gray-200 rounded-full h-3">

                                <div
                                    className="bg-blue-600 h-3 rounded-full transition-all duration-700"
                                    style={{ width: `${result.real_prob * 100}%` }}
                                ></div>

                            </div>

                        </div>


                        <div className="grid grid-cols-2 gap-4 text-sm">

                            <div>
                                <p className="text-gray-500">Real Probability</p>
                                <p className="font-semibold">
                                    {(result.real_prob * 100).toFixed(2)}%
                                </p>
                            </div>

                            <div>
                                <p className="text-gray-500">Fake Probability</p>
                                <p className="font-semibold">
                                    {(result.fake_prob * 100).toFixed(2)}%
                                </p>
                            </div>

                        </div>

                        <p className="text-xs text-gray-400 mt-4">
                            Frames Used: {result.frames_used}
                        </p>

                        <p className="text-xs text-gray-400">
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