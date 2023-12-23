import data from './data';
import Card from '../../components/Card';
import './skills.css';

const Skills = () => {
    return (
    <section id="skills">
        <h2>Skills</h2>
        <h4>WHAT CAN WE DO FOR YOU?</h4>
        <p>Maria is proficient in various frontend technologies such as HTML, Sass, CSS, and JavaScript.  She's actively expanding proficiency in the React framework through self-guided learning and practical application. Additionally, she has demonstrated expertise in responsive design, UI/UX principles, and version control systems.</p>
        <div className="skills skills__container">
        {
        data.map(item => (
            <Card key={item.id} className='skill light'>
                <div className="skill__icon">
                    {item.icon}
                </div>
                <div className="skill__details">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                </div>
            </Card>
        ))
    }
    </div>
    </section>
    );
}

export default Skills;
