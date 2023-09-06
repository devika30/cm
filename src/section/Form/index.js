import ImageSlider from "../../components/ImageSlider";
import AvatarGroup from "../../components/AvatarGroup";
import Label from "../../components/Label";
import star from "../../images/star.svg";
import lock from "../../images/lock.svg";
import tick from "../../images/tick.svg";
import man from "../../images/man.png";
import male from "../../images/male.png";
import female from "../../images/female.png";
import envelope from "../../images/envelope.png";
import { avatarData } from "./data";
import "./form.css";
import Input from "../../components/Input";

const formLhsContentItems = [
  {
    text: "Real Time Data of Universities to help you to decide",
    imageSrc: star,
    marginClasses: "mt-4 mb-2",
  },
  {
    text: "Dedicated Assistance from our Certified Experts",
    imageSrc: star,
    marginClasses: "my-2",
  },
];

const Form = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="form-container mx-auto col-md-10">
          <div className="row h-100">
            <div className="form-lhs col-lg-5 h-100">
              <div className="pt-5">
                <ImageSlider />
                <h4 className="p-3 text-center mt-4 primary form-lhs-title">
                  Get Best University at Affordable Fee
                </h4>
                <div className="form-lhs-content-container">
                  {formLhsContentItems.map((item, index) => (
                    <div
                      key={index}
                      className={`form-lhs-content rounded py-2 px-3 d-flex align-items-center ${item.marginClasses}`}
                    >
                      <img src={item.imageSrc} alt="Star" className="me-2" />
                      <p className="mb-0 text-center">{item.text}</p>
                    </div>
                  ))}
                </div>
                <div className="form-lhs-absolute-container">
                  <img src={man} width={200} height={220} alt="Man" />
                </div>
              </div>
            </div>
            <div className="form-rhs col-12 col-xl-7 h-100">
              <div className="pt-5 pb-3">
                <h6 className="form-rhs-title primary text-center">
                  Compare & Select from 100+
                </h6>
                <p className="form-rhs-subtitle text-center mb-2">
                  Best University for your Online MBA Course
                </p>

                <div className="d-flex align-items-center justify-content-evenly form-rhs-cosubtitle-container">
                  <div className="form-rhs-cosubtitle">
                    <img src={tick} height={16} alt="Tick" className="ms-1" />
                    <span>No-Cost EMI From</span>
                    <span className="form-rhs-cosubtitle-bold ms-1">
                      {" "}
                      ₹4,999/-
                    </span>
                  </div>
                  <div className="form-rhs-cosubtitle">
                    <img src={tick} height={16} alt="Tick" className="ms-1" />
                    <span> 100% Placement Assistance</span>
                  </div>
                </div>
              </div>

              <form>
                <div className="row mb-4">
                  <div className="col-12 col-md-6 col">
                    <Input
                      type="radio"
                      name="gender-radio"
                      value="male"
                      id="male-radio"
                      label="Male"
                      labelImage={male}
                    />
                  </div>
                  <div className="col-12 col-md-6 col">
                    <Input
                      type="radio"
                      name="gender-radio"
                      value="female"
                      id="female-radio"
                      label="Female"
                      labelImage={female}
                    />
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-12 col-md-6 col">
                    <Input type="text" label="Full name *" />
                  </div>
                  <div className="col-12 col-md-6 col">
                    <Input type="email" label="Email *" icon={envelope} />
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-12 col-md-6 col">
                    <Input type="number" label="Mobile Number *" />
                  </div>
                  <div className="col-12 col-md-6 col">
                    <Input
                      type="text"
                      placeholder="DD/MM/YYYY"
                      label="Date of Birth *"
                    />
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-12 col-md-6 col">
                    <Input
                      label="State *"
                      type="select"
                      placeholder="Select State"
                      options={[
                        { value: "maharashtra", label: "Maharashtra" },
                        {
                          value: "karnataka",
                          label: "Karnataka",
                        },
                        {
                          value: "gujrat",
                          label: "Gujrat",
                        },
                      ]}
                    />
                  </div>
                  <div className="col-12 col-md-6 col">
                    <Input
                      label="City *"
                      type="select"
                      placeholder="Select City"
                      options={[
                        {
                          value: "thane",
                          label: "Thane",
                        },
                        {
                          value: "mumbai",
                          label: "Mumbai",
                        },
                        {
                          value: "bengaluru",
                          label: "Bengaluru",
                        },
                      ]}
                    />
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-12 col">
                    <Input
                      label="Specialization *"
                      type="select"
                      placeholder="Select One"
                      options={[
                        { value: "not decided yet", label: "Not decided yet" },
                        {
                          value: "finance management",
                          label: "Finance Management",
                        },
                        {
                          value: "marketing management",
                          label: "Marketing Management",
                        },
                      ]}
                    />
                  </div>
                </div>

                {/* <Input type="dob" label="Date of Birth" /> */}

                <div className="text-center">
                  <button className="btn form-submit-btn">
                    Find Best University
                    <span>→</span>
                  </button>
                </div>
                <div className="text-center mb-3">
                  <Label
                    image={lock}
                    label="Your personal information is
                    secure with us"
                  />
                </div>
                <div className="form-rhs-footer d-flex justify-content-center align-items-center py-2">
                  <AvatarGroup avatars={avatarData} />
                  <span className="ms-3">Connect with Top CV Experts</span>
                  <span className="ms-2">⭐⭐⭐⭐⭐</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;