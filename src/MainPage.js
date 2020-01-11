import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

class MainPage extends React.Component{
    constructor(props){
      super(props)
      this.state = {}
    }

    render(){          
        return(
          <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria- controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>About</Nav.Link>
                <Nav.Link>Team</Nav.Link>
                <Nav.Link>Contact</Nav.Link>
                <Nav.Link href="/posts">Posts</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Navbar>
          </div>
            
        )
    }
}

export default MainPage;