'use client'
import React, { useRef, useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

const SwiperStories = ({ Why }) => {
  const { locale } = useParams()
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [maxHeight, setMaxHeight] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const cardRefs = useRef([])
  const containerRef = useRef(null)

  const getText = (Why) => (locale === 'ar' ? Why.DesAr : Why.Des)
  const getName = (Why) => (locale === 'ar' ? Why.Title : Why.TitleEn)

  // Trigger CountUp only when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    if (containerRef.current) observer.observe(containerRef.current)

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [])

  useEffect(() => {
    if (cardRefs.current.length > 0) {
      const heights = cardRefs.current.map((ref) => (ref ? ref.offsetHeight : 0))
      setMaxHeight(Math.max(...heights))
    }
  }, [Why, locale])

  return (
    <div ref={containerRef} className="relative max-w-6xl mx-auto p-4 sm:p-6 mt-10">
      <div
        ref={locale === 'ar' ? nextRef : prevRef}
        className="hidden sm:flex absolute top-1/2 -left-6 sm:-left-6 -translate-y-1/2 z-10  p-3 sm:p-4  cursor-pointer"
      >
        <IoIosArrowBack className="text-[#1c2f8c] text-xl sm:text-2xl" />
      </div>
      <div
        ref={locale === 'ar' ? prevRef : nextRef}
        className="hidden sm:flex absolute top-1/2 -right-6 sm:-right-6 -translate-y-1/2 z-10 p-3 sm:p-4  cursor-pointer"
      >
        <IoIosArrowForward className="text-[#1c2f8c] text-xl sm:text-2xl" />
      </div>

      <Swiper
        spaceBetween={20}
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="cursor-grab active:cursor-grabbing !pb-8"
      >
        {Why.map((w, index) => {
          const description = getText(w)

          return (
            <SwiperSlide key={index} className="px-1 sm:px-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                ref={(el) => (cardRefs.current[index] = el)}
                className="bg-white rounded-xl flex flex-col h-full p-4 sm:p-6 shadow-[4px_6px_12px_rgba(28,47,140,0.25)]"
                dir={locale === 'ar' ? 'rtl' : 'ltr'}
                style={{ minHeight: maxHeight > 0 ? `${maxHeight}px` : 'auto' }}
              >
                <div className="flex flex-col h-full">
                  <div className="text-3xl sm:text-4xl font-bold text-[#1c2f8c] mb-3 text-center">
                    {isInView ? (
                      <>
                        +<CountUp end={w.Header} duration={2} />%
                      </>
                    ) : (
                      <>+0%</>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#1c2f8c] mb-4 text-center">
                    {getName(w)}
                  </h3>

                  <div className="mt-auto">
                    <p className="text-gray-700 text-sm sm:text-base text-center leading-relaxed">
                      <span className="text-secondary">"</span>
                      {description}
                      <span className="text-secondary">"</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default SwiperStories
