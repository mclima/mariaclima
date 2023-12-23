import data from './data';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact">
        <h2>Contact</h2>
        <h4>WOULD YOU LIKE TO CONTACT US?</h4>
        <p>Feel free to connect with Maria. She welcomes inquiries, collaborations, and discussions related to her work and expertise in frontend web&nbsp;development.</p>
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
