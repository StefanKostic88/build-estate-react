const CostumeSVG = (props) => {
  return (
    <svg
      version={props.items.version}
      xmlns={props.items.xmlns}
      width={props.items.width}
      height={props.items.height}
      viewBox={props.items.viewBox}
    >
      <title>{props.children.svgTitle}</title>
      <path d={props.children.svgPath}></path>
    </svg>
  );
};

export default CostumeSVG;
