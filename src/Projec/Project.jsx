import "./Project.css";
import { RiExternalLinkFill } from "react-icons/ri";
export default function Projects() {
  return (
    <div className="project-container" id="project">
      <h1 className="text-center mb-2 mt-5 costum-title">Projects</h1>

      <div className="bor-1 mb-5">
        <div className="bor "></div>
      </div>

      <div className="project-con">
        <div className="project-con-2 mb-5 reverse-image-par" id="myanime">
          <div className="image">
            <p className="par">
              <h1>Goals and Description</h1>
              <p className="edit-p">
                Anime website offering search, top anime lists, recommendations,
                trailers, and detailed character information for enthusiasts.
                Explore new series, watch trailers, and delve into anime
                details, including synopses, release dates, studios, and
                character backgrounds. Enhance your anime experience with
                curated recommendations and top picks, all in one user-friendly
                platform for fans to enjoy.
              </p>
            </p>
          </div>
          <div className="last-order">
            <h1 className="costum-p2 mb-3 mt-3">Description and Goals</h1>
            <p className="par-2">
              <p className="d-flex justify-content-center align-items-center color-t">
              Anime website offering search, top anime lists, recommendations,
                trailers, and detailed character information for enthusiasts.
                Explore new series, watch trailers, and delve into anime
                details, including synopses, release dates, studios, and
                character backgrounds. Enhance your anime experience with
                curated recommendations and top picks, all in one user-friendly
                platform for fans to enjoy.
              </p>
            </p>
          </div>

          <div className="project-info">
            <h1 className="project-p">MyAnime</h1>
            <p className="custom-p3">
              Anime website with latest and and most popular series
            </p>
            <h5 className="skill-box">VisualStudio</h5>
            <h5 className="skill-box">Bootstrap</h5>
            <h5 className="skill-box">React js</h5>
            <h5 className="skill-box">JavaScript</h5>
            <h5 className="skill-box me-0">Rest Api</h5>
            <div className="d-flex ms-0 mt-2">
              <button
                className="costum-btn mt-4 mt-md-0 mt-xl-3"
                onClick={() =>
                  window.open(
                    "https://minokrim.github.io/animeproject/",
                    "_blank"
                  )
                }
              >
                Check it <RiExternalLinkFill className="ms-1" />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
