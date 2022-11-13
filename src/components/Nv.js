import React from 'react'

function Nv() {
  return (
       <div className='details'>


  <div className='video-app' >
    <div className='big-video'>
      {iframe}
    <div className='col-sm-12 d-flex justify-content-between'>
      <div className='content'>
          <p>{Data.cardData[i].title}</p>
          <p> <span>{Data.cardData[i].views}</span><strong></strong><span>{Data.cardData[i].detailsDate}</span></p>
      </div>
     <hr></hr>
     
      <div className='icons'>
      <p><i class="far fa-thumbs-up"></i><span>{Data.cardData[i].jame}</span></p>
      <p><i class="far fa-thumbs-down" ></i><span>deslike</span></p>
      <p><i class="fas fa-share"></i><span>share</span></p>
      <p><i class="fas fa-cut"></i><span>clip</span></p>
      <p><i class="fas fa-bars"></i><span>save</span></p>
      <p><i class="fas fa-ellipsis-h"></i></p>
      
      </div>




 
    </div>






    <div className='channel-app'>
       <hr></hr>
       <div className='info-app'>
       <div className='sm-img-app'>
          <img src={Data.cardData[i].smImg} />
          </div>
          
          <div className='box'>
            <p>{Data.cardData[i].channel} <i class="fas fa-check-circle"></i> </p>
          <p>{Data.cardData[i].subscribe}</p>

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
   </div> 
    </div>
  )
}

export default Nv