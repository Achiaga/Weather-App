import React from 'react';

import './Form.css'
 
class form extends React.Component{ 
    state = {
        value: ''
    }
    handleChange = (e) => {
        this.setState({value: e.target.value})
      }
    render ( ) {
        return (
            <form onSubmit={this.props.submitted} >
                <input type='text' name='city' placeholder='City' />
                <input onChange={(e) => this.handleChange(e)} type='text' name='country' value={this.state.value} placeholder='Country' />
                <button disabled={!this.state.value}>Get Weather!</button>
            </form>        

        )
    }
}

export default form;

