import React,{useState,useEffect, useRef} from 'react'
import './NavBarDetails.css'
import './NavBar.css'
import $, { data } from 'jquery';
import { Link } from 'react-router-dom';
import SearchContext from './SearchContext';
function NavBarDetails() {
let [url,setUrl] = useState('hhhhhh');
let [search,setSearch] = useState()




let toggle =()=> setUrl(()=>'read')
        React.useEffect(() => {
        $('i').on('click',function(){
            $('.nav-bar-2  .nav-bar-2-app .box').toggleClass('active')
        })

            })
  return (
      <>
    <div className='nav-bar-details'>
    <div className='nav-bar'>
        <div className='navBar-container'>

            <div className='logo-app'>
                <i className='fas fa-bars '/>

                <div className='logo-img-app' title='youtube home'>
                 <Link  to={'/'}> <img className='youtube' src='https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg' /></Link>   
                </div>
            </div>

            <div className='input-micro-app'>
                <div className='input-app'>
                <input onChange={(e)=> setSearch(e.target.value)} id='inp' className='inp'  placeholder='search' type={'search'} />
             
                <Link to={`/search/${search}`}  >{/*{pathname:`/search/`  ,data:search} */}
              <button  className='fas fa-search 'title='search'></button> 
              </Link>
              
            
                </div>
               
                <div className='micro-app' title='search with voice'>
                <i class="fas fa-microphone"></i>
                </div>
            </div>


            <div className='icons-app'>
            <i class="fas fa-video" title='create'></i>
            <i class="fas fa-list " title='youtube apps'></i>
            <i class="far fa-bell" title='notifications'></i>
           
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
                <i class="fas fa-bolt"></i>
                    <span>shorts</span>
                </div>
                <div className='box'>
                <i class="fas fa-compact-disc"></i> 
                    <span>shorts</span>
                </div>
                
            </div>

        </div>

    </div>

    </>
  )
}

export default NavBarDetails