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
            .post('https://share-h.herokuapp.com/api/users', user)
            .then(res => {
                props.setId(res.data.id)
                props.history.push('/createprofile')
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
            </form>
        </div>
    )
}

export default Login;