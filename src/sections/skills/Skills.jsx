import { useRef } from 'react'
import data from './data'
import Card from '../../components/Card'
import Scroller from '../../components/Scroller'
import './skills.css'

const Skills = () => {
  const triggerRef = useRef()
  return (
    <section id="skills" ref={triggerRef}>
      <Scroller triggerRef={triggerRef} />
      <h2>Skills</h2>
      <h4>WHAT CAN WE DO FOR YOU?</h4>
      <p className="scrollEl">
        Maria is proficient in various frontend technologies such as HTML, CSS,
        Sass, Tailwind, and JavaScript. She's actively enhancing her proficiency
        in the React library through self-guided learning and practical
        application, building on her foundation from a class she took at NYU.
        Additionally, she has demonstrated expertise in responsive design, UI/UX
        principles, and version control systems.
      </p>
      <div className="skills skills__container">
        {data.map((item) => (
          <Card key={item.id} className="skill light scrollEl">
            <div className="skill__icon">{item.icon}</div>
            <div className="skill__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Skills
