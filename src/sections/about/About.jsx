import AboutImage from '../../assets/maria-sarya.png';
import Card from '../../components/Card';
import data from './data';
import './about.css';

const About = () => {
  return (
   <section id="about">
    <div className="about about__container">
      <div className="about__left">
        <div className="about__portrait">
          <img src={AboutImage} alt="Maria Lima" />
        </div>
      </div>
      <div className="about__right">
        <h2>About Maria</h2>
        <div className="about__cards">
          {
            data.map(item => (
            <Card key={item.id} className="about__card">
              <span className='about__card-icon'>{item.icon}</span>
              <h5>{item.title}</h5>
              <small>{item.desc}</small>
            </Card>
            ))
          }
         
        </div>
        <p>
          Maria graduated with a BS in Computer Information Systems from Mercy University in 2007 and obtained a Certification in Web Development from New York University in 2006. She regularly educates herself on the newest technologies to keep up with the latest trends and tools in web development and design.</p>
          <p>In her spare time, Maria dedicates herself to her family, yet she occasionally finds moments to create technical <a href="https://mclinteractive.com/author/admin/" target="_blank" rel="noopener noreferrer">articles</a>, which she then shares on her blog.
        </p>
      </div>
    </div>
   </section>
  );
}

export default About;
