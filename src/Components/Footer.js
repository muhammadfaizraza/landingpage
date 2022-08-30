import React from 'react'
import card from '../Images/cardimg.png'
import '../Styles/Footer.css'


export default function Footer() {
  return (

    <div className='Footermain'>

      <div className='container'>

        <div className='row'>

          <div className='col-sm-6 col-md-6 col-lg-6'> <h5>
Copyright © 2021. All Rights Reserved By <span style ={{color : 'yellow'}}> Movflx </span>
</h5>
</div>

<div className='col-sm-6 col-md-6 col-lg-6' >
<img src ={card}></img>
</div>

</div>
    </div>
    </div>
  
  )
}
