import React from 'react';
 
class Burger extends React.Component { 
    render ()  {
        return (
            <form onSubmit={this.props.submitted} >
                <input type='text' name='city' placeholder='city' />
                <input type='text' name='country' placeholder='country' />
                <button>Search!</button>
            </form>
        )
    }
 }
export default Burger;

