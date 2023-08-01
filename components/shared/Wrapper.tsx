import React, { FC } from 'react'

const Wrapper:FC<{children:any}> = ({children}) => {
  return (
    <div className=' mx-auto lg:px-14   md:px-14 px-4'>
        {children}
    </div>
  )
}

export default Wrapper