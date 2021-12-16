import Topbar from "./component/topbar/Topbar";
import Intro from "./component/intro/Intro";
import { Portfolio } from "./component/portfolio/Portfolio";
import  { Works }  from "./component/works/Works";
import  { Testimonials }  from "./component/testimonials/Testimonials";
import { Contact }  from "./component/contact/Contact";
import "./app.css"

function App() {
  return (
    <div className="app">
      <Topbar/>
     <div className="sections">
       <Intro/>
       <Portfolio/>
       <Works/>
       <Testimonials/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;
