import React from 'react'
import '../CSS_files/WeekCard.css'
const WeekCard = ({img1,h2}) => {
  return (
    <>
    <div style={{backgroundImage:`url(${img1})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%" }} className='card1'>
    <div className="topDiv">
      <p>Collection</p>
      <h2>{h2}</h2>
    </div>
    <button>Show all</button>
    </div>

    </>
  )
}

export default WeekCard