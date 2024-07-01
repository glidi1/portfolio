import "./NavBar.css";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useEffect } from "react";
import React, { useContext } from "react";

import { Context } from "../Context.jsx";

export default function NavBar() {
  const { light, setLight } = useContext(Context);
  useEffect(() => {
    document.body.className = light ? " dark-mode" : "light-mode";
  }, [light]);
  

  const toggleLight = () => {
    setLight(!light);
  };

  return (
    <div className="nav-container">
      <div className="nav-me" >
        <div className="box"  onClick={(e) => {
  e.preventDefault();
  const projectElement = document.getElementById('me');
  projectElement.scrollIntoView({ behavior: 'smooth' });
}}></div>
        <h1 className="color">Terziu Elidian</h1>
      </div>
      <div className="nav-content me-xl-3 me-lg-3 me-md-3 me-sm-3  ">
        <a className="costum-link decorated-link color" href="/"
        onClick={(e) => {
          e.preventDefault();
          const projectElement = document.getElementById('about');
          projectElement.scrollIntoView({ behavior: 'smooth' });
        }}>
          About
        </a>
        <div className="dropdown me-4">
          <a
            className="costum-link decorated-link color"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              const projectElement = document.getElementById('project');
              projectElement.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Project
          </a>
          
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/"  onClick={(e) => {
              e.preventDefault();
              const projectElement = document.getElementById('myanime');
              projectElement.scrollIntoView({ behavior: 'smooth' });
              const yOffset = projectElement.offsetTop + (projectElement.offsetHeight / 2) - (window.innerHeight / 2);
  window.scrollTo({ top: yOffset, behavior: 'smooth' });

            }}>
                MyAnime
              </a>
            
            </div>
        </div>
        <a className="costum-link decorated-link color" href="/"
        onClick={(e) => {
          e.preventDefault();
          const projectElement = document.getElementById('info');
          projectElement.scrollIntoView({ behavior: 'smooth' });
        }}>
          Contact
        </a>
        <div className="d-flex justify-content-center align-items-center edit-div">
          {/*  fix to change icons */}
          <div
            className={light ? "costum-div active  " : "costum-div1 active"}
            onClick={toggleLight}
          >
            <div
              className="costum-div border-costum d-flex justify-content-center align-items-center"
              onClick={toggleLight}
            >
              <div className="icons-con1 d-flex justify-content-center align-items-center ">
                {light ? (
                  <MdDarkMode className="icons1" />
                ) : (
                  <CiLight className="icons1" />
                )}
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
