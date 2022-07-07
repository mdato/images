
const Picture = ({ data }) => {
  return (
    <div className="relative">
      <a href={data.urls.regular} target="_blank" rel="noreferrer">
    <img className="h-72 w-full object-cover rounded-lg shadow-md z-1" src={data.urls.small} alt={data.alt_description} />
  
  {data.user.name && (<div className="flex flex-col"><div className="flex flex-row relative text-[12px] mt-[-25px] pt-1 pb-1 bg-black opacity-90 text-gray-100 px-3 justify-between"><img className="h-6 w-6 rounded-lg shadow-md z-1" src={data.user.profile_image.small} alt={data.alt_description} />  <p className="pl-2">Author: {data.user.name}</p></div></div>) }
  
  
  </a></div>
    
  )
}

export default Picture