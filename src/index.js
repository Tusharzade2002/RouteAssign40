
import ReactDOM from 'react-dom/client';
import './index.css'
import Home from './View/Home/Home';
import About from './View/About/About';
import Contact from './View/Contact/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
const currentpath = window.location.pathname
     if(currentpath == "/"){
      root.render(<Home /> )
     }
     else if(currentpath == "/about"){
      root.render(<About />)
     }
     else if(currentpath == "/contact"){
      root.render( <Contact />)
     }
     else{
      root.render("404 page not found")
     }






