
const Skeleton = ({ item, key }) => {
  return [...Array(item).keys()].map(() => (
    key= Math.random(),
    <div className="animate-pulse" key={key}>
      <div className="bg-gray-300 rounded-lg h-72"></div>
    </div>
  ))
}

export default Skeleton