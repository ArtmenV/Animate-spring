import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring'
import Toggle from './toggle'
import Nav from './nav'
import logo from './logo.svg';
import './App.css';

const App= () =>  {
    const [isNavOpen, setNavOpen] = useState(false)
    const navAnimation = useSpring({
        transform: isNavOpen ? 'translate3d(0, 0, 0) scale(1)' : 'translate3d(100%, 0, 0) scale(0.6)'
    });
    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 }
    })

    return (
      <animated.div className="App" style={fade}>
        <header className="App-header">
          <img src={logo} className="logo" />
          <button
              onClick = {() => setNavOpen(!isNavOpen)}
              className="menu-button">Menu</button>
        <Nav style={navAnimation}/>
        </header>
          <main>
              <Toggle />
          </main>
      </animated.div>
    );
  }

export default App;
