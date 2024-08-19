
import ReactDOM from 'react-dom/client';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';



const root = ReactDOM.createRoot(document.getElementById('root'));
const currentpath =window.location.pathname
     if(currentpath === "/"){
      root.render(
        <>
          <Navbar />
          <Home />
        </>
        )
     }
     else if(currentpath === "/About"){
 root.render(  <>
    <Navbar />
    <About />
  </>)
     }
     else if(currentpath === "./Contact.js"){
      root.render(  <>
        <Navbar />
        <Contact />
      </>)
     }
     else{
      root.render("404 page not found")
     }






