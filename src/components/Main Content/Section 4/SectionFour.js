import SectionTitle from "../../UI/SectionCard/SectionTitle/SectionTitle.js";
import SectionCard from "../../UI/SectionCard/SectionCard.js";
import SectionContent from "../../UI/SectionCard/SectionContent/SectionContent.js";

import classes from "./SectionFour.module.css";

const SectionFour = ({ title }) => {
  return (
    <SectionCard className="">
      <SectionTitle sectionTitle={title} />
      <SectionContent></SectionContent>
    </SectionCard>
  );
};

export default SectionFour;
