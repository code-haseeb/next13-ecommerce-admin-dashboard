import Select from "react-select";
import makeAnimated from "react-select";
const SelectOption = (props) => {
  const {
    disabled,
    error,
    label,
    multi,
    options,
    defaultValue,
    value,
    handleSelectChange,
  } = props;
  const _handleSelectChange = (value) => {
    handleSelectChange(value);
  };
  const animatedComponents = makeAnimated();

  const styles = `select-box${error ? "invalid" : ""}`;
  return (
    <div className={styles}>
      {label && <label>{label}</label>}

      <Select
        isDisable={disabled}
        className="select-container"
        classNamePrefix="react-select"
        isMulti={multi}
        options={options}
        defaultValue={defaultValue}
        components={animatedComponents}
        value={value}
        onChange={_handleSelectChange}
        styles={dropdownStyles}
      />
      <span className="invalid-message">{error && error[0]}</span>
    </div>
  );
};
export default SelectOption;

const dropdownStyles = {
  control: (styles, { isFocused }) => {
    return {
      ...styles,
      color: "#323232",
      fontFamily: "Poppins",
      backgroundColor: "white",
      baxShadow: "none",
      transition: "0.5s",
      ":hover": {
        borderColor: !isFocused ? "#e4e6e9" : "#bdbdbd",
        boxShadow: "none",
      },
    };
  },

  menu: (styles) => {
    return {
      ...styles,
      zIndex: 2,
    };
  },

  option: (styles, { isDisable, isFocused, isSelected }) => {
    return {
      ...styles,
      color: "#323232",
      fontFamily: "Poppins",
      backgroundColor: isDisable
        ? undefined
        : isSelected
        ? "#eceef3"
        : isFocused
        ? "#f8f9fa"
        : undefined,
      ":hover": {
        ...styles[":hover"],
        backgroundColor: isDisable
          ? undefined
          : isSelected
          ? undefined
          : "#f8f9fa",
      },
      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisable ? "#eceef3" : undefined,
      },
    };
  },

  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),

  dropdownIndicator: (base, { isFocused }) => ({
    ...base,
    transform: isFocused ? "rotate(180deg)" : undefined,
  }),
  input: (styles) => ({
    ...styles,
    color: "#323232",
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "#323232",
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "#323232",
    fontFamily: "Poppins",
  }),
};
