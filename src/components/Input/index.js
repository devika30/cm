import Form from "react-bootstrap/Form";
import PhoneNumber from "./PhoneNumber";
import "./input.css";
import SelectInput from "./SelectInput";

const Input = ({
  type,
  label,
  value,
  checked,
  onChange,
  radioLabel,
  labelImage,
  options,
  selectedValue,
  placeholder,
  handleSelectChange,
  icon,
  ...props
}) => {
  const renderInput = () => {
    switch (type) {
      case "text":
        return (
          <>
            <input
              type="text"
              className="input-field"
              placeholder={placeholder}
              {...props}
            />
            <label className="input-label">{label}</label>
          </>
        );
      case "number":
        return <PhoneNumber label={label} {...props} />;
      case "email":
        return (
          <div className="input-component">
            <div className="input-with-icon">
              <input type="email" className="input-field email" {...props} />
              <label className="input-label">{label}</label>
            </div>
            <div className="icon-container">
              <img src={icon} alt={label} />
            </div>
          </div>
        );
      case "select":
        return (
          <SelectInput
            placeholder={placeholder}
            label={label}
            options={options}
            value={selectedValue}
            onChange={handleSelectChange}
            {...props}
          />
        );
      case "radio":
        return (
          <div key="radio-wrapper" className="radio-wrapper">
            <label className="input-radio-label">
              <img src={labelImage} alt={label} />
              <span>{label}</span>
            </label>
            <Form.Check
              type="radio"
              label={radioLabel}
              className="radio-input"
              {...props}
            />
          </div>
        );
      default:
        return <input type="text" {...props} />;
    }
  };

  return <div className="input-component">{renderInput()}</div>;
};

export default Input;
