import React, { useState,useRef,useEffect} from 'react';
import $ from 'jquery'
import data from './Data'
import {useParams,BrowserRouter as router,Route ,Router,Routes, Link} from 'react-router-dom'
import NavBarDetails from './NavBarDetails';
import "./Details.css"
import CardsD from './CardsD';





function Details(props) {
  let params = useParams();
  console.log(params.id -1)
  let Id = params.id -1
  let Getdata = data.cardData[Id]
 // let getData = data.cardData[{Id}]

  let iframe =         <iframe width="950" height="540" src={Getdata.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>





let date = ['1','4','4','7']
 
let [click,setClick] = useState(true);
let  [Switch,SetSwitch] = useState(true)
const handleClick = ()=>   setClick(!click );
const SwitchAll = ()=> SetSwitch(!Switch)



let [counter,SetCounter] = useState(0)
const AddCounter = ()=> SetCounter(counter+1 )
let inputRef = useRef()
/* if input has value button change color
let [addClass,setAddClass] =useState(true)
let handleAddClass= ()=>(setAddClass(!addClass))
*/


useEffect(() => {
  //input comment
$('.comment-input').on('focusin',function(){
    $('.comment-imoji-btn-app').css('opacity','1')
  

})

$('.comment-input').on('focusout',function(){
  if($('.comment-input').val() >= '1'){
    $('.comment-imoji-btn-app').css('opacity','1')
  }
    else  $('.comment-imoji-btn-app').css('opacity','0')
})

/*$('.comment-input').on('change',function(){
  
  if ($('.comment-input').length > 0) {
  document.body.style.background ='red'
}
else if($('.comment-input').length <= 0) {
  document.body.style.background ='black'
}

})*/
//input comment

//btn comment add class
$('.input').on('keyup change',function(){

  if($(this).val()>= '1'){
    $('.btn-comment').addClass('active')

  }
  else{
    $('.btn-comment').removeClass('active')

  }
})
//btn comment add class

/**
 <div class='comment-row'>
    <div class='sm-img-app'>
    <img src='https://i.pinimg.com/originals/25/52/7e/25527eb70c75b5b0270e722ec69b5e06.jpg' />
    </div>
    <div class='content'>
        <div class='name-second'>
          <p>${'alaa edin'}</p>
          <p>${'second'}</p>
        </div>

        <div class='me-comment'>
        <p>${$('.input').val()}</p>
        </div>

        <div class='icons'>
        <p><i class="fas fa-thumbs-up"></i></p>
        <p><i class="fas fa-thumbs-down"></i></p>
        <p>${'reply'}</p>


        </div>


    </div>
    
    
    
    </div>
 */



$('.btn-comment').on('click',function(){
  if($('.input').val() !=''){
   
    $('.all-comments').prepend(`<div class='comment-row'>
    <div class='sm-img-app'>
    <img src='https://i.pinimg.com/originals/25/52/7e/25527eb70c75b5b0270e722ec69b5e06.jpg' />

    </div>


    
        <div class='content'>
        

        <div class='name-second'>
        <p>${'alaa edin'}</p>
        <p>${'second'}</p>

        </div>
       

        <div class='me-comment'>
        <p>${$('.input').val()}</p>
        <div><i class="fas fa-ellipsis-v fa-2x"></i></div>
        </div>

        <div class='icons'>
        <i class="far fa-thumbs-up"></i>
        <i class="far fa-thumbs-down"></i>
        <p>${'reply'}</p>


        </div>


    </div>

    

    </div>`)
   
  }
})

  //btn cancel
  $('.btn-cancel').on('click',function(){
    $('.input').val('')
    $('.details .video-app .big-video .comment .our-comment .comment-input .comment-imoji-btn-app').css('opacity','0')
  })
}, []);








  return (
    
    <div className='details'>
      <NavBarDetails />
      

        <div className='video-app' >
          <div className='big-video'>
            {iframe}
          <div className='col-sm-12 d-flex justify-content-between'>
            <div className='content'>
                <p>{Getdata.title}</p>
                <p> <span>{Getdata.views}</span><strong></strong><span>{Getdata.detailsDate}</span></p>{/*{Getdata.date.replace(/[^0-9\s]/gi, 'g') */}
            </div>
           <hr></hr>
           
            <div className='icons'>
            <p><i class="far fa-thumbs-up"></i><span>{Getdata.jame}</span></p>
            <p><i class="far fa-thumbs-down" ></i><span>deslike</span></p>
            <p><i class="fas fa-share"></i><span>share</span></p>
            <p><i class="fas fa-cut"></i><span>clip</span></p>
            <p><i class="fas fa-bars"></i><span>save</span></p>
            <p><i class="fas fa-ellipsis-h"></i></p>
            
            </div>
    



       
          </div>
          {/*
              <div className='sm-video-app'>
     
     <CardsDetails onClick={()=>Id = props.id} />
     </div>

          */}





          <div className='channel-app'>
             <hr></hr>
             <div className='info-app'>
             <div className='sm-img-app'>
                <img src={Getdata.smImg} />
                </div>
                
                <div className='box'>
                  <p>{Getdata.channel} <i class="fas fa-check-circle"></i> </p>
                <p>{Getdata.subscribe}</p>

               <p className='show-more' onClick={handleClick} >{click ==true? 'show more' :'show less'}</p> 

                </div>
          <div>

          </div>
              
            
              
                <div className='button-app'>
                 <a href={'/'}><button>subscribe</button></a> 
                </div>

                </div>

             

         
             <hr></hr>
      

   
           </div>

            <div className="comment">
              <div className='number-comment'>
                <p>{document.getElementsByClassName('comment-row').length} comments</p>
                <div className='sort-by'>
          
               <i class="fas fa-bars fa-2x"> 
                </i>
                <p>sort by</p>
             
                </div>


              </div>

              <div className='our-comment'>
              <div className='comment-img'>
                <img className='youtube' src='https://i.pinimg.com/originals/25/52/7e/25527eb70c75b5b0270e722ec69b5e06.jpg' />

                </div>
                <div  className='comment-input'>
                 
                <input  ref={inputRef}  className='input'  type={'text'} placeholder={'add a comment...'} />
  
               
                  <div  className='comment-imoji-btn-app'>
                  <div className='comment-imoji'><i class="fas fa-grin-beam "></i></div>
                  <div className='comment-btn'>
                    <button className='btn-cancel'>cancel</button>
                    <button onClick={AddCounter} className='btn-comment' >comment</button>
                    </div>
                </div>


                </div>


            

               </div>
                <div className='all-comments'></div>
            </div>
          
           
         </div>




         
        
        
        

           
            
      {/*<Cards onClick={()=>Id =props.id}/>*/}
      <div className='sm-video'>

      <CardsD onClick={()=>Id =props.id}/>
          
          </div>
        </div>



     

    


      


    </div>
    
            )

  }

export default Details









{


  /**
   * 

      <div className='info-app'>
             <div className='sm-img-app'>
                <img src={Getdata.smImg} />
                </div>
                <div className='box'>
                <p>{Getdata.channel} <i class="fas fa-check-circle"></i> </p>
                <p>{Getdata.subscribe}</p>
                </div>
                </div>

   * 
   */
}