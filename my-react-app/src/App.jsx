
import SplineComponent from './SplineComponent';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <section id="about" style={{ width: '100%', height: '100vh' }}>
          <h2>About</h2>
          <SplineComponent />
        </section>
        <section id="projects" style={{ width: '100%', height: '100vh' }}>
          <h2>Projects</h2>
          {/* Projects content here */}
        </section>
        <section id="skills" style={{ width: '100%', height: '100vh' }}>
          <h2>Skills</h2>
          {/* Skills content here */}
        </section>
        <section id="contact" style={{ width: '100%', height: '100vh' }}>
          <h2>Contact</h2>
          {/* Contact content here */}
        </section>
      </main>
    </div>
  );
}

export default App;
