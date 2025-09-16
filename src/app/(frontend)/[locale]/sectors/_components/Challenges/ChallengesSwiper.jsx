'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useParams } from 'next/navigation'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

const ChallengesSwiper = ({ Challenges, labels }) => {
  const { locale } = useParams()
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div className="relative flex justify-center items-center w-full mt-4">
      {/* Left Arrow */}
      <div
        ref={locale === 'en' ? prevRef : nextRef}
        className="hidden md:block absolute top-1/2 -left-6 lg:-left-12 -translate-y-1/2 z-10 cursor-pointer"
      >
        <IoIosArrowBack className="text-[#1c2f8c] text-2xl lg:text-3xl" />
      </div>

      {/* Right Arrow */}
      <div
        ref={locale === 'en' ? nextRef : prevRef}
        className="hidden md:block absolute top-1/2 -right-6 lg:-right-12 -translate-y-1/2 z-10 cursor-pointer"
      >
        <IoIosArrowForward className="text-[#1c2f8c] text-2xl lg:text-3xl" />
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        className="w-full max-w-6xl cursor-grab"
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {Challenges.map((c) => (
          <SwiperSlide key={c.Challenges}>
            <div className="mt-4 flex flex-col md:flex-row items-stretch gap-6">
              {/* Image */}
              <div className="w-full md:w-1/2 lg:w-3/4 flex rounded-lg">
                <Image
                  src={c.Image}
                  width={800}
                  height={800}
                  alt={c.Challenges}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-4">
                {/* Challenges */}
                <div className="flex items-center gap-2 bg-white p-2 rounded shadow w-fit">
                  <Image src={'/Subtract.png'} width={20} height={20} alt="icon" />
                  <p className="text-sm md:text-base font-medium">{labels.challenges}</p>
                </div>
                <div
                  className="text-sm md:text-base leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: locale === 'ar' ? c.Challenges : c.ChallengesEn,
                  }}
                />

                {/* Chances */}
                <div className="flex items-center gap-2 bg-white p-2 rounded shadow w-fit">
                  <Image src={'/Subtract.png'} width={20} height={20} alt="icon" />
                  <p className="text-sm md:text-base font-medium">{labels.chances}</p>
                </div>
                <div
                  className="text-sm md:text-base leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: locale === 'ar' ? c.Chances : c.ChancesEn,
                  }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ChallengesSwiper
