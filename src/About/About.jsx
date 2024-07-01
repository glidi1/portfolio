import "./About.css";
export default function About() {
  return (
    <div className="about-container" id="about">
      <h1 className="text-center mb-2 mt-5 costum-title">About</h1>

      <div className="bor-1 mb-2">
        <div className="bor "></div>
      </div>
      <div className="mb-5 w-100 d-flex justify-content-center align-items-center mb-5">
        <p className="w-50 text-center costum-p4">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      <div className="about-info">
        <div className="about-box ms-5 mb-5">
          <h3 className="costum-p2">Get to know me!</h3>
          <p className="custom-p3">
            Hello! I am a recent Software Engineering graduate specializing in
            web development. I have a strong foundation in JavaScript, HTML,
            CSS, and modern web frameworks, with a passion for creating
            performant and accessible web applications.
          
          </p>

          <button
            className="costum-btn"
            onClick={(e) => {
              e.preventDefault();
              const projectElement = document.getElementById("project");
              projectElement.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </button>
        </div>
        <div className="about-box ms-5 ">
          <h1 className="costum-p2">My toolkit</h1>
          <h5 className="skill-box">JavaScript</h5>
          <h5 className="skill-box">CSS</h5>
          <h5 className="skill-box">React</h5>
          <h5 className="skill-box">Rest API</h5>
          <h5 className="skill-box">HTML</h5>
          <h5 className="skill-box">SQL</h5>
          <h5 className="skill-box">Maria-DB</h5>
          <h5 className="skill-box">VisualStudio</h5>
          <h5 className="skill-box">phpMyAdmin</h5>
          <h5 className="skill-box">Java</h5>
          <h5 className="skill-box">Python</h5>
          <h5 className="skill-box">Bootstrap</h5>
          <h5 className="skill-box">PHP</h5>
        </div>
      </div>
    </div>
  );
}
