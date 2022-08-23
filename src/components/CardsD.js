import React from 'react'
import Card from './Card'
import data from './Data'


function CardsD() {
  return (
 
    <div className='cards-d'>

{data.cardData.map((item,inedex)=>{
                  return(
                      
                    <Card key={inedex} bigImg={item.bigImg} time={item.time} smImg={item.smImg} title={item.title} channel={item.channel} views={item.views} date={item.date} link={`/Details/${item.id}`}/>
                   
                
                
                  )
                  
                })}
  


          
      
    </div>
  )
}

export default CardsD
