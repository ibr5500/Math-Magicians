import React, { useState }from 'react';
import calculate from './logic/calculate';


const Calculator = () => {
    const [anyName, setState] = useState({
        total: 0,
        next: null,
        operation: null,
    });

    const handleClick = (event) => {
        setState(
            calculate(anyName, event.target.id)
        );
    };

    const {total, next, operation} = anyName;
    
    return (
        <section className='parent-container'>
            <h2>Let's do some math!</h2>
            <div className = "contianer">
                <div className='res'>
                    {total} {operation} {next}
                </div>
                <div className='row'>
                    <button type="button" id='AC' onClick={handleClick}>AC</button>
                    <button type="button" id='+/-' onClick={handleClick}>+/-</button>
                    <button type="button" id='%' onClick={handleClick}>%</button>
                    <button type="button" id='÷' className='ops' onClick={handleClick}>÷</button>
                </div>
                <div className='row'>
                    <button type="button" id='7' onClick={handleClick}>7</button>
                    <button type="button" id='8' onClick={handleClick}>8</button>
                    <button type="button" id='9' onClick={handleClick}>9</button>
                    <button type="button" id='x' className='ops' onClick={handleClick}>x</button>
                </div>
                <div className='row'>
                    <button type="button" id='4' onClick={handleClick}>4</button>
                    <button type="button" id='5' onClick={handleClick}>5</button>
                    <button type="button" id='6' onClick={handleClick}>6</button>
                    <button type="button" id='-' className='ops' onClick={handleClick}>-</button>
                </div>
                <div className='row'>
                    <button type="button" id='1' onClick={handleClick}>1</button>
                    <button type="button" id='2' onClick={handleClick}>2</button>
                    <button type="button" id='3' onClick={handleClick}>3</button>
                    <button type="button" id='+' className='ops' onClick={handleClick}>+</button>
                </div>
                <div className='row'>
                    <button type="button" id='0' className='zero' onClick={handleClick}>0</button>
                    <button type="button" id='.' onClick={handleClick}>.</button>
                    <button type="button" id='=' className='ops' onClick={handleClick}>=</button>
                </div>
            </div>
        </section>
    );
};

export default Calculator;