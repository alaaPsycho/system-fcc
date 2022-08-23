import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import $ from 'jquery';

function NavBar() {

 


        React.useEffect(() => {
        $('i').on('click',function(){
            $('.nav-bar-2  .nav-bar-2-app .box').toggleClass('active')
        })

    
            })
  return (
      <>
    <div className='nav-bar'>
        <div className='navBar-container'>

            <div className='logo-app'>
                <i className='fas fa-bars '/>

                <div className='logo-img-app' title='youtube home'>
                 <Link to={'/'}><img className='youtube' src='https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg' /></Link>   
                </div>
            </div>

            <div className='input-micro-app'>
                <div className='input-app'>
                <input placeholder='search' type={'search'} />
                <button className='fas fa-search 'title='search'></button>
                </div>
               
                <div className='micro-app' title='search with voice'>
                <i className="fas fa-microphone"></i>
                </div>
            </div>


            <div className='icons-app'>
            <i className="fas fa-video" title='create'></i>
            <i className="fas fa-list " title='youtube apps'></i>
            <i className="far fa-bell" title='notifications'></i>
           
                    <img className='youtube' src='https://i.pinimg.com/originals/25/52/7e/25527eb70c75b5b0270e722ec69b5e06.jpg' />
               
            </div>

        </div>

     

    </div>

    <div className='nav-bar-2'>

            <div className='nav-bar-2-app' >

                <div className='box'>
                <i class="fas fa-home fa-2x"></i>
                    <span>home</span>
                </div>

                <div className='box'>
                <i class="fas fa-compass fa-2x"></i>
                    <span>explort</span>
                </div>
                <div className='box'>
                <i className="fas fa-bolt"></i>
                    <span>shorts</span>
                </div>
                <div className='box'>
                <i className="fas fa-compact-disc"></i> 
                    <span>shorts</span>
                </div>
                
            </div>

        </div>


    <div className='nav-bar-buttons-app'>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

      <button className='nav-buttons'>all</button>
      <button className='nav-buttons'>watched</button>
      <button className='nav-buttons'>recently uploded</button>
      <button className='nav-buttons'>history</button>
      <button className='nav-buttons'>courses</button>
      <button className='nav-buttons'>anime</button>
      <button className='nav-buttons'>piano</button>
      <button className='nav-buttons'>one piece</button>
      <button className='nav-buttons'>acoustic guitar</button>
      <button className='nav-buttons'>digital piano</button>
      <button className='nav-buttons'>mixes</button>
      <button className='nav-buttons'>alan walker</button>
      <button className='nav-buttons'>dance pop</button>
      <button className='nav-buttons'>gaming</button>
      <button className='nav-buttons'>musical keyboard</button>
      <button className='nav-buttons'>ouds</button>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
    </div>
   
  </div>

  
</div>

    </div>

    </>
  )
}

export default NavBar