"use client"

import { useState, useEffect } from "react"
// import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Dorothy Padilla",
    email: "ahbo@urmezeze.sa",
    content: "squam tempore suscipit perspiciatis sit?",
    image: "https://static.toiimg.com/thumb/msid-65755829,width-400,resizemode-4/65755829.jpg"
  },
  {
    id: 2,
    name: "Devin Davis",
    email: "se@esuruebo.kw",
    content: "squam tempore suscipit perspiciatis sit?",
    image: "https://static.toiimg.com/thumb/msid-65755829,width-400,resizemode-4/65755829.jpg"

  },
  {
    id: 3,
    name: "Charles Maxwell",
    email: "rola@zzy.ee",
    content: "squam tempore suscipit perspiciatis sit?",
    image: "https://static.toiimg.com/thumb/msid-65755829,width-400,resizemode-4/65755829.jpg"

  },
  {
    id: 4,
    name: "Emma Johnson",
    email: "emma@example.com",
    content: "squam tempore suscipit perspiciatis sit?",
    image: "https://static.toiimg.com/thumb/msid-65755829,width-400,resizemode-4/65755829.jpg"

  },
  {
    id: 5,
    name: "Harish",
    email: "michael@example.com",
    content: "squam tempore suscipit perspiciatis sit?",
    image: "https://static.toiimg.com/thumb/msid-65755829,width-400,resizemode-4/65755829.jpg"

  },
  {
    id: 6,
    name: "Mkahdf",
    email: "michael@example.com",
    content: "squam tempore suscipit perspiciatis sit?",
    image: "https://static.toiimg.com/thumb/msid-65755829,width-400,resizemode-4/65755829.jpg"

  },
  {
    id: 7,
    name: "akdskhf",
    email: "michael@example.com",
    content: "squam tempore suscipit perspiciatis sit?",
    image: "https://static.toiimg.com/thumb/msid-65755829,width-400,resizemode-4/65755829.jpg"

  },
  {
    id: 8,
    name: "klahsdf",
    email: "michael@example.com",
    content: "squam tempore suscipit perspiciatis sit?",
    image: "https://static.toiimg.com/thumb/msid-65755829,width-400,resizemode-4/65755829.jpg"

  },
  {
    id: 9,
    name: "akjd",
    email: "michael@example.com",
    content: "squam tempore suscipit perspiciatis sit?",
    image: "https://static.toiimg.com/thumb/msid-65755829,width-400,resizemode-4/65755829.jpg"

  },
  {
    id: 10,
    name: "kjsdf",
    email: "michael@example.com",
    content: "squam tempore suscipit perspiciatis sit?",
    image: "https://static.toiimg.com/thumb/msid-65755829,width-400,resizemode-4/65755829.jpg"

  },
  {
    id: 11,
    name: "kjsdfl",
    email: "michael@example.com",
    content: "squam tempore suscipit perspiciatis sit?",
    image: "https://static.toiimg.com/thumb/msid-65755829,width-400,resizemode-4/65755829.jpg"

  },
  {
    id: 12,
    name: "ksdh",
    email: "michael@example.com",
    content: "squam tempore suscipit perspiciatis sit?",
    image: "https://static.toiimg.com/thumb/msid-65755829,width-400,resizemode-4/65755829.jpg"

  },


]

export default function VerticalTestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    let timer;
    if (!isHovered) {
      timer = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [isHovered]);

  const getVisibleTestimonials = () => {
    const visibleIndices = [
      (activeIndex - 1 + testimonials.length) % testimonials.length,
      activeIndex,
      (activeIndex + 1) % testimonials.length
    ]
    return visibleIndices.map(index => testimonials[index])
  }
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  return (
    <div className="w-full max-w-md mx-auto h-[500px] flex items-center justify-center bg-[#1e1e2e] p-4">
      <div className="relative w-full h-[350px]">
        {getVisibleTestimonials().map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`absolute w-full cursor-pointer transition-all duration-500 ease-in-out ${
              index === 1
                ? "top-1/2 -translate-y-1/2 opacity-100 scale-100 z-20"
                : index === 0
                ? "top-8 -translate-y-1/4 opacity-50 scale-95 z-10"
                : "bottom-8 translate-y-1/4 opacity-50 scale-95 z-10"
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="bg-white rounded-lg p-6 shadow-lg">
              < div className="flex  mb-4 gap-3">
                  <img src={testimonial.image} className="w-20 h-20 object-cover rounded-full"  alt="" />
                
            <div className="flex flex-col">
              <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">{testimonial.email}</p>
              <p className="text-gray-700">{testimonial.content}</p>
              <div className="flex justify-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                ))}
              </div>
              </div>
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
