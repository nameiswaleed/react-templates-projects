// import { Option } from "antd/es/mentions";
import React from "react";
import { useState } from "react";
import ReactSelect from "react-select";
// import "antd/dist/antd.css";
import TextArea from "antd/lib/input/TextArea";

export default function Select() {
  const [value, setValue] = useState(null);
  const options = [
    { label: "Choose Category", value: "" },
    { label: "Computer", value: "Computer" },
    { label: "Automobile", value: "Automobile" },
    { label: "Car Wash", value: "Car Wash" },
    { label: "Cleaning", value: "Cleaning" },
    { label: "Electrical", value: "Electrical" },
    { label: "Construction", value: "Construction" },
  ];
  const style = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      width: "269px",
      border: state.isFocused ? 0 : 0,
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
      className="form-control prl0 select category-select"
      options={options}
      value={options.value}
      defaultValue={options[0]}
      placeholder="Choose Category"
      onChange={setValue}
      styles={style}
    ></ReactSelect>
  );
}

// export default function Select1() {
//   const [inputBox, setInputBox] = useState(false);

//   function onChange(value) {
//     if (value === "") {
//       setInputBox(true);
//     }
//   }
//   return (
//     <div>
//       <Select
//         showSearch
//         style={{ width: 200 }}
//         className="form-control pl0 select category-select"
//         placeholder="Select a person"
//         optionFilterProp="children"
//         onChange={onChange}
//         filterOption={(input, option) =>
//           option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
//         }
//       >
//         <Option value="">
//           <input
//             placeholder=""
//             type={"text"}
//             style={{ width: "100%", border: "none", outline: "none" }}
//           />
//         </Option>
//         <Option value="jack">Jack</Option>
//         <Option value="lucy">Lucy</Option>
//         <Option value="tom">Tom</Option>
//       </Select>
//     </div>
//   );
// }
