'use client'
import React, { useRef, useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

const SwiperStories = ({ Why }) => {
  const { locale } = useParams()
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const containerRef = useRef(null)

  const getText = (item) => (locale === 'ar' ? item.DesAr : item.Des)
  const getName = (item) => (locale === 'ar' ? item.Title : item.TitleEn)

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
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="relative max-w-6xl mx-auto p-4 sm:p-6 mt-10">
      <div
        ref={locale === 'ar' ? nextRef : prevRef}
        className="hidden lg:flex absolute top-1/2 -left-6 -translate-y-1/2 z-10 p-3 cursor-pointer"
      >
        <IoIosArrowBack className="text-[#1c2f8c] text-2xl" />
      </div>
      <div
        ref={locale === 'ar' ? prevRef : nextRef}
        className="hidden lg:flex absolute top-1/2 -right-6 -translate-y-1/2 z-10 p-3 cursor-pointer"
      >
        <IoIosArrowForward className="text-[#1c2f8c] text-2xl" />
      </div>

      <Swiper
        spaceBetween={20}
        modules={[Navigation, Pagination]}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="cursor-grab active:cursor-grabbing !pb-12"
      >
        {Why.map((item, index) => (
          <SwiperSlide key={index} className="flex items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl flex flex-col h-full w-full p-4 sm:p-6 shadow-[4px_6px_12px_rgba(28,47,140,0.25)]"
              dir={locale === 'ar' ? 'rtl' : 'ltr'}
            >
              <div className="text-3xl sm:text-4xl font-bold text-[#1c2f8c] mb-3 text-center">
                {isInView ? (
                  <>
                    +<CountUp end={item.Header} duration={2} />%
                  </>
                ) : (
                  <>+0%</>
                )}
              </div>

              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#1c2f8c] mb-4 text-center">
                {getName(item)}
              </h3>

              <p className="text-gray-700 text-sm sm:text-base text-center leading-relaxed mt-auto">
                <span className="text-secondary">"</span>
                {getText(item)}
                <span className="text-secondary">"</span>
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-pagination flex justify-center mt-4 lg:hidden" />
    </div>
  )
}

export default SwiperStories
