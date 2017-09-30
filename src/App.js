import React, {Component} from 'react';
// import logo from './logo.svg';
import Slider_1 from './slider1.jpg';
import Slider_2 from './slider2.jpg';
import Slider_3 from './slider3.jpg';
import './App.css';
import {
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    Carousel
} from 'react-bootstrap';

const headerStyles = {margin: '0px'};

class App extends Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div className="App">
                <header>
                    <Navbar fluid fixedTop inverse collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#">My-React-16</a>
                            </Navbar.Brand>
                            <Navbar.Toggle/>
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <NavItem eventKey={1} href="#">Home</NavItem>
                                <NavItem eventKey={2} href="#">Download</NavItem>
                                <NavItem eventKey={3} href="#">About</NavItem>
                                <NavDropdown eventKey={4} title="Other" id="basic-nav-dropdown">
                                    <MenuItem eventKey={4.1}>Action 1</MenuItem>
                                    <MenuItem eventKey={4.2}>Action 2</MenuItem>
                                    <MenuItem eventKey={4.3}>Action 3</MenuItem>
                                </NavDropdown>
                            </Nav>
                            <Nav pullRight>
                                <NavItem eventKey={1} href="#">Login</NavItem>
                                <NavItem eventKey={2} href="#">Register</NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
                <div style={headerStyles}>
                    <Carousel>
                        <Carousel.Item>
                            <img src={Slider_1} className="Slider_1" alt="Slider_1"/>
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Slider_2} className="Slider_2" alt="Slider_2"/>
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Slider_3} className="Slider_3" alt="Slider_3"/>
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        );
    }
}

export default App;
