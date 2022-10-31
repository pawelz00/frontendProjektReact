import * as React from 'react';
import { useQuery } from 'react-query';
import Navbar from './Navbar';
import User from './User'


const Users: React.FC = () => {

    const fetchUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        return response.json();
    }

    const {data, status} = useQuery("users", fetchUsers);

    if(status === "loading"){
        return <div>Loading...</div>
    }

    return (
    <>
        <Navbar/>
        <div className="users">
            {data.map((user: any) => (
                <User 
                    name={user.name} 
                    id={user.id} 
                    username={user.username} 
                    email={user.email} 
                    address={user.address}
                    phone={user.phone} 
                    website={user.website}/>
            ))}
        </div>
    </>
    )
}

export default Users;