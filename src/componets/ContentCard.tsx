import React from 'react'

type Props = {
  num: number,
  text: string;
  img: string
}

const ContentCard = ({ num ,text, img} : Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-14 mt-5">
   {num%2 !== 0 && 
   
 (   <>
  
      <div className="text-white w-full">{text}</div>
      <div className='w-full'>
          <img src={img} alt={img} className="w-[60%]"/>
      </div>
      </>
      )
    }
    {
      num%2 === 0 &&
      (   <>
  
        <div className='w-full'>
            <img src={img} alt={img} className="w-[60%]"/>
        </div>
        <div className="text-white w-full">{text}</div>
        </>
        )
    }
    </div>
  )
}

export default ContentCard
