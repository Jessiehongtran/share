import React from 'react';

const ShareCard = props => {
    console.log('props in ShareCard', props)

    return (
        <div>
            <p>{props.share.username} is having a {props.share.item_name} to share</p>
            <p>Pickup at: {props.share.pickup}</p>
            <p>Available until: {props.share.deadline}</p>
            <p>Ideally for: {props.share.target}</p>
        </div>
    )
}

export default ShareCard;
