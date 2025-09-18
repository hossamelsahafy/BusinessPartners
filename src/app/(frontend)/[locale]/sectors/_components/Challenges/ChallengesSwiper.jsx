'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useParams } from 'next/navigation'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { motion } from 'framer-motion'
const ChallengesSwiper = ({ Challenges, labels }) => {
  const { locale } = useParams()
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  return (
    <div className="relative flex justify-center items-center w-full mt-4">
      <div
        ref={locale === 'en' ? prevRef : nextRef}
        className="hidden md:block absolute top-1/2 -left-6 lg:-left-12 -translate-y-1/2 z-10 cursor-pointer"
      >
        <IoIosArrowBack className="text-[#1c2f8c] text-2xl lg:text-3xl" />
      </div>

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
        {Challenges.map((c, idx) => (
          <SwiperSlide key={c.id}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-4 flex flex-col md:flex-row items-stretch gap-6"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="w-full md:w-1/2 lg:w-3/4 flex rounded-lg"
              >
                <Image
                  src={c.Image.url}
                  width={800}
                  height={800}
                  alt={c.Challenges}
                  className="object-cover w-full h-full rounded-lg"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-4"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-center gap-2 bg-white p-2 rounded shadow w-fit"
                >
                  <Image src={'/Subtract.png'} width={20} height={20} alt="icon" />
                  <p className="text-sm md:text-base font-medium">{labels.challenges}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="text-sm md:text-base leading-relaxed"
                >
                  {locale === 'ar' && c.Challenges && (
                    <RichText data={c.Challenges} className="rich-text" />
                  )}
                  {locale === 'en' && c.ChallengesEn && (
                    <RichText data={c.ChallengesEn} className="rich-text" />
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex items-center gap-2 bg-white p-2 rounded shadow w-fit"
                >
                  <Image src={'/Subtract.png'} width={20} height={20} alt="icon" />
                  <p className="text-sm md:text-base font-medium">{labels.chances}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="text-sm md:text-base leading-relaxed"
                >
                  {locale === 'ar' && c.Chances && (
                    <RichText data={c.Chances} className="rich-text" />
                  )}
                  {locale === 'en' && c.ChancesEn && (
                    <RichText data={c.ChancesEn} className="rich-text" />
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ChallengesSwiper
