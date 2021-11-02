import React, { useState, useEffect } from 'react';

const Timer = (props) => {
    const [seconds, setSeconds] = useState(20);

    function reset() {
      setSeconds(20);
    }

  
    useEffect(() => {
      let interval = null;
    //  if (isActive) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds -1);
        }, 1000);
        

      if (seconds < 1) {
        reset()
      }
      props.gimmeSeconds(seconds)

      return () => clearInterval(interval);
    }, [seconds]);
  
    return (<div>{seconds} sekuntia jäljellä seuraavaan vitsiin</div>)

  }
  
  export default Timer;