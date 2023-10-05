import { UncontrollerToltip } from "reactstrap";

const Tooltip = (props) => {
  const { target, placement, children } = props;
  return (
    <UncontrollerToltip placement={placement} target={target}>
      {children}
    </UncontrollerToltip>
  );
};
Tooltip.defaultProps = {
  placement: " top",
};
export default Tooltip;
