import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

import Container from "react-bootstrap/Container";

import Home from "../pages/Home"
import Contact from "../pages/Contact"
import GameDetails from "../pages/GameDetails"

function Layout() {
    return (
        <Router>
            <Navbar bg="dark" variant="dark" expand="lg">
                <NavLink to="/" exact className="heading">
                    <Navbar.Brand>THE GAMING LIST</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-container">
                        <NavLink to="/" exact className="nav-link">
                            Home
                        </NavLink>
                        <NavLink to="/contact" className="nav-link">
                            Contact
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" exact component={Contact} />
                    <Route path="/game/:id" exact component={GameDetails} />
                </Switch>
            </Container>
        </Router>
    );
}

export default Layout;
