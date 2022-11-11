import clases from "./SectionContent.module.css";
const SectionContent = (props) => {
  return (
    <div className={`${clases["section-content"]} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default SectionContent;
