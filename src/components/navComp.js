import React from "react";
import {Navbar, NavItem, Nav} from "react-bootstrap";


    class NavComp extends React.Component{
    render(){

        let bigHornNav = this.props.links.map((item, index) => {
            return(
                 <NavItem eventKey={1} key={item.title} href={item.url}>{item.title}</NavItem>

         );
    });
        return(
           <Nav pullRight>
               {bigHornNav}
               </Nav>

        );
    }
}

export default NavComp;