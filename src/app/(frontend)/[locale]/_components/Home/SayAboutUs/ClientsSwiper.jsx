'use client'
import React, { useRef } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { FaStar, FaRegStar } from 'react-icons/fa'

const SwiperStories = ({ clients }) => {
  const { locale } = useParams()
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const getText = (client) => (locale === 'ar' ? client.DesAr : client.DesEn)
  const getName = (client) => (locale === 'ar' ? client.NameAr : client.NameEn)
  const getPosition = (client) => (locale === 'ar' ? client.PositionAr : client.PositionEn)
  return (
    <div className="relative max-w-6xl mx-auto my-10">
      {/* Custom Arrows */}
      <div
        ref={prevRef}
        className="absolute top-1/2 -left-6 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md shadow-[#1c2f8c]/30 cursor-pointer"
      >
        <IoIosArrowBack className="text-[#1c2f8c] text-2xl" />
      </div>
      <div
        ref={nextRef}
        className="absolute top-1/2 -right-6 -translate-y-1/2 z-10 bg-white p-4 rounded-full shadow-md shadow-[#1c2f8c]/30 cursor-pointer"
      >
        <IoIosArrowForward className="text-[#1c2f8c] text-2xl" />
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
            swiper.navigation.destroy()
            swiper.navigation.init()
            swiper.navigation.update()
          })
        }}
        className="cursor-grab active:cursor-grabbing"
      >
        {clients.map((client, index) => {
          const description = getText(client)
          const stars = client.stars

          return (
            <SwiperSlide key={index}>
              <div
                className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center text-center h-full"
                dir={locale === 'ar' ? 'rtl' : 'ltr'}
              >
                <div className="w-28 h-28 rounded-full overflow-hidden mb-4 shadow-md shadow-[#1c2f8c]/30">
                  <Image
                    src={client.Image}
                    alt={getName(client)}
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                </div>

                <h3 className="text-lg lg:text-xl font-semibold text-[#1c2f8c] mb-2">
                  {getName(client)}
                </h3>
                <p className="text-base text-center">"{getPosition(client)}"</p>

                <div className="flex justify-center gap-1 mb-3 mt-2">
                  {Array.from({ length: 5 }).map((_, i) =>
                    i < stars ? (
                      <FaStar key={i} className="text-secondary" />
                    ) : (
                      <FaRegStar key={i} className="text-[#333]" />
                    ),
                  )}
                </div>

                <p className="text-gray-700 text-sm lg:text-base leading-relaxed">{description}</p>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default SwiperStories
