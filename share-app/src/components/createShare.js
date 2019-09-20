import React, {useState} from 'react';

const CreateShare = props => {
    const [item, setItem] = useState({})

    const handleChange = e => {
        setItem({...item, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(item)
        //push item_name to an API
        //push the rest to another API

        //push to shareFeed
        props.history.push('/shareFeed')

        //later on can add push to review, edit, delete
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>What is it you want to share?
                    <input
                        type="text"
                        name="item_name"
                        value={item.item_name}
                        onChange={handleChange}
                    />
                </label>
                <label>Please describe it more specifically
                    <input
                        type="text"
                        name="description"
                        value={item.description}
                        onChange={handleChange}
                    />
                </label>
                <label>Whom you would like to share with?
                    <input
                        type="text"
                        name="target"
                        value={item.target}
                        onChange={handleChange}
                    />
                </label>
                <label>Where to handover?
                    <input
                        type="text"
                        name="pickup"
                        value={item.pickup}
                        onChange={handleChange}
                    />
                </label>
                <label>Available until
                    <input
                        type="date"
                        name="deadline"
                        value={item.deadline}
                        onChange={handleChange}
                    />
                </label>
                <label>Rules/expectation
                    <input
                        type="text"
                        name="rules"
                        value={item.rules}
                        onChange={handleChange}
                    />
                </label>
                <button>Create</button>
            </form>
        </div>
    )
}

export default CreateShare;