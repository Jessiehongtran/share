import React, {useState} from 'react';
import {CategoryList} from '../data/CategoryList'

const AddCategory = props => {
    const [category, setCategory] = useState({newCategory: ""})

    const handleChange = e => {
        setCategory({...category, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(category)
        CategoryList.push(category.newCategory)
        console.log(CategoryList)
        //post to API

        //push to createShare
        props.history.push('/createShare')
    }
    return (
        <div>
            <h2>If not those listed, what do you want to share today?</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    className="addCate"
                    type="text"
                    name="newCategory"
                    value={category.newCategory}
                    onChange={handleChange}
                />
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddCategory;