import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';

import '../CSS_files/Section4Card.css'
const Section4Card = ({img1,star,view,country,containe,price,Stime,Etime}) => {
  return (
    <>
    <div className='card2'>
        <div className="img-div">
          <img src={img1} alt="" />
        </div>
        <div className="right-side">
          <p style={{textAlign:'end',marginRight:'1rem',marginTop:'.5rem'}}><FavoriteBorderIcon /></p>
         
         <p style={{display:'flex',alignItems:'center'}}>
           <span> <StarIcon style={{width:'15px'}}/></span>{star}<span> ({view}) . {country}</span>
          </p>
          <h4>"{containe}"</h4>
          <h3><span>From ${price}</span> /person</h3>
          <div className="time">
            <span>{Stime}</span> <span>{Etime}</span> 
          </div>
         </div>
        
    </div>
    </>
  )
}

export default Section4Card