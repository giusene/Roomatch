import styles from "./EditRoomAdForm.module.scss";
import { useState } from "react";
import FirstStepForm from "./adsSteps/FirstStepForm";
import SecondStepForm from "./adsSteps/SecondStepForm";
import ThirdStepForm from "./adsSteps/ThirdStepForm";
import HeaderAddRoomForm from "../HeaderAddRoomAdForm/HeaderAddRoomForm";
import { useLocation } from "react-router-dom";

const EditRoomAdForm = () => {
  const infoFromUrl = useLocation();
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState(infoFromUrl.state);
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleInputData = input => e => {
    setFormData({
      ...formData,
      [input]: e.target.value,
    });
  };

  const setImage = input => {
    let newPhotos = [...formData.roomPhotos, input];
    setFormData({
      ...formData,
      roomPhotos: newPhotos,
    });
  };

  const handleInputCities = (input, value) => {
    setFormData({
      ...formData,
      [input]: value,
    });
  };

  const handleInputPref = (input, e) => {
    setFormData({
      ...formData,
      friendlyWith: {
        ...formData.friendlyWith,
        [input]: e.target.checked ? "1" : "0",
      },
    });
  };

  const handleAbout = (input, e) => {
    setFormData({
      ...formData,
      aboutFlat: { ...formData.aboutFlat, [input]: e.target.value },
    });
  };

  const handleRoommates = (input, e) => {
    setFormData({
      ...formData,
      roommates: { ...formData.roommates, [input]: e.target.value },
    });
  };

  const handleAboutCheck = (input, e) => {
    setFormData({
      ...formData,
      aboutFlat: {
        ...formData.aboutFlat,
        [input]: e.target.checked ? true : false,
      },
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
            handleInputCities={handleInputCities}
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
            handleRoommates={handleRoommates}
            setImage={setImage}
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
export default EditRoomAdForm;
