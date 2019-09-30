import React from 'react';
import {Link} from 'react-router-dom'

const Intro = () => {

    return (
        <div>
            <div class="btn">
                <Link to='/signUp'>
                    <button>Sign Up</button>
                </Link>
                <Link to='/login'>
                    <button>Log In</button>
                </Link>
                
            </div>
            <h3>Hi there,</h3>
            <p>Have you ever wanted to share food, book, clothes, opportunities, etc</p> 
                <p>to someone else but do not know who is in need of those?  </p>
            <p>Have you ever had extra resources but do not know where to locate them?</p>
            <p>Or have you ever wish someone have that resource for you </p>
                <p>to borrow or use for a certain time instead of buying yourself?</p>
            <p>If answers to these questions are YES, welcome to Sharee. </p>
            <p>And guess what, you do not really need to know someone to be able to share.</p>
            <h3>Sharee is created to relocate resources in society</h3>
        </div>
    )
}

export default Intro;