import Card from '../../components/Card';
import { FaDesktop } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaCodepen } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";


const Project = ({project}) => {
  return (
    <Card className="portfolio__project">
        <div className="portfolio__project-image">
            <img src={project.image} alt={project.title} />
        </div>
        <h4>{project.title}</h4>
        <p>{project.desc}</p>
        <div className="portfolio__project-cta">
          {project.demo !== 'https://mariaclima.com' && <a href={project.demo} className="btn sm" target="_blank" rel="noopner noreferrer">{project.category === 'Animations' ? <FaDesktop /> : project.demo.indexOf('codepen') > 0 ? <FaCodepen /> : <TbWorldWww />}</a>}
            
            {/*do not display the github button if project.github is an empty string*/}
            {project.github !== '' && <a href={project.github} className={project.category === 'Animations' ? 'btn sm' : 'btn sm primary'} target="_blank" rel="noopner noreferrer">{project.category === 'Animations' ? <FaMobileAlt /> : <IoLogoGithub />}</a>}
        </div>
    </Card>
  )
}

export default Project;
