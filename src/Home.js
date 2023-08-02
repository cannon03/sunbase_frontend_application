import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import AppNavBar from "./AppNavBar";



const Home = () => {
    return (
        <div>
            <AppNavBar/>
            <Container fluid>
                <Button className="border-4 hover:bg-orange-400 p-2 m-4" color="link"><Link to="/crud">Go to panel</Link></Button>
            </Container>
            <Container>
                <Button className="border-4 hover:bg-orange-400 p-2 m-4" color="link"><Link to="/add">Add User</Link></Button>

            </Container>
        </div>
    );
}

export default Home;