import data from './data';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact">
        <h2>Contact</h2>
        <h4>WOULD YOU LIKE TO CONTACT US?</h4>
        <p>We are happy to provide you with a quote for your project, or any clarification about our services and products. Here is how to contact us:</p>
        <div className="container contact__container">
          {
            data.map(item => (
              <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>
            ))
          }
        </div>
    </section>
  );
}

export default Contact;
