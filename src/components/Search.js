import React,{useContext} from 'react'
import {useParams,Link} from 'react-router-dom'
import Data from './Data'


function Search(props) {
  const {type} = useParams()
  
//document.body.innerHTML= Data.cardData[i].time:'f'


let i;
  for( i= 0;i <= Data.cardData.length -1;i++){
    let fullData = Data.cardData[i].title.match(type)
  if(  fullData) {
   return ( 
   <iframe width="950" height="540" src={Data.cardData[i].video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
   
   )
  
  }else console.log('f')

}

  return (
    <div>
    

    

    </div>
  )
}

export default Search
































/**
  {
    Data.cardData.map((item,index)=> item.title.includes({type}) ?
    <p>{'item.views'}</p>:
    <p>{'undefined'}</p>
    )
    }
 */







  /*
  
  for(let i= 0;i <= Data.cardData.length -1;i++){
    console.log(Data.cardData[i].title)
}*/



   /*
     
    console.log(Data.cardData.find((item) => item.time.includes(type)))
    ?'true':'false'
  */






   /*
   
     {
      Data.cardData.forEach((item)=> 
      item.title.match(type) ?  "item.jame":"undefined"
      //console.log(  item.title.match(type) ?  "item.jame":"undefined")
        //console.log(item.title.match(type))
             )
      }
   */ 




/*
       Data.cardData[0].forEach((item)=> 
       item.title.match(type) ?  "item.jame":"undefined")
 */






