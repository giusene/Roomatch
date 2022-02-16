import styles from "./AddRoomAdForm.module.scss";
import { useState } from "react";
import FirstStepForm from "./adsSteps/FirstStepForm";
import SecondStepForm from "./adsSteps/SecondStepForm";
import ThirdStepForm from "./adsSteps/ThirdStepForm";
import HeaderAddRoomForm from "../HeaderAddRoomAdForm/HeaderAddRoomForm";

const initialForm = {
  roomType: "Single",
  rent: '0',
  gender: 'Male',
  roomPhotos: [],
  aboutFlat: {
    bedrooms: 0,
    bathrooms: 0,
    kitchen: 0,
    airCond: false,
    billsIncl: false,
    wifi: false,
  },
  address: "",
  friendlyfor: {
    lgbtq: 0,
    multicultural: 0,
    pet_owner: 0,
    veg: 0,
    party_lover: 0,
    smooker: 0,
  },
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
    let newPhotos = [...formData.roomPhotos, input]
    setFormData({
      ...formData,
      roomPhotos: newPhotos,
    });
  };

  const handleInputPref = (input, e) => {
    // console.log(input, e.target.checked)
    setFormData({
      ...formData,
      friendlyfor: { ...formData.friendlyfor, [input]: e.target.checked ? 1 : 0 },
    });
  };

  const handleAbout = (input, e) => {
    setFormData({
      ...formData,
      aboutFlat: { ...formData.aboutFlat, [input]: e.target.value }
    });
  };

  const handleAboutCheck = (input, e) => {
    setFormData({
      ...formData,
      aboutFlat: { ...formData.aboutFlat, [input]: e.target.checked  ? true : false }
    });
  };

  switch (step) {
    case 1:
      return (
        <div className={styles.containerForm}>
          <HeaderAddRoomForm step={step} />
          <FirstStepForm
            nextStep={nextStep}
            handleFormData={handleInputData}
            handleInputPref={handleInputPref}
            handleAbout={handleAbout}
            handleAboutCheck={handleAboutCheck}
            values={formData}
          />
        </div>
      );
    case 2:
      return (
        <div className={styles.containerForm}>
          <HeaderAddRoomForm step={step} />
          <SecondStepForm
            prevStep={prevStep}
            nextStep={nextStep}
            handleFormData={handleInputData}
            handleInputPref={handleInputPref}
            values={formData}
          />
        </div>
      );
    case 3:
      return (
        <div className={styles.containerForm}>
          <HeaderAddRoomForm step={step} />
          <ThirdStepForm
            prevStep={prevStep}
            formData={formData}
            setImage={setImage}
          />
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
