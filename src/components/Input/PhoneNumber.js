import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Label from "../Label";
import "./input.css";
import secure from "../../images/secure.svg";

const countries = [
  {
    url: "https://flagcdn.com/16x12/in.png",
    name: "India",
    code: "+91",
  },
  {
    url: "https://flagcdn.com/16x12/us.png",
    name: "US",
    code: "+1",
  },
  {
    url: "https://flagcdn.com/16x12/au.png",
    name: "Australia",
    code: "+61",
  },
];

const PhoneNumber = ({ label, ...props }) => {
  const [selectedCountry, setSelectedCountry] = useState({
    url: "https://flagcdn.com/16x12/in.png",
    name: "India",
    code: "+91",
  });

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value.replace(/\D/g, "").slice(0, 10);
    e.target.value = inputValue;
  };

  return (
    <div className="input-number-dropdown-container mb-3">
      <Dropdown>
        <Dropdown.Toggle variant="outline-secondary">
          <img src={selectedCountry.url} alt={selectedCountry.name} />
          <span>{selectedCountry.code}</span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {countries &&
            countries.length > 0 &&
            countries.map((country, index) => (
              <Dropdown.Item
                key={index}
                onClick={() => handleCountrySelect(country)}
              >
                <img src={country.url} alt={country.name} />
                {country.code}
              </Dropdown.Item>
            ))}
        </Dropdown.Menu>
      </Dropdown>
      <div className="input-number-container">
        <input
          type="tel" // Use type="tel" for telephone numbers
          className="input-field"
          {...props}
          onChange={handleInputChange}
        />
        <label className="input-label">{label}</label>
      </div>
      <Label label="We don't spam" image={secure} />
    </div>
  );
};

export default PhoneNumber;