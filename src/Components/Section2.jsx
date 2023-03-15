import React from 'react'
import '../CSS_files/Section2.css'
import WeekCard from './WeekCard'
import banner1 from '../Images/banner1.png'
import banner2 from '../Images/banner2.png'
import banner3 from '../Images/banner3.png'
const Section2 = () => {
  return (
    <>
      <div className='section02'>
        <h1>New this Week</h1>
        <div className="Week-card">
          <WeekCard img1={banner1}

            h2={"Most popular around the world"}
          />
          <WeekCard img1={banner2}
            h2={'Great for team building'}
          />
          <WeekCard img1={banner3}
            h2={"Fun for the family"}
          />


        </div>
        <div className="horizotalScroll">
          <p>Dates</p>
          <p>Group Size</p>
          <p>More Filter</p>
          <div className="scroll">
            <p>Banking</p>
            <p>Great for groups</p>
            <p>Family-friendlly</p>
            <p>Animal</p>
            <p>Art-Writing</p>
            <p>Banking</p>
            <p>Cooking</p>
            <p>Dance</p>
            <p>Drink</p>
            <p>Fitness</p>
            <p>Cooking</p>
            <p>Magic</p>
            <p>Music</p>
            <p>Dance</p>

            </div>
        </div>

      </div>
    </>
  )
}

export default Section2