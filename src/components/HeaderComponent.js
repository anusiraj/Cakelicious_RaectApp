import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Button} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/cakelogo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'>
                                    <span className="fa fa-home fa-lg"></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/cakes'><span className="fa fa-info fa-lg"></span> Cakes</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/about_us'><span className="fa fa-list fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contact'>
                                    <span className="fa fa-address-card fa-lg"></span> Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className = 'ml-auto' navbar>
                            <NavItem>
                                <Button className="button" outline onClick = {this.toggleModal}>
                                    <span className = "fa fa-sign-in fa-lg"></span> Login
                                </Button>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/cart'>
                                    <span className = "fa fa-shopping-cart fa-lg"></span> Cart
                                </NavLink>
                            </NavItem>
                       </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                
            </div>
        );
    }
}
export default Header;