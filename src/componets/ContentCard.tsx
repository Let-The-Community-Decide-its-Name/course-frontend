import React from 'react'

type Props = {
  num: number,
  text: string;
  img: string
}

const ContentCard = ({ num ,text, img} : Props) => {
  return (
    <div className="flex space-x-14 mt-5">
   {num%2 !== 0 && 
   
 (   <>
  
      <div className="text-white w-full">{text}</div>
      <div className='w-full'>
          <img src={img} alt={img} className="w-full"/>
      </div>
      </>
      )
    }
    {
      num%2 === 0 &&
      (   <>
  
        <div className='w-full'>
            <img src={img} alt={img} className="w-full"/>
        </div>
        <div className="text-white w-full">{text}</div>
        </>
        )
    }
    </div>
  )
}

export default ContentCard
