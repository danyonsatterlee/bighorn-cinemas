import React from "react";

import {Navbar, NavItem, Nav} from "react-bootstrap";

import NavComp from "../components/navComp.js";
class NavbarBigHorn extends React.Component{
    render(){
   
    return(
        <Navbar  collapseOnSelect className="nav-custom navbar">
          <Navbar.Header>
            <Navbar.Brand>
      Big Horn Cinemas
      </Navbar.Brand>
           
          </Navbar.Header>
          <Navbar.Collapse>

            <Nav pullRight>
      <NavComp links={this.props.links}/>

             </Nav>
          </Navbar.Collapse>
        </Navbar>

    )
}
}

export default NavbarBigHorn;