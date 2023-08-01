import React, { FC } from 'react'

const Wrapper:FC<{children:any}> = ({children}) => {
  return (
    <div className='mdd:max-w-screen-xl xl:max-w-none mx-auto xl:px-[16rem]    md:px-14 px-4'>
        {children}
    </div>
  )
}

export default Wrapper;