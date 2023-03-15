import React from 'react'
import '../CSS_files/CostCard.css'
import StarIcon from '@mui/icons-material/Star';
const CostCard = ({img1,star,view,country,containe,price}) => {
  return (
    <>
    <div className='card'>
        <div className="imgs">
          <img src={img1} alt="" />
        </div>
        <div className="seller-containe">
          <p>
           <span> <StarIcon style={{width:'15px'}}/></span>{star} <span> ({view}) . {country}</span>
          </p>
          <h4>"{containe}"</h4>
          <h3><span>From ${price}</span> /person</h3>
        </div>
    </div>
    </>
  )
}

export default CostCard