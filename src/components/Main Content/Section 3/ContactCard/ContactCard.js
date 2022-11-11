import ContactIcon from "./ContactIcon.js";
const ContactCard = ({ contactInfo }) => {
  const data = contactInfo.info.map((el, index) => {
    return (
      <li key={index}>
        <a href="google.com">
          {el.icon && <ContactIcon />}
          {el.text}
        </a>
      </li>
    );
  });
  console.log(data);
  return (
    <figure className="contact-card">
      <h3>Contact us</h3>
      <ul className="contact-info">{data}</ul>
    </figure>
  );
};

export default ContactCard;
