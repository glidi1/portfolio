import "./Me.css";
/* import { useContext } from "react";
import { Context } from "../Context"; */

export default function Me() {
 
  return (
    <div  className="me-constainer" id="me">
      

        <div className={"container-2 "}>
        
      <div>
        <h1 className="text-center mt-5 mb-4 costum-title">Hey, I'm Elly</h1>
      </div>

      <div>
        <h5 className="mb-4  costum-p text-center">
        
        Dynamic graduate developer skilled in crafting innovative, efficient 
        and engaging applications.
        </h5>
      
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button className="costum-btn"  onClick={(e) => {
          e.preventDefault();
          const projectElement = document.getElementById('about');
          projectElement.scrollIntoView({ behavior: 'smooth' });
        }}><span className="btn-text">About Me</span></button>
      </div>
      </div>
    </div>
  );
}
