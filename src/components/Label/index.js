import "./label.css"

const Label = ({ image, label }) => {
  return (
    <div className="d-inline-block label rounded mt-3">
      <p className="mb-0 p-1">
        {image && <img src={image} alt={label} />} {label}
      </p>
    </div>
  );
};

Label.defaultProps = {
  image: null,
  label: "Label",
};

export default Label;