import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import About from "./pages/About";

import AudioDetect from "./pages/AudioDetect";
import ImageDetect from "./pages/ImageDetect"
import VideoDetect from "./pages/VideoDetect"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/audio-detect" element={<AudioDetect />} />
        <Route path="/image-detect" element={<ImageDetect />} />
        <Route path="/video-detect" element={<VideoDetect />} />

      </Routes>
    </BrowserRouter>
  );
}