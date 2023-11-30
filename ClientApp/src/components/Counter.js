import React, { useState } from 'react';
import { counterSlice } from '../features/counter/slice';
import { useDispatch } from 'react-redux';
import { useCounterCount } from '../features/counter/selector';

const Counter = () => {

    const dispatch = useDispatch();
    const count = useCounterCount();
    const [currentCount, setCurrentCount] = useState(0);

    const onClickUp = () => {
        setCurrentCount(currentCount + 1);
        dispatch(counterSlice.actions.increment());
    }

    const onClickDown = () => {
        setCurrentCount(currentCount - 1);
        dispatch(counterSlice.actions.changed(count -1));
    }

    return (
        <React.Fragment>
            <h1>Counter</h1>
            <p>This is a simple example of a React component.</p>
            <p aria-live="polite">useState: <strong>{currentCount}</strong></p>
            <p aria-live="polite">Redux: <strong>{count}</strong></p>
            <button className="btn btn-primary" onClick={onClickUp}>Increment</button>
            <button className="btn btn-secondary" onClick={onClickDown}>Decrement</button>
        </React.Fragment>
    )
}

export default Counter;