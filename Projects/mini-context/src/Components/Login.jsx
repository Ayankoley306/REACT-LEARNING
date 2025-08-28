import React, { useState, useContext } from 'react'
import userContext from '../Context/UserContext'

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(userContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ userName, password });
    }

    return (
        <div>
            <h2>
                Login
            </h2>
            <input
                type="text"
                placeholder='Enter Name'
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
            />
            {"          "}
            <input
                type='text'
                placeholder='Enter Password'
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login