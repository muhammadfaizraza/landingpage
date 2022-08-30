import React from 'react'
import '../Styles/Gallery.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from 'react-bootstrap/Card';
import {slider} from '../Data.js'
import { useState } from 'react';
import { BsStopwatchFill,BsFillHandThumbsUpFill } from "react-icons/bs";
import Services from './Services';



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1400 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1400, min: 800 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1
  }
};











export default function Gallery() {
const [data ,setdata] = useState(slider)

const filteritem = (Item)=>{
    
  const update = slider.filter((elem)=>{
  return elem.category === Item
  
  
  }) 
  setdata(update)
  }
  


  return (
    <div className='gallerymain'>
    
    <div className='galler2 '>

<div className='container gallerheader'>


<div className='galleryh'><h6>ONLINE STREAMING</h6>

<h2>ONLINE STREAMING</h2>
</div>
<div className='gallerybtn'> 
<button className ='btn mx-auto' onClick={()=>filteritem('movie') }>Movies</button>
<button className ='btn mx-auto' onClick={()=>filteritem('tvshows') }>Tv shows</button>
<button className ='btn mx-auto' onClick={()=>filteritem('anime') }>Anime</button>
</div>



</div> 
<div className='carddiv'>
<Carousel responsive={responsive}>
{
       data.map((elem)=>{
      
      let {id,source,heading ,category}=elem
      return (  
       
       

     <Card style={{ width: '20rem' , height:"40rem"}} key={id} className='container cards'>
      <Card.Img variant="top" src={source}  className='galleryimage'/>
<div className='d-flex justify-content-between'>
<div style={{color :'white' ,fontWeight: '700'}}>{heading} </div>
<div style={{color :'yellow'}}> 2021</div>

</div>
<div className='d-flex justify-content-between'>
<div><button  className ='HdBTN gbtn'>HD</button> </div>
<div style={{color :'white' ,margin :'10px'}}><BsStopwatchFill style={{color :'yellow'}}/>  128min  <BsFillHandThumbsUpFill style={{color :'yellow'}}/> 3.5</div>


</div>
 
 
    </Card>
        
    
)})        
}</Carousel>;

    </div>
   


    </div>
<Services/>
    </div>



)
}
