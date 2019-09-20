import React, {useState} from 'react';
import {CategoryList} from '../data/CategoryList'
import axios from 'axios';

const AddCategory = props => {
    const [category, setCategory] = useState({})

    const handleChange = e => {
        setCategory({...category, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(category)
        axios
            .post('https://share-h.herokuapp.com/api/category', category)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
        props.history.push('/createShare')
    }
    return (
        <div>
            <h2>If not those listed, what do you want to share today?</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    className="addCate"
                    type="text"
                    name="category_name"
                    value={category.category_name}
                    onChange={handleChange}
                />
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddCategory;