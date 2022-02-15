import styles from "./AddRoomAdForm.module.scss";
import { useState } from "react";
import HeaderForms from "../HeaderForms/HeaderForms";
import FirstStepForm from "./adsSteps/FirstStepForm";
import SecondStepForm from "./adsSteps/SecondStepForm";
// import ThirdStep from "./adsSteps/ThirdStep";

const initialForm = {
  roomType: "",
  // roomOwner: "",
  // roomAddress: "",
  // city: "",
  // town: "",
  // roomPhotos: [],
  // roommates: {
  //   females: 0,
  //   males: 0,
  // },
  aboutFlat: {
    bedrooms: 0,
    bathrooms: 0,
    kitchen: 0,
    airCond: 0,
    billsIncl: 0,
    wifi: 0,
  },
  address: "",
  // ilike: [],
  // wholikesme: [],
  // matches: [],
};

const AddRoomAdForm = () => {
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
  const setImage = (input) => {
    setFormData({
      ...formData,
      photo: input,
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
      aboutFlat: { ...formData.aboutFlat, [input]: e.target.checked ? 1 : 0 },
    });
  };
  switch (step) {
    case 1:
      return (
        <div className={styles.containerForm}>
          <HeaderForms step={step} />
          <FirstStepForm
            nextStep={nextStep}
            handleFormData={handleInputData}
            handleInputPref={handleInputPref}
            handleInputCities={handleInputCities}
            setImage={setImage}
            values={formData}
          />
        </div>
      );
    case 2:
      return (
        <div className={styles.containerForm}>
          <HeaderForms step={step} />
          <SecondStepForm
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
          {/* <HeaderForms step={step} />
          <ThirdStep prevStep={prevStep} values={formData} /> */}
        </div>
      );
    default:
      return (
        <div className={styles.containerForm}>
          <FirstStepForm
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );
  }
};
export default AddRoomAdForm;
