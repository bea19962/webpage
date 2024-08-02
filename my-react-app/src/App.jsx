
import SplineComponent from './components/SplineComponent';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <section id="about" style={{ backgroundcolor:'pink', width: '100%', height: '100vh' }}>
          {/* <SplineComponent /> */}
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
