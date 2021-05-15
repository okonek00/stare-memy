import React, {useState} from 'react';
import './UpvoteBtn.css'

const UpvoteBtn = () => {
    const[count, setCount] = useState(0);

    return(
        <div className="buttons">
            <div>{count}</div>
        <button onClick={() => setCount(count+1)}>+</button>
        <button onClick={() => setCount(count-1)}>-</button>
        </div>
    )
}

export default UpvoteBtn