import React, {useState} from 'react';
import axios from 'axios'

const Login = (props) => {
    console.log('props in Login', props)
    const [user,setUser] = useState({username: "", password: ""})

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(user)
        axios
            .post('http://localhost:3300/api/users', user)
            .then(res => {
                console.log(res.data)
                props.history.push('/createprofile')
            })
            .catch(err => {
                console.log('Fail to submit user to server')
            })
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Username
                <input 
                    type="text" 
                    name="username" 
                    placeholder="username" 
                    value={user.username}
                    onChange = {handleChange}
                />
            </label>
            <label>Password
                <input 
                    type="password" 
                    name="password" 
                    placeholder="password" 
                    value={user.password}
                    onChange = {handleChange}
                />
            </label>
            <button type="submit">Log In</button>
        </form>
    )
}

export default Login;