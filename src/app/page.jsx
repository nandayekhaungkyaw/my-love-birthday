"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Heart, Gift, Music, Volume2, VolumeX } from "lucide-react"
import LoveLetterSection from "@/components/love-letter-section"
import VideoMessage from "@/components/video-message"
import BirthdayCake from "@/components/birthday-cake"
import GiftSection from "@/components/gift-section"
import Confetti from "@/components/confetti"
import glass from "../../public/glass.jpg"
import together from "../../public/together.jpg"


export default function BirthdayPage() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio("pure-love.mp3")
    audioRef.current.loop = true

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ""
      }
    };
  }, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsMusicPlaying(!isMusicPlaying)
    }
  }

  const triggerConfetti = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 5000)
  }

  return (
    <main
      className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 text-gray-800">
      {showConfetti && <Confetti />}
      {/* Header with music control */}
      <header className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden">
        <Image
          src={together}
          alt="Birthday Banner"
          fill
          className="object-cover"
          priority />
        <div
          className="absolute inset-0 bg-gradient-to-t from-pink-100 to-transparent"></div>
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">Happy Birthday!</h1>
          <p className="text-xl sm:text-2xl text-white drop-shadow-md">Celebrating your special day with love</p>
        </div>
        <button
          onClick={toggleMusic}
          className="absolute top-4 right-4 p-3 bg-white/80 rounded-full shadow-md hover:bg-white transition-colors"
          aria-label={isMusicPlaying ? "Pause music" : "Play music"}>
          {isMusicPlaying ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </header>
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Video Message Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Heart className="text-red-500 mr-2" />
            <h2 className="text-3xl font-bold">Special Message For You</h2>
          </div>
          <VideoMessage />
        </section>

        {/* Love Letter Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Heart className="text-red-500 mr-2" />
            <h2 className="text-3xl font-bold">Love Letter</h2>
          </div>
          <LoveLetterSection />
        </section>

        {/* Gift Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Gift className="text-purple-500 mr-2" />
            <h2 className="text-3xl font-bold">For You</h2>
          </div>
          <GiftSection triggerConfetti={triggerConfetti} />
        </section>

        {/* Birthday Cake Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Heart className="text-blue-500 mr-2" />
            <h2 className="text-3xl font-bold">Make a Wish</h2>
          </div>
          <BirthdayCake triggerConfetti={triggerConfetti} />
        </section>
      </div>
      <footer className="text-center py-6 text-gray-600 bg-pink-100">
        <p>Made with ❤️ just for you</p>
      </footer>
    </main>
  );
}

