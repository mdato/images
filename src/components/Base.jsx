import { useContext } from "react"
import { ImageContext } from "../App"
import Picture from "./Picture";
import Skeleton from "./Skeleton";

const Base = () => {
  const { response, load, searchImage } = useContext(ImageContext);

  return (
    <>
      <h1 className="text-center mt-5 text-xl text-gray-400">Results for <span className="text-2xl text-gray-600">{searchImage || 'Argentina'}</span></h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-5 max-w-7xl mx-auto px-4">
        {load ? <Skeleton item={28} /> : response.map((data, key) => <Picture key={key} data={data} />)}
      </div>
    </>
  )
}

export default Base