import React from 'react';

/* eslint-disable */
class Calculator extends React.Component {
    render() {
        return ( 
            <div className = "contianer">
                <div className='res'> 0 </div>
                <div className='row'>
                    <button type="button">AC</button>
                    <button type="button">+/-</button>
                    <button type="button">%</button>
                    <button type="button" className='ops'>÷</button>
                </div>
                <div className='row'>
                    <button type="button">7</button>
                    <button type="button">8</button>
                    <button type="button">9</button>
                    <button type="button" className='ops'>x</button>
                </div>
                <div className='row'>
                    <button type="button">4</button>
                    <button type="button">5</button>
                    <button type="button">6</button>
                    <button type="button" className='ops'>-</button>
                </div>
                <div className='row'>
                    <button type="button">1</button>
                    <button type="button">2</button>
                    <button type="button">3</button>
                    <button type="button" className='ops'>+</button>
                </div>
                <div className='row'>
                    <button type="button" className='zero'>0</button>
                    <button type="button">.</button>
                    <button type="button" className='ops'>=</button>
                </div>
            </div>
        );
    }
}

export default Calculator;