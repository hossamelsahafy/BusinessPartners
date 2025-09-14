import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { VscSettings } from 'react-icons/vsc'

const SearchBar = ({ t }) => {
  return (
    <div className="w-full p-4 flex justify-between items-center rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 -mt-5 z-10">
      <div className="flex items-start gap-4">
        <CiSearch className="text-xl" />

        <p className="text-gray-600">{t('Search')}</p>
      </div>
      <VscSettings className="text-xl" />
    </div>
  )
}

export default SearchBar
