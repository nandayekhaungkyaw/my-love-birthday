"use client";
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function BirthdayCake({
  triggerConfetti
}) {
  const [candlesBlown, setCandlesBlown] = useState(false)
  const [showWish, setShowWish] = useState(false)
  const [isBlowing, setIsBlowing] = useState(false)
  const [blowProgress, setBlowProgress] = useState(0)

  const candleCount = 5

  useEffect(() => {
    if (isBlowing) {
      const interval = setInterval(() => {
        setBlowProgress((prev) => {
          const newProgress = prev + 10
          if (newProgress >= 100) {
            clearInterval(interval)
            setIsBlowing(false)
            setCandlesBlown(true)
            triggerConfetti()
            setTimeout(() => setShowWish(true), 1000)
            return 100
          }
          return newProgress
        })
      }, 300)

      return () => clearInterval(interval);
    }
  }, [isBlowing, triggerConfetti])

  const startBlowing = () => {
    if (!candlesBlown && !isBlowing) {
      setIsBlowing(true)
    }
  }

  const resetCake = () => {
    setCandlesBlown(false)
    setShowWish(false)
    setBlowProgress(0)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-64 h-64 mb-8">
        {/* Cake base */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-pink-300 to-pink-400 rounded-lg"></div>
        <div
          className="absolute bottom-32 left-8 right-8 h-16 bg-gradient-to-b from-pink-200 to-pink-300 rounded-lg"></div>
        <div
          className="absolute bottom-48 left-16 right-16 h-12 bg-gradient-to-b from-pink-100 to-pink-200 rounded-lg"></div>

        {/* Candles */}
        <div
          className="absolute bottom-48 left-0 right-0 flex justify-center space-x-4">
          {Array.from({ length: candleCount }).map((_, i) => (
            <div key={i} className="relative">
              <div
                className="w-2 h-16 bg-gradient-to-b from-yellow-200 to-yellow-400 rounded-full"></div>
              {!candlesBlown && (
                <motion.div
                  className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-4 h-8"
                  animate={{
                    scaleY: [1, 1.2, 0.9, 1.1, 1],
                    rotate: [0, 2, -2, 1, 0],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}>
                  <div
                    className="w-full h-full bg-gradient-to-t from-orange-400 to-yellow-200 rounded-full opacity-80 blur-[2px]"></div>
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-orange-500 to-yellow-300 rounded-full opacity-60 scale-75 blur-[1px]"></div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Decorations */}
        <div className="absolute bottom-8 left-4 right-4 flex justify-around">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="w-4 h-4 bg-white rounded-full"></div>
          ))}
        </div>

        {/* Blow progress indicator */}
        {isBlowing && (
          <div
            className="absolute -bottom-12 left-0 right-0 h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              style={{ width: `${blowProgress}%` }}></div>
          </div>
        )}
      </div>
      {showWish ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl shadow-md max-w-md">
          <h3 className="text-2xl font-bold text-purple-700 mb-4">Your Wish Has Been Made!</h3>
          <p className="text-gray-700 mb-6">May all your dreams and wishes come true. Happy Birthday!</p>
          <button
            onClick={resetCake}
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors shadow-md">
            Make Another Wish
          </button>
        </motion.div>
      ) : (
        <button
          onClick={startBlowing}
          disabled={candlesBlown || isBlowing}
          className={`px-6 py-3 rounded-full text-white shadow-md transition-colors ${
            candlesBlown || isBlowing
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
          }`}>
          {isBlowing ? "Blowing..." : candlesBlown ? "Candles Blown!" : "Blow Out the Candles"}
        </button>
      )}
    </div>
  );
}

