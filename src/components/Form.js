import React from 'react';
 
const form = props => { 
        return (
            <form onSubmit={props.submitted} >
                <input type='text' name='city' placeholder='city' />
                <input type='text' name='country' placeholder='country' />
                <button disabled={props.disabled}>Get Weather!</button>
            </form>
        )
    }

export default form;

