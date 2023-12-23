import { useEffect } from "react";
import data from './data';
import './nav-bar.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Navbar = () => {

  gsap.registerPlugin(ScrollTrigger);
 

  // console.log(ScrollTrigger.version)
  //FIX MENU POSITION ON SCROLL
  useEffect(() => {
    ScrollTrigger.create({
        trigger: "nav",
        start: 'top top',
        end: 'max',
        pin: true,
        pinSpacing: false,
        toggleClass: 'mcl-active'
    });
  }, []);

  return (
    <nav>
      <div className="container nav__container">
        <ul className="nav__menu">
          {
            data.map(item => item.id === 2 ? <li key={item.id}><a href={item.link}><img src={item.title} alt='Home' /></a></li> : <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
      </div>
    </nav>

  );
}

export default Navbar;
