import React from 'react'
import '../Styles/services.css'
import image from '../Images/services.jpg'
import { IoMdRadio } from "react-icons/io";
import {  BsFillCameraReelsFill} from "react-icons/bs";

import Gallerybottom from './Gallerybottom';
export default function Services() {
  return (


  <div>
<section class="services-area services-bg" >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="services-img-wrap">
                                <img src={image} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="services-content-wrap">
                                <div className="section-title title-style-two mb-20">
                                    <span className="sub-title" style = {{color:'white'}}>Our Services</span>
                                    <h2 className="title">Download Your Shows Watch Offline.</h2>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of passages of lorem
                                Ipsum available, but the majority have suffered alteration in some injected humour.</p>
                                <div className="services-list">
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                 <IoMdRadio/> 
                                                                                            </div>
                                            <div class="content">
                                                <h5>Enjoy on Your TV.</h5>
                                                <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                            <BsFillCameraReelsFill/>
                                            </div>
                                            <div className="content">
                                                <h5>Watch Everywhere.</h5>
                                                <p>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                  
   
                </div>

            </section>
   <Gallerybottom/>
   </div>
  )
}
