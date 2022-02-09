// import styles from "./SubscribeFormContainer.module.scss";

import { useState } from "react";
import FirstStep from "./registrationSteps/FirstStep";
import SecondStep from "./registrationSteps/SecondStep";
import ThirdStep from "./registrationSteps/ThirdStep";

const initialForm = {
  photo: "",
  fullname: "",
  age: "",
  email: "",
  password: "",
  city: "",
};

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

  switch (step) {
    case 1:
      return (
        <div className="RegistrationForm">
          <FirstStep
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    case 2:
      return (
        <div className="RegistrationForm">
          <SecondStep
            prevStep={prevStep}
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
    case 3:
      return (
        <div className="RegistrationForm">
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
