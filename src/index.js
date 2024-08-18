
import ReactDOM from 'react-dom/client';
import Home from './Home';
import About from './About';
import Contact from './Contact';



const root = ReactDOM.createRoot(document.getElementById('root'));
const currentpath =window.location.pathname
     if(currentpath == "/"){
      root.render(<Home />)
     }
     else if(currentpath == "/About"){
 root.render(<About />)
     }
     else if(currentpath == "./Contact.js"){
      root.render(<Contact />)
     }
     else{
      root.render("404 page not found")
     }






