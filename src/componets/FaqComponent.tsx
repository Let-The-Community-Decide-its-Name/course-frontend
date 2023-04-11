import React from 'react'

type Props = {
    icon: string,
    tittle: string,
    info: string
}

const FaqComponent = ({icon, tittle, info}: Props) => {
  return (
    <div className=' text-gray-300 border-white border-2 max-w-full mr-5 ml-4 pr-5 py-5 mb-5'>
        <div>
          <div className='flex space-x-5 justify-between mb-4 ml-5 md:ml-0'>
            <div className='hidden md:block w-[15%] text-center'>
              {icon}
            </div>
            <div className='border-gray-300 border-2
             p-3  w-[80%]'>
            {tittle}
            </div>
          </div>
          <div className='flex justify-between'>

          <div className="invisible hidden md:block">empty</div>
          <div className='border-white border-2 p-3 max-w-[80%] ml-8'>{info}</div>
          </div>
        </div>
    </div>
  )
}

export default FaqComponent