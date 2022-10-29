import * as React from 'react';
import Navbar from './Navbar';
import User from './User'


const Users: React.FC = () => {
    return (
    <>
        <Navbar/>
        <div className="users">
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
            <User/>
        </div>
    </>
    )
}

export default Users;