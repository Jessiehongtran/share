import React, {useEffect} from 'react';
// import {CategoryList} from '../data/CategoryList'
import CategoryButton from './categoryButton'
import axios from 'axios';

const ChooseCategory = props => {
    console.log('props in ChooseCate', props)

    useEffect(()=> {
        axios
            .get('https://share-h.herokuapp.com/api/category')
            .then(res=> {
                console.log(res.data)
                props.setCategoryList(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])
    return (
        <div>
            <h2>Okay, what do you want to share today?</h2>
            <div>{props.categoryList.map(cate => 
                <CategoryButton 
                key={cate.id} 
                cate={cate.category_name} 
                history={props.history} 
                cate_id = {cate.id}
                categoryId = {props.categoryId}
                setCategoryId = {props.setCategoryId}
                />)}
            </div>
        </div>
    )
}

export default ChooseCategory;