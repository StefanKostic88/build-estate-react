import SectionCard from "../../UI/SectionCard/SectionCard.js";
import SectionTitle from "../../UI/SectionCard/SectionTitle/SectionTitle.js";
import SectionContent from "../../UI/SectionCard/SectionContent/SectionContent.js";
import TestemonialCard from "./TestemonialCard/TestemonialCard.js";
import classes from "./SectionTwo.module.css";

const SectionTwo = ({ title }) => {
  return (
    <SectionCard className={classes["section-2"]}>
      <SectionTitle sectionTitle={title} />
      <SectionContent className="SECOND">
        <ul>
          <li>
            <TestemonialCard
              testemonialContent={{
                user: "UserName",
                text: "nestonestosdasdnestonestosdasdnestonestosdasdnestonestosdasdnestonestosdasdnestonestosdasdnestonestosdasdnestonestosdasd",
                image: "asdsad",
              }}
            />
          </li>
          <li>
            <TestemonialCard
              testemonialContent={{
                user: "UserName",
                text: "nestonestosdasdnestonestosdasdnestonestosdasdnestonestosdasd",
                image: "asdsad",
              }}
            />
          </li>
          <li>
            <TestemonialCard
              testemonialContent={{
                user: "UserName",
                text: "nestonestosdasdnestonestosdasdnestonestosdasdnestonestosdasdnestonestosdasd",
                image: "asdsad",
              }}
            />
          </li>
        </ul>
      </SectionContent>
    </SectionCard>
  );
};

export default SectionTwo;
