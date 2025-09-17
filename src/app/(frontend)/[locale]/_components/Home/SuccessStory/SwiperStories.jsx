'use client'
import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'

const SwiperStories = ({ stories }) => {
  const { locale } = useParams()
  const [expanded, setExpanded] = useState({})
  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const getText = (story) => (locale === 'ar' ? story.DesAr : story.DesEn)
  const getName = (story) => (locale === 'ar' ? story.NameAr : story.NameEn)

  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        modules={[Navigation]}
        className="cursor-grab active:cursor-grabbing"
      >
        {stories.map((story) => {
          const description = getText(story)
          const isExpanded = expanded[story.id]
          const limit = 500

          return (
            <SwiperSlide key={story.id}>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-6 mt-8  rounded-xl shadow-md shadow-[#1c2f8c]/30`}
                dir={locale === 'ar' ? 'rtl' : 'ltr'}
              >
                <div className="relative w-full h-64 md:h-[350px]">
                  <Image
                    src={story.Image.url}
                    alt={getName(story)}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>

                <div className="flex flex-col pr-2 md:max-h-[350px] md:overflow-y-auto">
                  <h3 className="text-xl lg:text-2xl font-semibold text-[#1c2f8c] mb-3">
                    {getName(story)}
                  </h3>
                  <p className="text-gray-700 text-sm lg:text-base leading-relaxed text-justify">
                    {isExpanded
                      ? description
                      : description.length > limit
                        ? description.slice(0, limit) + '...'
                        : description}
                  </p>
                  {description.length > limit && (
                    <button
                      onClick={() => toggleExpand(story.id)}
                      className="mt-3 text-des font-medium hover:underline self-start"
                    >
                      {isExpanded
                        ? locale === 'ar'
                          ? 'إقرأ أقل'
                          : 'Read Less'
                        : locale === 'ar'
                          ? 'إقرأ المزيد'
                          : 'Read More'}
                    </button>
                  )}
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <div className="custom-prev hidden sm:flex absolute top-1/2 -left-12 -translate-y-1/2 z-10 text-[#1c2f8c] cursor-pointer">
        <IoIosArrowBack className="text-[#1c2f8c] text-2xl font-semibold" />
      </div>
      <div className="custom-next hidden sm:flex  absolute top-1/2 -right-12 -translate-y-1/2 z-10 text-[#1c2f8c] cursor-pointer">
        <IoIosArrowForward className="text-[#1c2f8c] text-2xl font-semibold" />
      </div>
    </div>
  )
}

export default SwiperStories
