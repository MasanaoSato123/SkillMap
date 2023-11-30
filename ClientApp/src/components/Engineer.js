import React, { useState } from 'react';

const Engineer = () => {

    const [currentCount, setCurrentCount] = useState(0);

    const onClickCounter = () => {
        setCurrentCount(currentCount + 1);
    }

    return (
        <React.Fragment>
            <h1>Engineer</h1>
            <p>This is a simple example of a React component.</p>
            <p aria-live="polite">Current count: <strong>{currentCount}</strong></p>
            <button className="btn btn-primary" onClick={onClickCounter}>Increment</button>
        </React.Fragment>
    )
}

export default Engineer;