import "../styles/_landingSection.scss";
import SplineComponent from "./SplineComponent";

const LandingSection = () => {
  return (
    <section className="landing-section">
      <div className="spline-wrapper">
        <SplineComponent />
      </div>
      <div className="content">
        <h1 className="headline"> &gt; ../Hello There, </h1>
        {/* <p className="subheadline">
          I am 3D artist and full-stack developer from Portugal living in Germany.
        </p> */}
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
