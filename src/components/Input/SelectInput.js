import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./input.css";

function SelectInput({ options, placeholder, label }) {
  const [selectInput, setSelectInput] = useState({
    label: placeholder,
    value: "NA",
  });

  const handleSelectInput = (input) => {
    setSelectInput(input);
  };
  return (
    <Dropdown className="select-container">
      <label className="input-label">{label}</label>
      <Dropdown.Toggle variant="outline-secondary">
        {selectInput.label}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {options &&
          options.length > 0 &&
          options.map((option, index) => (
            <Dropdown.Item
              key={index}
              onClick={() => handleSelectInput(option)}
            >
              {option.label}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SelectInput;