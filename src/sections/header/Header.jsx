import { useEffect } from "react";
import Logo from '../../assets/logo.png';
import './header.css';
import { gsap } from "gsap";

const Header = () => {
  //CIRCLES ANIMATION
  useEffect(() => { 
    gsap.to('.c-1',{ duration: .33, width: 70, height: 70, transformOrgin:'center', ease:'none'  });
  }, []);
  useEffect(() => { 
    gsap.to('.c-2',{ duration: .33, width: 50, height: 50, transformOrgin:'center', ease:'none' });
  }, []);
  useEffect(() => { 
    gsap.to('.c-3',{duration: .33, width: 60, height: 60, transformOrgin:'center', ease:'none' });
  }, []);
  useEffect(() => { 
    gsap.to('.c-4',{ duration: .33, width: 80, height: 80, transformOrgin:'center',ease:'none' });
  }, []);
  useEffect(() => { 
    gsap.to('.c-5',{ duration: .33, width: 90, height: 98,  transformOrgin:'center', ease:'none' });
  }, []);

  return (
    <header id="header">
        <div className="container header__container">
          <div className="logo__container">
              <div className="logo">
              <a href="index.html"><img src={Logo} alt="Maria C. Lima Logo" /></a>
            </div>
          </div>
         
          <div className="circles">
              <div class="circle not-for-mobile c-1"></div>
              <div class="circle not-for-mobile c-2"></div>
              <div class="circle not-for-mobile c-3"></div>
              <div class="circle not-for-mobile c-4"></div>
              <div class="circle not-for-mobile c-5"></div>
          </div>
        </div>
    </header>
  );
}

export default Header;
