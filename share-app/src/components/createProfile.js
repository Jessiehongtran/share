import React, {useState} from 'react';
import axios from 'axios'

const CreateProfile = props => {
    console.log('props in CreateProfile', props)
    const [profile, setProfile] = useState({about: "", purpose: "", zipcode: "", age: "", email: "", phoneNumber: ""})
    const handleChange = e => {
        setProfile({...profile, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(localStorage.getItem('userId'))
        profile.user_id = localStorage.getItem('userId')
        console.log(profile)
        axios
            .post('https://share-h.herokuapp.com/api/users/profile', profile)
            .then(res => {
                console.log(res)
                props.history.push('/')
            })
            .catch(err => console.log(err))
    }
    return (
        <form onSubmit = {handleSubmit}>
            <label>Introduce yourself
                <input
                    type="text"
                    name="about"
                    placeholder ="I am..."
                    value={profile.about}
                    onChange={handleChange}
                />
            </label>
            <label>Why are you here?
                <input
                    type="text"
                    name="purpose"
                    placeholder ="I am here to..."
                    value={profile.purpose}
                    onChange={handleChange}
                />
            </label>
            <label>Your zipcode
                <input
                    type="number"
                    name="zipcode"
                    placeholder ="95123"
                    value={profile.zipcode}
                    onChange={handleChange}
                />
            </label>
            <label>Your age
                <input
                    type="number"
                    name="age"
                    placeholder ="28"
                    value={profile.age}
                    onChange={handleChange}
                />
            </label>
            <label>Your email
                <input
                    type="email"
                    name="email"
                    placeholder ="abc@gmail.com"
                    value={profile.email}
                    onChange={handleChange}
                />
            </label>
            <label> Your phone number
                <input
                    type="number"
                    name="phoneNumber"
                    placeholder ="7742903801"
                    value={profile.phoneNumber}
                    onChange={handleChange}
                />
            </label>
            <button>Create Profile</button>
        </form>
    )
}

export default CreateProfile;