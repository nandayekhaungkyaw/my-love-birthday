"use client"

import { useState } from "react"
import { Play } from "lucide-react"

export default function VideoMessage() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-xl bg-gradient-to-r from-purple-300 to-pink-300 p-1">
      <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
        {!isPlaying ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl text-center">
              <h3 className="text-white text-xl mb-4">A Special Message For You</h3>
              <button
                onClick={() => setIsPlaying(true)}
                className="bg-white text-purple-600 hover:bg-purple-100 transition-colors rounded-full p-4 shadow-lg"
                aria-label="Play video">
                <Play size={24} fill="currentColor" />
              </button>
            </div>
          </div>
        ) : (
         
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/LH57uZUxSKo?si=awBo0XimHSEhC3Hw"
            title="Birthday Video Message"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        )}
      </div>
    </div>
  );
}

