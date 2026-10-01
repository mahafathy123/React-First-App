import React from 'react'
export default function Header({name,user}) {
  return (
    <>
      <p className='text-3xl font-bold text-center capitalize'><span className='py-.5 px-2 ps-2 rounded bg-(--main-color) me-2'>{name}</span>{user?"Page":'Now'}</p>
    </>
  )
}
