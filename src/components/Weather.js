import React from 'react';
 
const weather = props => { 

        return (
            <div className='weather__info'>
                {props.temperature ? (
                <div>
                <p className='weather__key'>City:<span className='weather__value'> {props.city}, {props.country}</span></p>
                <p className='weather__key'>Date:<span className='weather__value'> {props.date}</span></p>
                <p className='weather__key'>Temperature: <span className='weather__value'> {props.temperature}</span> </p>
                <p className='weather__key'>Temperature MAX:<span className='weather__value'> {props.temperatureMax}</span></p>
                <p className='weather__key'>Temperature MIN:<span className='weather__value'> {props.temperatureMin}</span></p>
                <p className='weather__key'>Weather:<span className='weather__value'> {props.weather}</span></p>
                </div>

                ) : <p className='weather__error'>{props.error}</p>}
            </div>
        )
    }

export default weather;