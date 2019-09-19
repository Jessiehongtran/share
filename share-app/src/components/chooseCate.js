import React from 'react';
import {CategoryList} from '../data/CategoryList'
import CategoryButton from './categoryButton'

const ChooseCategory = props => {
    console.log('props in ChooseCate', props)
    return (
        <div>
            <h2>Okay, what do you want to share today?</h2>
            <div>{CategoryList.map(cate => 
                <CategoryButton key={cate} cate={cate} history={props.history} />)}
            </div>
        </div>
    )
}

export default ChooseCategory;