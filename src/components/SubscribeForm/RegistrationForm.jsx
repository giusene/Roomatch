import styles from "./RegistrationForm.module.scss";
import { useState } from "react";
import HeaderForms from "../HeaderForms/HeaderForms";
import FirstStep from "./registrationSteps/FirstStep";
import SecondStep from "./registrationSteps/SecondStep";
import ThirdStep from "./registrationSteps/ThirdStep";

const initialForm = {
  iam: {
    lgbtq: 0,
    multicultural: 0,
    pet_owner: 0,
    veg: 0,
    party_lover: 0,
    smooker: 0,
  },
  name: "",
  surname: "",
  email: "",
  password: "",
  gender: "",
  age: 18,
  ilike: [],
  wholikesme: [],
  city: "",
  town: "",
  photo: "https://i.ibb.co/NNVky0R/profile-default.png",
};

// const initialForm = {
//   photo: "",
//   fullname: "",
//   age: "",
//   email: "",
//   password: "",
//   city: "",
// };

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialForm);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleInputData = (input) => (e) => {
    setFormData({
      ...formData,
      [input]: e.target.value,
    });
  };

  const handleInputCities = (input, value) => {
    setFormData({
      ...formData,
      [input]: value,
    });
  };

  const handleInputPref = (input, e) => {
    // console.log(input, e.target.checked)
    setFormData({
      ...formData,
      iam: { ...formData.iam, [input]: e.target.checked ? 1 : 0 },
    });
  };

  switch (step) {
    case 1:
      return (
        <div className={styles.containerForm}>
          <HeaderForms step={step} />
          <FirstStep
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    case 2:
      return (
        <div className={styles.containerForm}>
          <HeaderForms step={step} />

          <SecondStep
            prevStep={prevStep}
            nextStep={nextStep}
            handleFormData={handleInputData}
            handleInputPref={handleInputPref}
            handleInputCities={handleInputCities}
            values={formData}
          />
        </div>
      );
    case 3:
      return (
        <div className={styles.containerForm}>
          <HeaderForms step={step} />
          <ThirdStep prevStep={prevStep} values={formData} />
        </div>
      );
    default:
      return (
        <FirstStep
          nextStep={nextStep}
          handleFormData={handleInputData}
          values={formData}
        />
      );
  }
};

export default RegistrationForm;
