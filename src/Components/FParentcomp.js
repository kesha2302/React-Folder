import React, { useState } from 'react';
import FChildcomp from './FChildcomp';

function FParentcomp() {
     const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
        <h2>Parent Component</h2>
      <p>Count: {count}</p>
      
      {/* Passing method as prop */}
      <FChildcomp onIncrement={incrementCount} />
    </div>
  )
}

export default FParentcomp
