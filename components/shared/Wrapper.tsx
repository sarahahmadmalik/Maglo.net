import React, { FC } from 'react'

const Wrapper:FC<{children:any}> = ({children}) => {
  return (
    <div className='max-w-screen-xl mx-auto lg:px-24  md:px-24 px-4'>
        {children}
    </div>
  )
}

export default Wrapper