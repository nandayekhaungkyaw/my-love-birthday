"use client"

import { useEffect, useRef } from "react"

export default function Confetti() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const confettiCount = 200
    const confettiColors = ["#ff718d", "#fdadb6", "#ff8a5c", "#ffd05b", "#b983ff", "#a3d8f4", "#b5ead7", "#c7ceea"]
    const confettiPieces = []

    // Create confetti pieces
    for (let i = 0; i < confettiCount; i++) {
      confettiPieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 10 + 5,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        speed: Math.random() * 3 + 2,
        angle: Math.random() * Math.PI * 2,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: Math.random() * 0.2 - 0.1,
      })
    }

    // Animation loop
    let animationFrameId

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      let stillFalling = false

      confettiPieces.forEach((piece) => {
        ctx.save()
        ctx.translate(piece.x, piece.y)
        ctx.rotate(piece.rotation)

        ctx.fillStyle = piece.color
        ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size)

        ctx.restore()

        // Update position
        piece.y += piece.speed
        piece.x += Math.sin(piece.angle) * 2
        piece.rotation += piece.rotationSpeed

        // Reset if it goes off screen
        if (piece.y < canvas.height) {
          stillFalling = true
        }
      })

      if (stillFalling) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    };
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-50" />;
}

