import { useEffect, useState } from 'react'
import getStories from '@/app/(frontend)/[locale]/_actions/GetStories'
import Success from './Success'
const Stories = () => {
  const [stories, setStories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStories = async () => {
      const data = await getStories()
      if (data) {
        setStories(data.docs)
      }
      setLoading(false)
    }

    fetchStories()
  }, [])
  return (
    <div>
      <Success loading={loading} stories={stories} />
    </div>
  )
}

export default Stories
