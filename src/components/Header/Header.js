import React, { useContext } from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/home">Event Job</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Button href="/admin" className="m-1" variant="danger">Admin</Button>
                <Button href="/login" className="m-1" variant="success">Register</Button>
                <Nav.Link href="/user">{loggedInUser.email? loggedInUser.name :"User"}</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    );
};

export default Header;