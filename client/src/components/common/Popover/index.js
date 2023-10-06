import { UncontrolledPopover, PopoverBody, PopoverHeader } from "reactstrap";
const Popover = (props) => {
  const { targert, placement, popoverTitle, children } = props;

  return (
    <UncontrolledPopover placement={placement} target={target} trigger="legacy">
      {" "}
      {popoverTitle && <PopoverHeader>{popoverTitle}</PopoverHeader>}
      <PopoverBody>{children}</PopoverBody>
    </UncontrolledPopover>
  );
};

Popover.defaultProps = {
  placement: "top",
};
