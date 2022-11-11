import SectionCard from "../../UI/SectionCard/SectionCard.js";
import SectionTitle from "../../UI/SectionCard/SectionTitle/SectionTitle.js";
import SectionContent from "../../UI/SectionCard/SectionContent/SectionContent.js";
import TestemonialCard from "./TestemonialCard/TestemonialCard.js";
import { testemonialUsers } from "./SectionTwoData.js";
import classes from "./SectionTwo.module.css";

const SectionTwo = ({ title }) => {
  const showUsers = testemonialUsers.map((el, index) => (
    <TestemonialCard
      key={index}
      testemonialContent={{ user: el.user, text: el.text, image: el.image }}
    />
  ));

  return (
    <SectionCard className="">
      <SectionTitle sectionTitle={title} />
      <SectionContent className={classes["section-2"]}>
        {showUsers}
      </SectionContent>
    </SectionCard>
  );
};

export default SectionTwo;
