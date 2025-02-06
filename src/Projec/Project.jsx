import "./Project.css";
import { RiExternalLinkFill } from "react-icons/ri";
import myImage from "../images/test1.jpeg";
import myImage2 from "../images/duapune.png";
import myImage3 from "../images/real-estate.png";
export default function Projects() {
  const localDatabase = [
    {
      id: 1,
      name: "MyAnime",
      description:
        "Anime website offering search, top anime lists, recommendations, trailers, and detailed character information for enthusiasts. Explore new series, watch trailers, and delve into anime details, including synopses, release dates, studios, and character backgrounds. Enhance your anime experience with curated recommendations and top picks, all in one user-friendly platform for fans to enjoy.",
      paragraph: " Anime website with latest and and most popular series",
      images: myImage,
      links: "https://minokrim.github.io/animeproject/",
    },
    {
      id: 2,
      name: "Dua Pune",
      description:
        "DuaPune.com is an online platform dedicated to job listings and career services in Albania, Kosovo, North Macedonia, and other countries. It connects job seekers with employers, offering a range of services including CV databases, job postings, and career advice. The platform aims to match the best candidates with the most suitable companies by leveraging advanced technology and intelligence.",
      paragraph:
        " DuaPune connects job seekers with employers across the Balkans.",
      images: myImage2,
      links: "https://www.duapune.com/",
    },
    {
      id: 3,
      name: "Alpha Information",
      description:
        "Alfa Information offers a wide range of real estate services in Albania, including buying, selling, and renting properties. They provide a platform for users to find commercial spaces, apartments, and land across various regions, with up-to-date listings and detailed property information. The company aims to connect people with ideal properties for both residential and commercial purposes. For more details, visit Alfa Information.",
      paragraph:
        " Real estate solutions for buying, selling, and renting in Albania.",
      images: myImage3,
      links: "https://www.alfainformation.com/",
    },
  ];
  return (
    <div className="project-container" id="project">
      <h1 className="text-center mb-2 mt-5 costum-title">Projects</h1>

      <div className="bor-1 mb-5">
        <div className="bor "></div>
      </div>

      <div className="project-con">
        {localDatabase.map((project, index) => (
          <div
            key={index}
            className="project-con-2 mb-5 reverse-image-par"
            id="myanime"
          >
            <div
              className="image"
              style={{
                backgroundImage: `url(${project.images})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "400px", // Adjust as needed
                width: "60%",
                objectFit: "cover",
              }}
            >
              <p className="par">
                <h1>{project.name}</h1>
                <p className="edit-p">{project.description}</p>
              </p>
            </div>
            <div className="last-order">
              <h1 className="costum-p2 mb-3 mt-3">Description and Goals</h1>
              <p className="par-2">
                <p className="d-flex justify-content-center align-items-center color-t">
                  {project.description}
                </p>
              </p>
            </div>

            <div className="project-info">
              <h1 className="project-p">{project.name}</h1>
              <p className="custom-p3">{project.paragraph}</p>

              <h5 className="skill-box">Bootstrap</h5>
              <h5 className="skill-box">HTML</h5>
              <h5 className="skill-box">React js</h5>
              <h5 className="skill-box me-0">Rest Api</h5>
              <h5 className="skill-box">JavaScript</h5>
              <h5 className="skill-box">CSS</h5>
              <h5 className="skill-box">VisualStudio</h5>
              <div className="d-flex ms-0 mt-2">
                <button
                  className="costum-btn mt-4 mt-md-0 mt-xl-3"
                  onClick={() => window.open(project.links)}
                >
                  Check it <RiExternalLinkFill className="ms-1" />{" "}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
