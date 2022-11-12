import SectionTitle from "../../UI/SectionCard/SectionTitle/SectionTitle.js";
import SectionCard from "../../UI/SectionCard/SectionCard.js";
import SectionContent from "../../UI/SectionCard/SectionContent/SectionContent.js";
import Button from "../../UI/Button/Button.js";

import classes from "./SectionFour.module.css";

const SectionFour = ({ title }) => {
  return (
    <SectionCard className="">
      <SectionTitle sectionTitle={title} />
      <SectionContent>
        <form className={classes.action}>
          <div className={classes["actions-container"]}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Telephone" />
          </div>
          <textarea placeholder="Message"></textarea>
          <Button className="" type="submit">
            Submit
          </Button>
        </form>
      </SectionContent>
    </SectionCard>
  );
};

export default SectionFour;
