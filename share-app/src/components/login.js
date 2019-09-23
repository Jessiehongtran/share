import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

//1.Login needs validation, needs to be transformed to Formik
//2.Currently id is being grabbed at SignUp, what if people just login, how to store the id in the localstorage 
//or somewhere that it's always being grabbed if a user gets in
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
            .post('https://share-h.herokuapp.com/api/users/login', user)
            .then(res => {
               
                console.log(res.data)
                props.history.push('/createProfile')
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <p>What's up, How are you doing today?</p>
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
                <Link to='/register'>New user?</Link>
            </form>
        </div>
    )
}

export default Login;