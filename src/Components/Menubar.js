import React  from 'react'
import "../Styles/Menubar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Fragment } from "react"
import Logo from '../Images/logo193.png'
import { BiSearch  } from "react-icons/bi";
import { TbWorldLongitude } from "react-icons/tb";


export default function Menubar() {
  return (
    <Fragment>   
       <div className='menumain '>

       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed = 'top' className = 'main'>
       <Container>      
        <Navbar.Brand href="#home">

<img src={Logo} className= 'logo'></img>

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto  ">
           
          <Nav.Link className="links" href="#pricing">Home</Nav.Link>
            

           
         
            <NavDropdown title="TV Show" id="collasible-nav-dropdown " className="links">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
         

            <NavDropdown title="Movie" id="collasible-nav-dropdown" className="links">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing" className="links">Pricing</Nav.Link>
            <Nav.Link href="#Blog" className="links">Blog</Nav.Link>
            <Nav.Link href="#Contacts" className="links">Contacts</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="#deets"><BiSearch className='searchicon'/> | </Nav.Link>

            <Nav.Link eventKey={2} href="#memes">
              
             <TbWorldLongitude className='worldicon'/>
             
            </Nav.Link>
            <select className='langopt bg-dark'>
  <option >En</option>
  <option >Au</option>
  <option >Ar</option>
  <option >Tu</option>
</select>

<button className='siginButton' >Sign In</button>
          </Nav>
        </Navbar.Collapse>
        </Container>   
    </Navbar>
   

    </div>
    </Fragment>

  )
}
