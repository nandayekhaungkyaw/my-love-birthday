"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function LoveLetterSection() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col items-center">
      {!isOpen ? (
        <div className="text-center">
          <div
            className="relative w-64 h-64 mx-auto mb-6 cursor-pointer"
            onClick={() => setIsOpen(true)}>
            <div
              className="absolute inset-0 bg-pink-200 rounded-lg shadow-md transform rotate-3 transition-transform"></div>
            <div
              className="absolute inset-0 bg-red-100 rounded-lg shadow-md border-2 border-red-300 flex items-center justify-center transform hover:rotate-0 transition-transform">
              <div className="text-center p-4">
                <div className="text-red-500 text-4xl mb-2">❤️</div>
                <h3 className="text-xl font-semibold text-red-700">Click to Open</h3>
                <p className="text-red-600 mt-2">A letter just for you</p>
              </div>
            </div>
          </div>
          <Button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white">
            Open Love Letter
          </Button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl">
          <Card className="p-8 bg-gradient-to-br from-red-50 to-pink-50 border-pink-200">
            <div className="prose prose-pink max-w-none">
              <h3 className="text-2xl font-script text-center text-red-600 mb-6">My Dearest,</h3>
              <p className="mb-4">
              Happy Birthday, My Amazing Designer! 🎂💖
A year older, wiser, and now officially a Junior UI/UX Designer! 🎨🚀
Seeing you grow and achieve your dreams makes me so proud!
May your creativity shine even brighter, and may this year bring you happiness, success, and next senior position 💕
Keep designing, keep dreaming, and keep being the incredible YOU!
              </p>

              <p className="mb-4">
                On your special day, I wanted to take a moment to tell you how much you mean to me. Your smile brightens
                my darkest days, and your laughter is the sweetest melody to my ears.
              </p>

              <p className="mb-4">
                Every moment with you feels like a gift. Your kindness, your strength, and your beautiful spirit inspire
                me every day. I'm so grateful that you were born, and even more grateful that you're in my life.
              </p>

    

              <p className="mb-4">Thank you for being you – the amazing person that I love with all my heart.</p>

              <p className="text-right font-semibold text-red-600 mt-8">With all my love,</p>
              <p className="text-right font-script text-xl text-red-600">Your Love</p>
            </div>

            <div className="text-center mt-8">
              <Button
                onClick={() => setIsOpen(false)}
                variant="outline"
                className="border-pink-300 text-pink-700 hover:bg-pink-50">
                Close Letter
              </Button>
            </div>
          </Card>
        </motion.div>
      )}
    </div>
  );
}

