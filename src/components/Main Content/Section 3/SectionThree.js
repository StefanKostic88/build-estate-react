import SectionCard from "../../UI/SectionCard/SectionCard.js";
import SectionTitle from "../../UI/SectionCard/SectionTitle/SectionTitle.js";
import SectionContent from "../../UI/SectionCard/SectionContent/SectionContent.js";
import classes from "./SectionThree.module.css";
import {
  contacctDataOne,
  contactDataTwo,
  contactDataThree,
} from "./SectionThreeData.js";
import ContactCard from "./ContactCard/ContactCard.js";

const SectionThree = ({ title }) => {
  return (
    <SectionCard className="">
      <SectionTitle sectionTitle={title} />
      <SectionContent>
        <ContactCard contactInfo={contacctDataOne} title={"Contact us"} />
        <ContactCard contactInfo={contactDataTwo} title={"Connect us"} />
        <ContactCard contactInfo={contactDataThree} title={"Adress"} />
      </SectionContent>
      <div className={classes["iframe-container"]}>
        <iframe
          className={classes.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.31554952543!2d-74.26054888834555!3d40.6971477651349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0IrRg9GY0L7RgNC6LCDQodGY0LXQtNC40ZrQtdC90LUg0JTRgNC20LDQstC1!5e0!3m2!1ssr!2srs!4v1667837021389!5m2!1ssr!2srs"
          width="100%"
          height="100%"
          // allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
          // style="border: 0"
        ></iframe>
      </div>
    </SectionCard>
  );
};

export default SectionThree;
