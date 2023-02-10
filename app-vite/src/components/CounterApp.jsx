import { useState } from 'react';
import PropTypes from 'prop-types';

export function CounterApp() {
  
    let [ counter, setCounter ] = useState(0);
  
    const addCount = () => {
      setCounter(counter + 1);
    }

    const lessCount = () => {
      if(counter > 0) {
        setCounter(counter - 1);
      }
    }

    const reset = () => {
      setCounter(counter = 0);
    }

  return(
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button onClick={addCount}>
        Add +1
      </button>
      <button onClick={lessCount}>
        Add -1
      </button>
      <button onClick={reset}>
        Reset
      </button>
    </>
  )
}

CounterApp.PropTypes = {
  value: PropTypes.number.isRequired
}