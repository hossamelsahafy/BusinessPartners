'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'

const Card = ({ story }) => {
  const [expanded, setExpanded] = useState(false)
  const descRef = useRef(null)
  const [showButton, setShowButton] = useState(false)
  const maxHeight = 80
  const { locale } = useParams()

  useEffect(() => {
    if (descRef.current.scrollHeight > maxHeight) {
      setShowButton(true)
    }
  }, [])

  const toggleExpanded = () => setExpanded(!expanded)

  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <div
        className="flex items-start gap-2 bg-white shadow-[1px_2px_4px_rgba(28,47,140,0.3)]
 rounded-md p-4"
      >
        <Image src="/Subtract.png" alt="Icon" width={24} height={24} />
        <h3 className="font-semibold text-center">
          {locale === 'ar' ? story.title : story.title_en}
        </h3>
      </div>

      <div
        ref={descRef}
        className={`text-sm text-start mt-2 overflow-hidden transition-all duration-300`}
        style={{
          maxHeight: expanded ? `${descRef.current?.scrollHeight}px` : `${maxHeight}px`,
        }}
      >
        {locale === 'ar' ? story.des : story.des_en}
      </div>

      {showButton && (
        <button className="text-secondary text-sm mt-1 hover:underline" onClick={toggleExpanded}>
          {locale === 'ar'
            ? expanded
              ? 'اقرأ أقل'
              : 'اقرأ المزيد'
            : expanded
              ? 'Read Less'
              : 'Read More'}
        </button>
      )}
    </div>
  )
}
export default Card
