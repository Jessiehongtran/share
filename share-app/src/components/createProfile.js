import React, {useState} from 'react';

const CreateProfile = () => {
    const [profile, setProfile] = useState({about: "", purpose: "", zipcode: "", age: "", email: "", phoneNumber: ""})
    const handleChange = e => {
        setProfile({...profile, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(profile)
    }
    return (
        <form onSubmit = {handleSubmit}>
            <input
                type="text"
                name="about"
                placeholder ="I am..."
                value={profile.about}
                onChange={handleChange}
            />
            <input
                type="text"
                name="purpose"
                placeholder ="I am here to..."
                value={profile.purpose}
                onChange={handleChange}
            />
            <input
                type="number"
                name="zipcode"
                placeholder ="95123"
                value={profile.zipcode}
                onChange={handleChange}
            />
            <input
                type="number"
                name="age"
                placeholder ="28"
                value={profile.age}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder ="abc@gmail.com"
                value={profile.email}
                onChange={handleChange}
            />
            <input
                type="number"
                name="phoneNumber"
                placeholder ="7742903801"
                value={profile.phoneNumber}
                onChange={handleChange}
            />
        </form>
    )
}

export default CreateProfile;