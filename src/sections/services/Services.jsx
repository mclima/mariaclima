import data from './data';
import Card from '../../components/Card';
import './services.css';

const Services = () => {
  return (
   <section id="services">
    <h2>Services</h2>
    <h4>WHAT CAN WE DO FOR YOU?</h4>
    <p>We can help you design, build, and market your website.<br />Whether you represent yourself, an organization, or a corporation, we will support you in extending your business to the Web. We are committed to offering you consistently high-quality services.</p>
    <div className="services services__container">
      {
        data.map(item => (
          <Card key={item.id} className='service light'>
            <div className="service__icon">
              {item.icon}
            </div>
            <div className="service__details">
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

export default Services;
