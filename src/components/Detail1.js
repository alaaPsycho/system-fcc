import React from 'react';
import data from './Data'
import {useParams} from 'react-router-dom'


function Details(props) {

  let {Id  } = useParams();
  let id = {Id}
  console.log(props.match.params.id)
  let getData = data.cardData[Number(Id)  -1]


  console.log(Number('10') )


  return (
    <div>
{/*
    <iframe width="560" height="315"
     src={video}
      title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen></iframe>*/}
<video width="320" height="240" autoplay>
  <source src={getData.video} type="video/mp4"/>
Your browser does not support the video tag.
</video>

        </div>
            )

  }

export default Details


