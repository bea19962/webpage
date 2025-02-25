import "../styles/_landingSection.scss";

const LandingSection = () => {
  return (
    <section className="landing-section">
      <div className="content">
        <h1 className="headline">Wellcome </h1>
        <p className="subheadline">
          i am 3d artist and fullstack developer from Portugal living in Germany. I have experience in the interactive arts of interaction. I love to experiment with art, tech and brain rot.
        </p>
        <button className="cta-button" onClick={() => scrollToSection("projects")}>
          Explore My Work
        </button>
      </div>
    </section>
  );
};

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export default LandingSection;
