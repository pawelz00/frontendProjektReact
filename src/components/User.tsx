import React from "react"

const User = () => {
    const user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
        }
    }
    return (
      <>
      <div className="user">
        <div className="user--name">
            <h1>{user.name}</h1>
            <h2>{user.username}</h2>
        </div>
        <div className="user--other">
            <h2>{user.phone}</h2>
            <h3>{user.website}</h3>
            <span>{user.email}</span>
            <h2>Address</h2>
            <span>{user.address.city} </span>
            <span>{user.address.street} </span>
            <span>{user.address.suite} </span>
            <span>{user.address.zipcode}</span>
        </div>
      </div>
      <hr/>
      </>
    )
}

export default User