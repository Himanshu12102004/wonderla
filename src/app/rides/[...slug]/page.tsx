'use client'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

function page() {
  const url=usePathname()
  return (
    <div className='h-full w-full flex items-center justify-center'>
      <h1 className='text-6xl'>You are on {url}</h1></div>
  )
}

export default page