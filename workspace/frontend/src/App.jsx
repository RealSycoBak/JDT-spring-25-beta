import React, { useState, useEffect } from 'react';
import NavBar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Projects from './components/projects/projects';
import Experiences from './components/experiences/experiences';
import About from './components/about/about'
import Chat from './components/chat/chat'
import './App.css';

function App() {
    const [bgColor, setBgColor] = useState('white');
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'white', 'black'];

    useEffect(() => {
        let colorIndex = 0;

        const interval = setInterval(() => {
            setBgColor(colors[colorIndex]);
            colorIndex = (colorIndex + 1) % colors.length;
        }, 500); 

        return () => clearInterval(interval);
    }, []); 

    return (
        <>
            <NavBar />
            <Profile />
            <Chat />
            <About />
            <div id="projects" style={{ backgroundColor: bgColor, transition: 'background-color 0.3s ease' }}>
                <h2>Projects</h2>
                <Projects name="Bob" description="chicken" github="https://github.com/" />
            </div>
            <div id="exp" style={{ backgroundColor: bgColor, transition: 'background-color 0.3s ease' }}>
                <h2>Experiences</h2>
                <Experiences title="Job Title" info="Company Name, Location, State" dates="Dates - Dates" bullets={["Bullet 1", "Bullet 2", "Bullet 3", "Bullet 4", "Bullet 5"]} />
            </div>
        </>
    );
}

export default App;
