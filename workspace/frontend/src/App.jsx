import NavBar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Projects from './components/projects/projects'
import Experiences from './components/experiences/experiences';
import './App.css'

function App() {
    return (
        <>
            <NavBar />
            <Profile />
            <div id="projects">
                <h2>Projects</h2>
                <Projects name="Bob" description="chicken" github="https://github.com/" />
            </div>
            <div className="exp">
                <h2>Experiences</h2>
                <Experiences title="Job Title" info="Company Name, Location, State" dates="Dates - Dates" bullets={["Bullet 1", "Bullet 2", "Bullet 3", "Bullet 4", "Bullet 5"]} />
            </div>
        </>

    )
}

export default App
