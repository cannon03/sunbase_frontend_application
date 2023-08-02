import React, { useEffect, useState } from 'react';
import {Link, useNavigate, useParams, useSearchParams} from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavBar from "./AppNavBar";


const UserEdit=()=>{

    const FState={
        last_name:'',
        address:'none',
        first_name:'',
        street :'none',
        city:'none',
        state:'none',
        email:'none',
        phone:'none',

    };
    const[user,setUser]=useState(FState);
    const navigate=useNavigate();
    const{id} =useParams();



    const [query]=useSearchParams();
    const uuid=query.get("uuid");

    const handleChange = (event) => {
        const {name, value} = event.target



        setUser({...user, [name]: value})
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(user);
        await fetch(`http://localhost:8080/api/edit?uuid=`+uuid, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        setUser(FState);
        navigate('/crud');
    }



    return(
        <div>
            <AppNavBar/>
            <Container>
                <Form  className="items-end max-w-3xl">
                    <FormGroup>
                        <Label for="first_name">Name</Label>
                        <Input type="text" className="w-full h-8 px-2 text-sm text-gray-700 placeholder-gray-600 border-2 rounded-lg focus:shadow-outline" onChange={handleChange} name="first_name" id="first_name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="last_name">Last Name</Label>
                        <Input type="text" className="w-full h-8 px-2 text-sm text-gray-700 placeholder-gray-600 border-2 rounded-lg focus:shadow-outline" onChange={handleChange} name="last_name" id="last_name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="street">Street</Label>
                        <Input type="text" className="w-full h-8 px-2 text-sm text-gray-700 placeholder-gray-600 border-2 rounded-lg focus:shadow-outline" onChange={handleChange} name="street" id="street"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="City">City</Label>
                        <Input type="text" className="w-full h-8 px-2 text-sm text-gray-700 placeholder-gray-600 border-2 rounded-lg focus:shadow-outline" onChange={handleChange} name="city" id="city"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="address">Address</Label>
                        <Input type="text" className="w-full h-12 px-4 mb-2 text-lg text-gray-700 placeholder-gray-600 border-2 rounded-lg focus:shadow-outline" onChange={handleChange} name="address" id="address"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="state">State</Label>
                        <Input type="text" className="w-full h-8 px-2 text-sm text-gray-700 placeholder-gray-600 border-2 rounded-lg focus:shadow-outline" onChange={handleChange} name="state" id="state"/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="e-mail">e-mail</Label>
                        <Input type="text" onChange={handleChange} name="e-mail" id="e-mail"/>
                    </FormGroup>

                    <FormGroup>
                        <Label for="phone">phone</Label>
                        <Input type="text" onChange={handleChange} name="phone" id="phone"/>
                    </FormGroup>

                    <FormGroup>
                        <Button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" type="submit" onClick={handleSubmit}>Save</Button>{' '}
                        <Button tag={Link} to="/home" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    )
};

export default UserEdit;