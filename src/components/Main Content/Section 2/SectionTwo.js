import SectionCard from "../../UI/SectionCard/SectionCard.js";
import SectionTitle from "../../UI/SectionCard/SectionTitle/SectionTitle.js";
import SectionContent from "../../UI/SectionCard/SectionContent/SectionContent.js";
import TestemonialCard from "./TestemonialCard/TestemonialCard.js";
import userOneImg from "../../../images/t1.jpg";
import userTwoImg from "../../../images/t2.jpg";
import userThreeImg from "../../../images/t3.jpg";
import classes from "./SectionTwo.module.css";

const SectionTwo = ({ title }) => {
  return (
    <SectionCard className="">
      <SectionTitle sectionTitle={title} />
      <SectionContent className={classes["section-2"]}>
        <TestemonialCard
          testemonialContent={{
            user: "User 1",
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore eius ab
            quis! Eveniet veritatis illo rerum, ea delectus sequi alias cumque.`,
            image: userOneImg,
          }}
        />
        <TestemonialCard
          testemonialContent={{
            user: "UserName",
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore eius ab
            quis! Eveniet veritatis illo rerum, ea delectus sequi alias cumque.`,
            image: userTwoImg,
          }}
        />
        <TestemonialCard
          testemonialContent={{
            user: "UserName",
            text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore eius ab
            quis! Eveniet veritatis illo rerum, ea delectus sequi alias cumque.`,
            image: userThreeImg,
          }}
        />
      </SectionContent>
    </SectionCard>
  );
};

export default SectionTwo;
