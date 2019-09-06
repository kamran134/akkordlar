import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Menu.scss';

const Menu = () => {
    return (
        <div className="navbar-menu">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Akkordlar</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/">Ana səhifə</Link>
                        <Link className="nav-link" to="/about">Haqqımızda</Link>
                    {/* <Nav.Link href="/about">Haqqımızda</Nav.Link> */}
                    <NavDropdown title="Sayta giriş" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/login">Daxil ol</NavDropdown.Item>
                        <NavDropdown.Item href="/registration">Qeydiyyatdan keç</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
};

export default Menu;