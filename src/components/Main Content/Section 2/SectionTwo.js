import SectionCard from "../../UI/SectionCard/SectionCard.js";
import SectionTitle from "../../UI/SectionCard/SectionTitle/SectionTitle.js";
import SectionContent from "../../UI/SectionCard/SectionContent/SectionContent.js";
import TestemonialCard from "./TestemonialCard/TestemonialCard.js";
import classes from "./SectionTwo.module.css";

const SectionTwo = ({ title }) => {
  return (
    <SectionCard className={classes["section-1"]}>
      <SectionTitle sectionTitle={title} />
      <SectionContent>
        <ul>
          <li>
            <TestemonialCard
              testemonialContent={{
                user: "UserName",
                text: "nestonestosdasd",
                image: "asdsad",
              }}
            />
          </li>
          <li>
            <TestemonialCard
              testemonialContent={{
                user: "UserName",
                text: "nestonestosdasd",
                image: "asdsad",
              }}
            />
          </li>
          <li>
            <TestemonialCard
              testemonialContent={{
                user: "UserName",
                text: "nestonestosdasd",
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
