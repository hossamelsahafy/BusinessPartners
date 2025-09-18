'use client'
import React, { useRef, useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { motion } from 'framer-motion'
const SwiperStories = ({ clients }) => {
  const { locale } = useParams()
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [maxHeight, setMaxHeight] = useState(0)
  const cardRefs = useRef([])

  const getText = (client) => (locale === 'ar' ? client.DesAr : client.DesEn)
  const getName = (client) => (locale === 'ar' ? client.NameAr : client.NameEn)
  const getPosition = (client) => (locale === 'ar' ? client.PositionAr : client.PositionEn)

  useEffect(() => {
    if (cardRefs.current.length > 0) {
      const heights = cardRefs.current.map((ref) => (ref ? ref.offsetHeight : 0))
      const max = Math.max(...heights)
      setMaxHeight(max)
    }
  }, [clients, locale])

  return (
    <div className="relative max-w-6xl mx-auto my-10">
      <div
        ref={locale === 'en' ? prevRef : nextRef}
        className="hidden sm:flex absolute top-1/2 -left-12 -translate-y-1/2 z-10  cursor-pointer"
      >
        <IoIosArrowBack className="text-[#1c2f8c] text-2xl" />
      </div>
      <div
        ref={locale === 'en' ? nextRef : prevRef}
        className="hidden sm:flex  absolute top-1/2 -right-12 -translate-y-1/2 z-10  cursor-pointer"
      >
        <IoIosArrowForward className="text-[#1c2f8c] text-2xl" />
      </div>
      {
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          slidesOffsetBefore={15}
          slidesOffsetAfter={15}
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
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="cursor-grab active:cursor-grabbing !pb-6"
        >
          {clients.map((client, index) => {
            const description = getText(client)
            const stars = client.stars
            return (
              <SwiperSlide key={index}>
                <motion.div
                  ref={(el) => (cardRefs.current[index] = el)}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl flex flex-col h-full p-6 shadow-[4px_6px_12px_rgba(28,47,140,0.25)] px-4"
                  dir={locale === 'ar' ? 'rtl' : 'ltr'}
                  style={{ minHeight: maxHeight > 0 ? `${maxHeight}px` : 'auto' }}
                >
                  <div className="flex flex-col h-full items-center text-center">
                    <div className="w-28 h-28 rounded-full overflow-hidden mb-4 shadow-md shadow-[#1c2f8c]/30">
                      <Image
                        src={client.Image.url}
                        alt={getName(client)}
                        width={112}
                        height={112}
                        className="object-cover w-full h-full"
                      />
                    </div>

                    <h3 className="text-lg lg:text-xl font-semibold text-[#1c2f8c] mb-2">
                      {getName(client)}
                    </h3>
                    <p className="text-base mb-3">"{getPosition(client)}"</p>

                    <div className="flex justify-center gap-1 mb-4">
                      {Array.from({ length: 5 }).map((_, i) =>
                        i < stars ? (
                          <FaStar key={i} className="text-secondary" />
                        ) : (
                          <FaRegStar key={i} className="text-[#333]" />
                        ),
                      )}
                    </div>

                    <p className="text-gray-700 text-sm lg:text-base leading-relaxed mt-auto">
                      {description}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      }
    </div>
  )
}

export default SwiperStories
