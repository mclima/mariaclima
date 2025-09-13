import { useRef, useState, useEffect } from 'react'
import './portfolio.css'
import Projects from './Projects'
import ProjectsCategories from './ProjectsCategories'
import Scroller from '../../components/Scroller'
import data from './data'

const Portfolio = () => {
  const triggerRef = useRef()
  
  const sortedData = [...data].sort((a, b) => {
    if (a.category < b.category) return -1;
    if (a.category > b.category) return 1;
    return 0;
  })
  
  const [projects, setProjects] = useState(sortedData)
  const [activeCategory, setActiveCategory] = useState('Websites') // Set the desired initial category
  const myArray = data.map((item) => item.category)
  const mySet = new Set(myArray)
  const categories = Array.from(mySet).sort().reverse() 
  const uniqueCategories = [...categories]

  const filterProjectsHandler = (category) => {
    if (category === 'all') {
      setProjects(sortedData)
    } else {
      const filterProjects = sortedData.filter(
        (project) => project.category === category
      )
      setProjects(filterProjects)
    }
  }

  // useEffect to filter projects when the component mounts
  useEffect(() => {
    filterProjectsHandler(activeCategory)
  }, [activeCategory])

  return (
    <section id="portfolio" ref={triggerRef}>
      <Scroller triggerRef={triggerRef} />
      <h2>Portfolio</h2>
      <h4>WANT TO SEE OUR PORTFOLIO?</h4>
      <p className="scrollEl">
        Our projects showcase successful and inspired web development solutions.
        We invite you to browse through our portfolio, and feel free to&nbsp;
        <a href="#contact">contact&nbsp;us</a>.
      </p>
      <div className="container portfolio__container scrollEl">
        <ProjectsCategories
          categories={uniqueCategories}
          onFilterProjects={filterProjectsHandler}
          initialCategory={activeCategory} // Pass the initial category to the ProjectsCategories component
        />
        <Projects projects={projects} />
      </div>
    </section>
  )
}

export default Portfolio
