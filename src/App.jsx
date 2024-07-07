import NavBar from "./Navbar/NavBar"
import Me from "./Me/Me"
import About from "./About/About"
import Projects from "./Projec/Project"
import Info from "./Info/Info"
import { Helmet } from 'react-helmet';

export  default function App(){
    return(
        <div> 
            <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>
<NavBar />
<Me />
<About />
<Projects />
<Info />

        </div>
    )
}