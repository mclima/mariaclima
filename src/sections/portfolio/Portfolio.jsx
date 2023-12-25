import {useState } from 'react';
import './portfolio.css';
import Projects from './Projects';
import ProjectsCategories from './ProjectsCategories';
import data from './data';


const Portfolio = () => {
  const [projects, setProjects] = useState(data);
  const myArray = data.map(item => item.category);
  const mySet = new Set(myArray);
  const categories = Array.from(mySet).reverse();//reverse order of array
  const uniqueCategories = ["all", ...categories];

  const filterProjectsHandler = (category) => {
    if (category === 'all') {
      setProjects(data);
      return;
    } 
    const filterProjects = data.filter(project => project.category ===  category);
    setProjects(filterProjects);
    
    
  }
  return (
    <section id="portfolio">
        <h2>Portfolio</h2>
        <h4>WANT TO SEE OUR PORTFOLIO?</h4>
        <p>Our projects showcase successful and inspired web development solutions. We invite you to browse through our portfolio, and feel free to&nbsp;<a href="#contact">contact&nbsp;us</a></p>
        <div className="container portfolio__container">
          <ProjectsCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler}/>
          <Projects projects={projects}/>
        </div>
    </section>
  );
}

export default Portfolio;
