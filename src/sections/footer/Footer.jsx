import {links, socials} from './data';
import './footer.css';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer id="footer">
      <div className="footer footer__container">
        <ul className="nav__menu">
          {
            links.map(flink => (
              <li key={flink.id}><a href={flink.link}>{flink.title}</a></li>
            ))
          }
        </ul>
        <div className="footer__socials">
          {
            socials.map(fsocial => (
              <a key={fsocial.id} href={fsocial.link} target="_blank" rel="noopener noreferrer">{fsocial.icon}</a>
            ))
          }
        </div>
      </div>
      <div className="footer__copyright">
        <h4>©2010 - <span id="mcl-year">{year}</span> Maria C. Lima Studio. All rights reserved.</h4>        
      </div>
    </footer>
  );
}

export default Footer;
