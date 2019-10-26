import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ShareCard from './shareCard'
import {Link} from 'react-router-dom'

const ShareFeed = props => {
    console.log('props in ShareFeed', props)
    

    //make a get request from API to get items then display
    useEffect(()=> {
        axios
            .get('https://share-h.herokuapp.com/api/shares')
            .then(res => {
                console.log(res.data)
                props.setShareList(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <div>
        <Link to='/login'><button>Log In</button></Link>
        <Link to='/signUp'><button>Sign Up</button></Link>
        <Link to='/category'><button class="share-btn">Start sharing</button></Link>
        {props.shareList.map(share => <ShareCard key={share} share={share}/>)}
        </div>
    )
}

export default ShareFeed;

