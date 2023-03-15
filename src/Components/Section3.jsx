import React from 'react'
import '../CSS_files/Section3.css'
import CostCard from './CostCard'
import { card } from '../CommonFiles/Card'

const Section3 = () => {
  return (
    <>
    <div className='section3'>
      <h1>Top Seller</h1>
      <div className="section-scroll">


        {
          card.map((e)=>{
            console.log(e);
           return(
            <CostCard
            img1={e.img}
            star={e.star}
            view={e.view}
        country={e.country}
        containe={e.containe}
        price={e.price}
            />
           )
          })
        }

        {/* <CostCard
         img1={imgs1}
        star={"4.3"}
        view={'2,736'}
        country={"Poland"}
        containe={'Irish History, Culture & Craic - St Patricks Day Special'}
        price={423}
        />
         <CostCard
         img1={imgs3}
        star={"4.3"}
        view={'2,736'}
        country={"U.S"}
        containe={'No Spain no Game The Fabulous Game'}
        price={270}
        />
         <CostCard
         img1={imgs4}
        star={"4.3"}
        view={'2,736'}
        country={"India"}
        containe={'Solve the Mystery Escape Room, Team Building Game'}
        price={83}
        />
         <CostCard
         img1={imgs2}
        star={"4.3"}
        view={'2,736'}
        country={"South Africa"}
        containe={'Live Virtual Wildlife Safari in South Africa'}
        price={253}
        />
         <CostCard
         img1={imgs5}
        star={"4.3"}
        view={'2,736'}
        country={"Itly"}
        containe={'No Spain no Game The Fabulous Game'}
        price={423}
        />
         <CostCard
         img1={imgs6}
        star={"4.3"}
        view={'2,736'}
        country={"Germany"}
        containe={'No Spain no Game The Fabulous Game'}
        price={236}
        />
         <CostCard
         img1={imgs7}
        star={"4.3"}
        view={'2,736'}
        country={"South Corea"}
        containe={'No Spain no Game The Fabulous Game'}
        price={103}
        />
         <CostCard
         img1={imgs8}
        star={"4.3"}
        view={'2,736'}
        country={"U.K"}
        containe={'No Spain no Game The Fabulous Game'}
        price={93}
        />
         <CostCard
         img1={imgs9}
        star={"4.3"}
        view={'2,736'}
        country={"Australia"}
        containe={'No Spain no Game The Fabulous Game'}
        price={542}
        />
         <CostCard
         img1={imgs10}
        star={"4.3"}
        view={'2,736'}
        country={"France"}
        containe={'No Spain no Game The Fabulous Game'}
        price={367}
        />
         <CostCard
         img1={imgs11}
        star={"4.3"}
        view={'2,736'}
        country={"Canada"}
        containe={'No Spain no Game The Fabulous Game'}
        price={663}
        />
         <CostCard
         img1={imgs12}
        star={"4.3"}
        view={'2,736'}
        country={"Maxico"}
        containe={'No Spain no Game The Fabulous Game'}
        price={823}
        /> */}
       
      </div>
    </div>
    </>
  )
}

export default Section3