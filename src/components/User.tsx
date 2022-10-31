import React from "react"

interface IProps {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    },
  phone: string,
  website: string
}

const User: React.FC<IProps> = ({name,username,email,address,phone,website}) => {
    return (
      <>
      <div className="user">
        <div className="user--name">
            <h1>{name}</h1>
            <h2>{username}</h2>
        </div>
        <div className="user--other">
            <h2>{phone}</h2>
            <h3>{website}</h3>
            <span>{email}</span>
            <h2>Address</h2>
            <span>{address.city} </span>
            <span>{address.street} </span>
            <span>{address.suite} </span>
            <span>{address.zipcode}</span>
        </div>
      </div>
      <hr/>
      </>
    )
}

export default User