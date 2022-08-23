import React from 'react'
import {Link} from 'react-router-dom'
import './Details.css'
function Card(props) {
  return (
    <div className='card' >
              <Link className='link' to={props.link} style={{textDecoration:'none'}}>
        <div className='collps'>
        <div className='img-app'>
            <img src={props.bigImg} />
            <span>{props.time}</span>
        </div>

        </div>
       <div className='collaps-two'>
        <div className='sm-img-h2-app-three-points'>

            <div className='sm-img-app'>
                <img src={props.smImg} />

            </div>
            <div className='h2-app'>
                <h2>{props.title > 30 ? props.title.slice(0, 10)+'...' : props.title}</h2>
           
                <div className='p-app'>
            <p>{props.channel}  <i class={"fas fa-check-circle"}></i></p>
            <p> <span>{props.views}</span><span>{props.date}</span></p>
            </div>
            </div>

            <div className='tree-points-app'>
                <i class="fas fa-ellipsis-v"></i>
            </div>

          
        </div>
        </div>
  </Link>
    </div>
   
  )
}

export default Card