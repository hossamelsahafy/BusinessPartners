import Card from './Card'
const CardList = ({ stories }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-4">
      {stories.map((s, idx) => (
        <Card key={idx} story={s} />
      ))}
    </div>
  )
}

export default CardList
