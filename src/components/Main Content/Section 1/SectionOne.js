import SectionTitle from "../../UI/SectionCard/SectionTitle/SectionTitle.js";
import SectionCard from "../../UI/SectionCard/SectionCard.js";
import SectionContent from "../../UI/SectionCard/SectionContent/SectionContent.js";
import AboutCard from "./About Card/AboutCard.js";
import classes from "./SectionOne.module.css";
import AboutImg from "../../../images/about.jpg";
import { cardData, cardData2 } from "./SectionOneData.js";

const SectionOne = ({ title }) => {
  return (
    <SectionCard className={classes["section-1"]}>
      <SectionTitle sectionTitle={title} />
      <SectionContent>
        <AboutCard cardContent={cardData} />
        <div className={classes["about-img__container"]}>
          <img src={AboutImg} alt="About" />
        </div>
        <AboutCard cardContent={cardData2} />
      </SectionContent>
    </SectionCard>
  );
};

export default SectionOne;
