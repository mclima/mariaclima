import { useRef } from 'react'
import AboutImage from '../../assets/maria-sarya.png'
import Card from '../../components/Card'
import Scroller from '../../components/Scroller'
import data from './data'
import './about.css'

const About = () => {
  const triggerRef = useRef()
  return (
    <section id="about" ref={triggerRef}>
      <Scroller triggerRef={triggerRef} />
      <div className="about about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="Maria Lima" />
          </div>
        </div>
        <div className="about__right scrollEl">
          <h2>About Maria</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <div>
            <p className="scrollEl">
              Maria graduated with a BS in Computer Information Systems from
              Mercy University in 2007 and obtained a Certification in Web
              Development from New York University in 2006. She regularly
              educates herself on the newest technologies to keep up with the
              latest trends and tools in web development and design.
            </p>
            <p className="scrollEl">
              In her spare time, Maria dedicates herself to her family.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
