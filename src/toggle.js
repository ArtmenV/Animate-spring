import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

const Toggle = () => {
    const [ isToggled, setToggled ] = useState(false)
    const fade = useSpring({
        //opacity: isToggled ? 1 : 0,
        color: isToggled ? 'tomato' : 'green',
       // fontSize: isToggled ? '1.5rem' : '10em',
      //  transform: isToggled ? 'translate3d(0, 0, 0)' : 'translate3d(0, -50px, 0)',
     y: isToggled ? 0 : -50

     })
    return (
        <div>
            <animated.h1 style={fade}>Hello</animated.h1>
            <button onClick={() => setToggled(!isToggled)} >Toggle</button>
        </div>
    )
}
//const AnimatedTitle = animated.h1;
export default Toggle