const nameArabic = 'محمد الألفي'
const nameEnglish = 'Mohamed El-Alfy'
function HighlightedDes({ text }) {
  const parts = text.split(new RegExp(`(${nameArabic}|${nameEnglish})`, 'g'))

  return (
    <h2 className="mt-4 max-w-3xl text-sm md:text-lg font-medium">
      <span className="text-secondary">"</span>
      {parts.map((part, index) =>
        part === nameArabic || part === nameEnglish ? (
          <span key={index} className="text-secondary">
            {part}
          </span>
        ) : (
          part
        ),
      )}
      <span className="text-secondary">"</span>
    </h2>
  )
}
export default HighlightedDes
