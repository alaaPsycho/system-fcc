import React,{useContext} from 'react'
import {useParams} from 'react-router-dom'
import Data from './Data'


function Search(props) {
  const {type} = useParams()
  

  return (
    <div>
    <h1>Search {type}</h1>
    {Data.cardData[0,1,2,3,4,5,6,7,8,9,10,11,12].views}
    </div>
  )
}

export default Search