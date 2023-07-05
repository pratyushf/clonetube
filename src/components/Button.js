import React from 'react'

export default function Button({filters}) {
  return (
    <div className=' h-fit'>
      <button className=' p-2 border m-2 w-fit bg-gray-200 rounded-xl'>{filters}</button>
    </div>
  )
}
