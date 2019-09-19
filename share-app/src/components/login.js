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
            <input 
                type="text" 
                name="username" 
                placeholder="username" 
                value={user.username}
                onChange = {handleChange}
            />
            <input 
                type="password" 
                name="password" 
                placeholder="password" 
                value={user.password}
                onChange = {handleChange}
            />
            <button type="submit">Log In</button>
        </form>
    )
}

export default Login;