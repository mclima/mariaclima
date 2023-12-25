import Card from '../../components/Card'


const Project = ({project}) => {
  return (
    <Card className="portfolio__project">
        <div className="portfolio__project-image">
            <img src={project.image} alt={project.title} />
        </div>
        <h4>{project.title}</h4>
        <p>{project.desc}</p>
        <div className="portfolio__project-cta">
            <a href={project.demo} className="btn sm" target="_blank" rel="noopner noreferrer">{project.category === 'Animations' ? 'Desktop' : 'Demo'}</a>
            {/*do not display the github button if project.github is an empty string*/}
            {project.github !== '' && <a href={project.github} className={project.category === 'Animations' ? 'btn sm' : 'btn sm primary'} target="_blank" rel="noopner noreferrer">{project.category === 'Animations' ? 'Mobile' : 'Github'}</a>}
        </div>
    </Card>
  )
}

export default Project;
