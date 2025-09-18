'use client'
import Card from './Card'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const CardList = ({ stories }) => {
  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {stories.map((s, idx) => (
        <motion.div key={idx} variants={itemVariants}>
          <Card story={s} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default CardList
