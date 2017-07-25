import React from "react";
import {Link} from "react-router-dom";
import {HashLink} from 'react-router-hash-link';
import {Navbar, NavItem, Nav} from "react-bootstrap";

// import NavComp from "../components/navComp.js";
class NavbarBigHorn extends React.Component {
    render() {

        return (
            <Navbar collapseOnSelect fluid className="nav-custom">
                <Navbar.Header>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse >
                    <Nav pullRight>
                        <NavItem>
                            <HashLink to="/#now-playing">
                                <li>Now Playing</li>
                            </HashLink>
                        </NavItem>
                        <NavItem>
                            <HashLink to="/#schedule">
                                <li>Schedule</li>
                            </HashLink>
                        </NavItem>
                        <NavItem>
                            <HashLink to="/#pricing">
                                <li>Prices</li>
                            </HashLink>
                        </NavItem>
                        <NavItem>
                            <HashLink to="/#contact">
                                <li>Contact</li>
                            </HashLink>
                        </NavItem>
                        <NavItem
                            role="link"
                            target="_blank"
                            onClick
                            ={() => {
                            window.open('https://45018.formovietickets.com:2235/', '_blank');
                        }}>
                            <li>Buy Tickets</li>

                        </NavItem>
                        <NavItem
                            role="link"
                            target="_blank"
                            onClick
                            ={() => {
                            window.open('https://45018.formovietickets.com:2235/app/rtsweb/gift', '_blank');
                        }}>
                            <li>Gift Certificates </li>

                        </NavItem>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        );
    }
}

export default NavbarBigHorn;