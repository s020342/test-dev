import './Form.scss';
import React, { useState, useEffect, useReducer, useCallback } from 'react';

const initialState = { count: 0 };

function reducer (state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function Form (props) {
    const [value, setValue] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        console.log(111)
        memoizedCallback(333)
        // Update the document title using the browser API
        document.title = `You clicked times`;
    }, [memoizedCallback])

    const clickHandle = () => {
        if (typeof props.add === 'function' && value.length > 0) {
            props.add(value);
        }
        setValue('');
    }

    const memoizedCallback = useCallback(
        (v) => {
            console.log('value改变了', v)
        },
        [value],
    );

    console.log(state)
    return (

        < div className="wrapper" >
            <input
                value={value}
                onChange={(ev) => { setValue(ev.target.value) }}
                className="input"
                placeholder={'todo..'}
            />
            <button className={'btn'} onClick={clickHandle}>
                Add
      </button>
      Count: { state.count}
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>

        </div >
    );
}


export default Form;