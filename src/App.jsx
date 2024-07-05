import NavBar from "./Navbar/NavBar"
import Me from "./Me/Me"
import About from "./About/About"
import Projects from "./Projec/Project"
import Info from "./Info/Info"
import "./app.css";
export  default function App(){
    return(
        <div> 
            
<NavBar />
<Me />
<About />
<Projects />
<Info />
        </div>
    )
}