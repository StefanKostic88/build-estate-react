import CostumeSVG from "../../../UI/CostumeSvg/CostumeSVG.js";
const ContactCard = ({ contactInfo }) => {
  const data = contactInfo.info.map((el, index) => {
    return (
      <li key={index}>
        <a href="google.com">
          {el.icon && <CostumeSVG items={el.svgParam}>{el.svgVer}</CostumeSVG>}
          {el.text || <CostumeSVG items={el.svgParam}>{el.svgVer}</CostumeSVG>}
        </a>
      </li>
    );
  });
  return (
    <figure className="contact-card">
      <h3>Contact us</h3>
      <ul className="contact-info">{data}</ul>
    </figure>
  );
};

export default ContactCard;
