import React from 'react'
import Card from './Card'
import data from './Data'
import  './Cards.css'
import  './Card.css'

function Cards() {
  return (
    <div className='cards'>
  <div className='container-fluid'>
                      <div className='row'>
{data.cardData.map((item,index)=>{
                  return(
                    <div className='col-3'>
                      
                    <Card key={index} bigImg={item.bigImg} time={item.time} smImg={item.smImg} title={item.title} channel={item.channel} views={item.views} date={item.date} link={`/Details/${item.id}`}/>
                   
                    </div>
                
                  )
                  
                })}
    </div>
                    </div> 


          
      
    </div>
  )
}

export default Cards



       {/* 
          {data.cardData.map((item,inedex)=>{
                  return(
                    <div className='container'>
                      <div className='row'>
                        <div className='col-4'>
                    <Card key={inedex} bigImg={item.bigImg} time={item.time} smImg={item.smImg} title={item.title} channel={item.channel} views={item.views} date={item.date}/>
                    </div>
                    </div>
                    </div> 
                  )
                  
                })}






              <div className='container-fliud'>
        <div className='row'>
          <div className='col-2'>
            <Card bigImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbp6ODC2eVjVMcdfoZlrumM20Koxnk78sdBtf0s43nfHMT0pPQZ_dS1annNNF2Yu1isuM&usqp=CAU'/>

          </div>
          <div className='col-2'>
            <Card bigImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbp6ODC2eVjVMcdfoZlrumM20Koxnk78sdBtf0s43nfHMT0pPQZ_dS1annNNF2Yu1isuM&usqp=CAU'/>
          </div>

          <div className='col-2'>
            <Card bigImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbp6ODC2eVjVMcdfoZlrumM20Koxnk78sdBtf0s43nfHMT0pPQZ_dS1annNNF2Yu1isuM&usqp=CAU'/>

          </div>
          <div className='col-2'>
            <Card bigImg='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbp6ODC2eVjVMcdfoZlrumM20Koxnk78sdBtf0s43nfHMT0pPQZ_dS1annNNF2Yu1isuM&usqp=CAU'/>
          </div>
        </div>
      </div>

*/}