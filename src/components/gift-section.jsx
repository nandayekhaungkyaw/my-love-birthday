"use client";
import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import gift1 from "../../public/glass.jpg"
import gift2 from "../../public/gift-2.jpg"


export default function GiftSection({
  triggerConfetti
}) {
  const [openedGifts, setOpenedGifts] = useState([])

  const gifts = [
    {
      id: 1,
      name: "Special Gift 1",
      image:"/nunyant.mp4",
      message: "I wish I was there with you!",
    },
    {
      id: 2,
      name: "Special Gift 2",
      image:"/VID_20250124_173135_381.mp4",
      message: "I wish I was there to fill your day with hugs, love, and endless laughter! 💖",
    },
    {
      id: 3,
      name: "Special Gift 3",
      image:"love.mp4",
      message:"I wish I could wake you up with a hundred kisses today",
    },
  ]

  const openGift = (id) => {
    if (!openedGifts.includes(id)) {
      setOpenedGifts([...openedGifts, id])
      triggerConfetti()
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {gifts.map((gift) => (
        <div key={gift.id} className="flex flex-col items-center">
          {openedGifts.includes(gift.id) ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center">
              <div
                className="relative w-48 h-48 mx-auto mb-4 rounded-lg overflow-hidden shadow-lg">
                 <video
    src={gift.image}
    autoPlay
    loop
    controls
    muted={gift.id === 1 || gift.id === 2}
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  />
              </div>
              <h3 className="text-xl font-semibold text-purple-700 mb-2">{gift.name}</h3>
              <p className="text-gray-600 italic">{gift.message}</p>
            </motion.div>
          ) : (
            <div className="text-center">
              <div
                className="relative w-48 h-48 mx-auto mb-4 cursor-pointer transform transition-transform hover:scale-105"
                onClick={() => openGift(gift.id)}>
                <div
                  className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg shadow-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl">🎁</div>
                </div>
                <div
                  className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-1 rounded-t-lg">
                  Gift #{gift.id}
                </div>
              </div>
              <Button
                onClick={() => openGift(gift.id)}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                Open Gift
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

