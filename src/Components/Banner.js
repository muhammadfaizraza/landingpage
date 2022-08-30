import React from 'react'
import '../Styles/Banner.css'
import {Fragment} from 'react'
import { AiFillCalendar ,AiOutlineFieldTime,AiFillPlayCircle }  from "react-icons/ai";

export default function Banner() {
  return (
    <Fragment>
    <div className='banner'>Banner

<div className='bannerdata'>
<h3>Movflx</h3>

    
    <h1 className='bannerh'>
       Unlimited <span className='movie'> Movie,</span> TVs</h1>
 <h1 className='bannerhead'>    Shows, & More.
       
    </h1>

<div className='bannflex'>
<button className='pgbtn'>PG 18</button>

<button className='HdBTN'>HD</button> <h6>Romance , Drama <span style = {{color:'yellow',fontSize:'18'  ,margin : '10px'}}> <AiFillCalendar/></span> 2021  <span style = {{color:'yellow' ,fontSize:'18px' ,margin : '10px' }}>  <AiOutlineFieldTime/></span> 128min</h6>
<br/>


</div>


<div><button className='btn playnow'>  <AiFillPlayCircle style ={{fontSize :'22px'}}/> Watch Now</button>

</div>
</div>
 


    






    </div>


 
    </Fragment>
 
  )
}
