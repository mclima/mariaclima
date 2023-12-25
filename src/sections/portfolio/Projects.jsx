import Scroller from '../../components/Scroller';
import Project from "./Project";

const Projects = ({projects}) => {
  return (
    <div className="portfolio__projects scrollEl">
      <Scroller />
      {
        projects.map(project => (
            <Project key={project.id} project={project}/>
        ))
      }
    </div>
  );
}

export default Projects;
