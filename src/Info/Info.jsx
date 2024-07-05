import "./info.css";
import { GrPhone } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function Info() {
  return (
    <div className="big-footer"id="info">
        <div className="d-flex justify-content-center align-items-center edit2 mb-4">
        <div className="border edit"></div>
        </div>
        <div className="footer-edit">
    <div className="footer-container">
      <div className="">
        <h5>Contact Information</h5>
        <br />
        <p className="mb-2">
          <GrPhone /> +44-7400732017
        </p>

        <p>
          <MdOutlineEmail /> glidi1998@gmail.com
        </p>
      </div>
      <div>
        <h5>Social Media</h5>
       
                <TiSocialLinkedin onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/elidian-terziu/",
                    "_blank"
                  )
                } className="edit-icon1 icon-change"/>
   <FaFacebookF onClick={() =>
                  window.open(
                    "https://www.facebook.com/glidi.elefsina",
                    "_blank"
                  )
                } className="edit-icon icon-change ms-1"/>
        <FaInstagram onClick={() =>
                  window.open(
                    "https://www.instagram.com/gliditerziu?igsh=NmM3MzBtOGNyNWQ=",
                    "_blank"
                  )
                } className="edit-icon icon-change ms-2"/>
      </div>
      <div className="">
        <h5>Elidian Terziu</h5>
        <p>
          Passionate computer science graduate eager to excel as a front-end
          developer.
        </p>
      </div>
    </div>
    </div>
    </div>
  );
}
