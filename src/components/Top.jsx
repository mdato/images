import React from 'react'

const Top = ({ children }) => {
  return (
    <div className="bg-gray-900 flex items-center py-5">
      <div className='max-w-md mx-auto w-full'>
        <h1 className='text-white text-center text-3xl font-bold mb-5'>Search images <span className='text-gray-400 text-xs'>from Unsplash</span></h1>
        {children}
      </div>
    </div>
  )
}

export default Top