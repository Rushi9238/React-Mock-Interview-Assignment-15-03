import React from 'react'
import { card1 } from '../CommonFiles/Card'
import '../CSS_files/Section4.css'

import Section4Card from './Section4Card'
const Section4 = () => {
  return (
    
    <>
    <div className='section4'>
        <h1>Starting in the next 6 hours</h1>
        <div className="section4-scroll">

        {
          card1.map((e)=>{
            console.log(e);
           return(
            <Section4Card
            img1={e.img}
            star={e.star}
            view={e.view}
        country={e.country}
        containe={e.containe}
        price={e.price}
        Stime={e.Stime}
             Etime={e.Etime}
            />
           )
          })
        }




            {/* <Section4Card
             img1={imgs16}
             star={"4.3"}
             view={'2,736'}
             country={"Germany"}
             containe={'No Spain no Game The Fabulous Game'}
             price={236}
             Stime={"11.00 am"}
             Etime={"1.00 pm"}
            />
            <Section4Card
            img1={imgs12}
            star={"4.3"}
            view={'2,736'}
            country={"U.K"}
            containe={'No Spain no Game The Fabulous Game'}
            price={93}
            Stime={"2.00 pm"}
            Etime={"4.00 pm"}
            />
            <Section4Card
            img1={imgs13}
            star={"4.3"}
            view={'2,736'}
            country={"France"}
            containe={'No Spain no Game The Fabulous Game'}
            price={367}
            Stime={"2.00 pm"}
            Etime={"4.00 pm"}
            />
            <Section4Card 
             img1={imgs14}
             star={"4.3"}
             view={'2,736'}
             country={"Maxico"}
             containe={'No Spain no Game The Fabulous Game'}
             price={823}
             Stime={"2.00 pm"}
             Etime={"4.00 pm"}
            />
            <Section4Card
            img1={imgs15}
            star={"4.3"}
            view={'2,736'}
            country={"France"}
            containe={'No Spain no Game The Fabulous Game'}
            price={367}
            Stime={"2.00 pm"}
             Etime={"4.00 pm"}
            />
            <Section4Card
             img1={imgs4}
             star={"4.3"}
             view={'2,736'}
             country={"South Corea"}
             containe={'No Spain no Game The Fabulous Game'}
             price={103}
             Stime={"2.00 pm"}
             Etime={"4.00 pm"}
            /> */}
        </div>
    </div>
    
    </>
  )
}

export default Section4