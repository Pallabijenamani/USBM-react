 /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";
// import "./App.css";

// const App = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => setUsers(data));
//   }, []);

//   return (
//     <div className="app">
//       <h1>Users</h1>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Userinfo from './components/Userinfo';
import './App.css';

const App = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="app">
            <h1>User List</h1>
            <div className="user-list">
                {users.map((user) => (
                    <Userinfo key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default App;
