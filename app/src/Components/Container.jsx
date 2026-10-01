import React from 'react'

export default function Container({children ,className}) {
  return (
    <div className={`${className}container mx-auto my-5 px-5 xl:px-20`}>
      {children}
    </div>
  )
}
