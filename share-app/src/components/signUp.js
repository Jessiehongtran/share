import React, {useState} from 'react';
import axios from 'axios'

const SignUp = props => {
    const [person, setPerson] = useState({username: "", password: ""})

    const handleChange = e => {
        setPerson({...person, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(person)
        axios
            .post('https://share-h.herokuapp.com/api/users/signup', person)
            .then(res => {
                localStorage.setItem('userId', res.data.id)
                props.history.push('/createProfile')
                console.log('res in SignUp', res.data)
                
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <label>Username
                    <input 
                        type="text"
                        name="username"
                        value={person.username}
                        onChange = {handleChange}
                    />
                </label>
                <label>Password
                    <input 
                        type="password"
                        name="password"
                        value={person.password}
                        onChange = {handleChange}
                    />
                </label>
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;