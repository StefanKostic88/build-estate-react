import clases from "./SectionContent.module.css";
const SectionContent = (props) => {
  console.log(props);
  return <div className={clases["section-content"]}>{props.children}</div>;
};

export default SectionContent;
