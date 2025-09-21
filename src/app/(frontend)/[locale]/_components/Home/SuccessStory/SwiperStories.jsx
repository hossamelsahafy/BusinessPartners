'use client'
import React, { useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { motion } from 'framer-motion'

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
        pagination={{
          clickable: true,
          el: '.custom-pagination',
        }}
        modules={[Navigation, Pagination]}
        className="cursor-grab active:cursor-grabbing !pb-12"
      >
        {stories.map((story) => {
          const description = getText(story)
          const isExpanded = expanded[story.id]
          const limit = 500

          return (
            <SwiperSlide key={story.id}>
              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 rounded-xl"
                dir={locale === 'ar' ? 'rtl' : 'ltr'}
              >
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="relative w-full h-64 md:h-[350px]"
                >
                  <Image
                    src={story.Image.url}
                    alt={getName(story)}
                    fill
                    className="object-cover rounded-lg"
                  />
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.2, delayChildren: 1 }}
                  variants={{ hidden: {}, visible: {} }}
                  className="flex flex-col pr-2 md:max-h-[350px] md:overflow-y-auto"
                >
                  <motion.h3
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                    className="text-xl lg:text-2xl font-semibold text-[#1c2f8c] mb-3"
                  >
                    {getName(story)}
                  </motion.h3>

                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.6 }}
                    className="text-gray-700 text-sm lg:text-base leading-relaxed text-justify"
                  >
                    {isExpanded
                      ? description
                      : description.length > limit
                        ? description.slice(0, limit) + '...'
                        : description}
                  </motion.p>

                  {description.length > limit && (
                    <motion.button
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.6 }}
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
                    </motion.button>
                  )}
                </motion.div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>

      <div className="custom-prev hidden lg:flex absolute top-1/2 -left-12 -translate-y-1/2 z-10 cursor-pointer">
        <IoIosArrowBack className="text-[#1c2f8c] text-2xl font-semibold" />
      </div>
      <div className="custom-next hidden lg:flex absolute top-1/2 -right-12 -translate-y-1/2 z-10 cursor-pointer">
        <IoIosArrowForward className="text-[#1c2f8c] text-2xl font-semibold" />
      </div>

      <div className="custom-pagination flex justify-center mt-4 lg:hidden" />
    </div>
  )
}

export default SwiperStories
