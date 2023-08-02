import React,{useState} from "react"
import {Collapse,Nav,Navbar,NavbarBrand,NavbarToggler,NavItem,NavLink} from "reactstrap";
import {Link} from "react-router-dom";

const AppNavBar=()=>{
    const[isNav,setIsNav]=useState(false)
    return(
        <Navbar color="dark" dark expand="md" className="bg-orange-100">
            <NavbarBrand className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600" tag={Link} to="/home">Home</NavbarBrand>
            <NavbarToggler onClick={() => { setIsNav(!isNav) }}/>
            <Collapse isOpen={isNav} navbar>
                <Nav className="justify-content-end" style={{width: "100%"}} navbar>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default AppNavBar;