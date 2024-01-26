import React, { useState } from "react";
import ReactSelect from "react-select";

const SelectCommon = ({ options }) => {
  const [value, setValue] = useState(null);

  const style = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      border: state.isFocused ? 0 : 0,
      height: "25px",
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      borderRadius: state.isSelected ? "0" : "0px",
      fontSize: "14px",
      "&:hover": {
        border: state.isFocused ? 0 : 0,
        color: "black",
      },
      //   borderRadius: "50px",
      outline: "none",
      paddingLeft: "0",
    }),
    menu: (base) => ({ ...base, marginTop: "0px" }),
    menuList: (base) => ({ ...base, padding: "0" }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#c10037" : "white",
      fontSize: "14px",
      "&:hover": {
        backgroundColor: "#c10037",
      },
    }),
    valueContainer: (base) => ({ ...base, paddingLeft: 0 }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: state.selectProps.menuIsOpen ? "#b7b7b7" : "black",
      transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
      transition: "250ms",
    }),
  };
  return (
    <ReactSelect
      //   isSearchable
      className="select"
      options={options}
      value={options.value}
      defaultValue={options[0]}
      onChange={setValue}
      styles={style}
    ></ReactSelect>
  );
};

export default SelectCommon;
