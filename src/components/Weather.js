import React from 'react';
 
const weather = props => { 

        return (
            <div className='weather__info'>
                {props.temperature ? (
                <div>
                <p className='weather__key'>City:<span className='weather__value'> {props.city}, {props.country}</span></p>
                <p className='weather__key'>Date:<span className='weather__value'> {props.date}</span></p>
                <p className='weather__key'>Temperature: <span className='weather__value'> {props.temperature} °C</span></p>
                <p className='weather__key'>Temperature MAX:<span className='weather__value'> {props.temperatureMax} °C</span></p>
                <p className='weather__key'>Temperature MIN:<span className='weather__value'> {props.temperatureMin} °C</span></p>
                <p className='weather__key'>Weather:<span className='weather__value'> {props.weather}</span></p>
                <p className='weather__key'>Pollution Quality:
                    {props.pollution < 50 && <span style={{color: 'lime', fontWeight: 'bold'}} className='weather__value'> Good! {props.pollution}.</span>}
                    {props.pollution > 51 && props.pollution < 100 && <span style={{color: 'yellow', fontWeight: 'bold'}} className='weather__value'> Moderate! {props.pollution}. </span>}
                    {props.pollution > 101 && props.pollution < 150 && <span style={{color: 'orange', fontWeight: 'bold'}} className='weather__value'> Unhealthy! {props.pollution}. </span>}
                    {props.pollution > 151 && props.pollution < 200 && <span style={{color: 'red', fontWeight: 'bold'}} className='weather__value'> Unhealthy+! {props.pollution}. </span>}
                    {props.pollution > 201 && props.pollution < 300 && <span style={{color: 'purple', fontWeight: 'bold'}} className='weather__value'> Very Unhealthy! {props.pollution}. </span>}
                    {props.pollution > 301 && <span style={{color: 'brown', fontWeight: 'bold'}} className='weather__value'> Hazardous! {props.pollution}. </span>}
                    </p>
                </div>

                ) : <p className='weather__error'>{props.error}</p>}
            </div>
        )
    }

export default weather;