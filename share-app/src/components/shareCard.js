import React from 'react';

const ShareCard = props => {
    console.log('props in ShareCard', props)

    return (
        <div className="share-card">
            <h3>{props.share.username} is having a {props.share.category_name} ({props.share.item_name}) to share</h3>
            <p className="share-text">Pickup at: {props.share.pickup}</p>
            <p className="share-text">Available until: {props.share.deadline}</p>
            <p className="share-text">Ideally for: {props.share.target}</p>
        </div>
    )
}

export default ShareCard;
