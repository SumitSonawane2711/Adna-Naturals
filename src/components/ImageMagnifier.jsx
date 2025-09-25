
import { useState } from "react"
import PropTypes from "prop-types"
import { motion } from "framer-motion"


export default function ImageMagnifier({ images }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 })
  const [showMagnifier, setShowMagnifier] = useState(false)

  // Make sure we have at least one image
  const imageArray = images?.length > 0 ? images : ["/placeholder.svg?height=600&width=600"]
  const selectedImage = imageArray[selectedImageIndex]

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()

    // Calculate relative position (0 to 1)
    const x = (e.clientX - left) / width
    const y = (e.clientY - top) / height

    // Ensure values are between 0 and 1
    const boundedX = Math.max(0, Math.min(1, x))
    const boundedY = Math.max(0, Math.min(1, y))

    setMagnifierPosition({ x: boundedX, y: boundedY })
  }

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-5 w-full">
      {/* Thumbnails */}
      <div className="order-2 p-2 md:order-1 flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:max-h-[500px] ">
        {imageArray.map((img, index) => (
          <div
            key={index}
            className={`flex-shrink-0 h-20 w-20 rounded-md object-contain overflow-hidden cursor-pointer transition-all ${
              selectedImageIndex === index ? "ring-2 ring-green-500" : "ring-1 ring-gray-200 hover:ring-gray-300"
            }`}
            onClick={() => setSelectedImageIndex(index)}
          >
            <img
              src={img || "/placeholder.svg"}
              alt={`Product view ${index + 1}`}
              className="h-full w-full object-contain object-center"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Main image with magnifier */}
      <div
        className="relative order-1 md:order-2 md:col-span-4 aspect-square rounded-lg overflow-hidden bg-white"
        onMouseEnter={() => setShowMagnifier(true)}
        onMouseLeave={() => setShowMagnifier(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Main image */}
        <img
          src={selectedImage || "/placeholder.svg"}
          alt="Product main view"
          className="w-full h-full object-contain"
        />

        {/* Magnifier lens indicator */}
        {showMagnifier && (
          <div
            className="absolute border border-gray-600 bg-white/50 rounded-full pointer-events-none"
            style={{
              width: "100px",
              height: "100px",
              left: `calc(${magnifierPosition.x * 100}% - 50px)`,
              top: `calc(${magnifierPosition.y * 100}% - 50px)`,
              opacity: 0.4,
            }}
          />
        )}

        {/* Magnified view - positioned absolutely but outside the component */}
        {showMagnifier && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed z-50 rounded-lg overflow-hidden border border-gray-200 shadow-xl hidden lg:block"
            style={{
              width: "450px",
              height: "450px",
              left: "calc(50% + 10px)", // Position it to the right side of the page
              top: "55%",
              transform: "translateY(-50%)",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${selectedImage})`,
                backgroundPosition: `${magnifierPosition.x * 100}% ${magnifierPosition.y * 100}%`,
                backgroundSize: "300%",
                backgroundRepeat: "no-repeat",
              }}
            />
          </motion.div>
        )}
      </div>
      </div>
  )
}

ImageMagnifier.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
}

