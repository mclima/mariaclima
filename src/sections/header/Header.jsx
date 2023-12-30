import { useEffect } from "react";
import './header.css';
import { gsap } from "gsap";

const Header = () => {
  //LOGO fade in
  useEffect(() => { 
    gsap.to('.logo',{ delay:.25, duration: .33, autoAlpha:1, ease:'none'  });
  }, []);
  //CIRCLES ANIMATION
  useEffect(() => { 
    // gsap.to('.c-1',{ duration: .33, width: 70, height: 70, transformOrigin:'center', ease:'none'  });
    // gsap.to('.c-2',{ duration: .33, width: 50, height: 50, transformOrigin:'center', ease:'none' });
    // gsap.to('.c-3',{duration: .33, width: 60, height: 60, transformOrigin:'center', ease:'none' });
    // gsap.to('.c-4',{ duration: .33, width: 80, height: 80, transformOrigin:'center',ease:'none' });
    //  gsap.to('.c-5',{ delay:.33, duration:.33, autoAlpha:1, transformOrigin:'center',  ease:'none' });
    // gsap.set('.circles', {y:-200});
    // gsap.to('.circles', {delay:.33, duration:.5, y:0, ease:'none'})
  }, []);
  

  return (
    <header id="header">
        <div className="container header__container">
          <div className="logo__container">
              <div className="logo">
              <a href="index.html">
              <span>maria c. lima</span>
              <span className="logo-teaser">Web Technology Studio</span>
              </a>
            </div>
          </div>
         
          <div className="circles">
              <div className="circle c-1"></div>
              <div className="circle c-2"></div>
              <div className="circle c-3"></div>
              <div className="circle c-4"></div>
              <div className="circle c-5"></div>
          </div>
        </div>
    </header>
  );
}

export default Header;
