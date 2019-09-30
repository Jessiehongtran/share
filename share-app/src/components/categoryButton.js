import React from 'react';

const CategoryButton = props => {
    console.log('props in CategoryButton', props)
    return (
        <div>
            <button class="cate-btn" onClick={click => 
            {console.log('check', props.cate)
                if(props.cate === 'Others'){props.history.push('/addCategory')} 
                else {
                    props.setCategoryId(props.cate_id)
                    props.history.push('/createShare')
                }
                }}>
                {props.cate}
            </button>
        </div>
    )
}

export default CategoryButton;