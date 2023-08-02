import React,{useEffect,useState} from "react";
import{Button,ButtonGroup,Container,Table} from "reactstrap";
import AppNavBar from './AppNavBar'
import {Link, useNavigate} from "react-router-dom";


const UserList=()=> {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(
        () => {
            setLoading(true);

            fetch("http://localhost:8080/api/auth");

            fetch("http://localhost:8080/api/getStream")
                .then(response => response.json())
                .then(data => {
                    setUsers(data);
                    setLoading(false);
                })
        }, []);
    const remove = async (id) => {
        await fetch(`http://localhost:8080/api/delete?uuid=`+id, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedUser = [...users].filter(i => i.uuid !== id);
            setUsers(updatedUser);
        });
    }

    if(loading){
        return <h1>Loading</h1>
    }
    const userList=users.map(
        u=>{
            return( <tr key={u.uuid} className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                <td className="whitespace-nowrap px-6 py-4 font-medium">{u.first_name}</td>
                <td className="whitespace-nowrap px-6 py-4 font-medium">{u.last_name}</td>
                <td className="whitespace-nowrap px-6 py-4 font-medium">{u.address}</td>
                <td className="whitespace-nowrap px-6 py-4 font-medium">{u.city}</td>
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                    <ButtonGroup>
                        <Button className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
                                    tag={Link} to={"/edit?uuid="+u.uuid}>Edit</Button>
                    </ButtonGroup>
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                    <ButtonGroup>
                        <Button className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
                                size="sm" color="danger" onClick={()=>remove(u.uuid)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>)
        })

    return (
        <div>
            <AppNavBar/>
            <Container fluid>
                <h3>CRUD application</h3>
                <div className="overflow-hidden dark:dark bg-gray-800 text-white    ">
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:mx-6 lg:mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-6">
                            <div className="overflow-hidden">
                                <Table className="min-w-full text-left text-sm font-light">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Name</th>
                                        <th scope="col" className="px-6 py-4">Last Name</th>
                                        <th scope="col" className="px-6 py-4">Address</th>
                                        <th scope="col" className="px-6 py-4">City</th>
                                        <th scope="col" className="px-6 py-4">Edit</th>
                                        <th scope="col" className="px-6 py-4">Delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {userList}
                                    </tbody>
                                </Table>

                            </div>

                        </div>

                    </div>

                </div>
                </div>
            </Container>
        </div>
    );


}




export default UserList;