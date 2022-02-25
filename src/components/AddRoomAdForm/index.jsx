import styles from "./AddRoomAdForm.module.scss";
import { useState } from "react";
import FirstStepForm from "./adsSteps/FirstStepForm";
import SecondStepForm from "./adsSteps/SecondStepForm";
import ThirdStepForm from "./adsSteps/ThirdStepForm";
import HeaderAddRoomForm from "../HeaderAddRoomAdForm/HeaderAddRoomForm";
import { useSelector } from "react-redux";

const AddRoomAdForm = () => {
  const user = useSelector(state => state.user);
  const [step, setStep] = useState(1);

  const initialForm = {
    roomOwner: user._id,
    roomType: "Single",
    rentPrice: "0",
    roommates: {
      females: "0",
      males: "0",
      others: "0",
    },
    roomPhotos: [],
    aboutFlat: {
      bedrooms: "0",
      bathrooms: "0",
      kitchen: "0",
      airCond: false,
      billsIncl: false,
      wifi: false,
    },
    roomAddress: "",
    city: "AG",
    town: "Agrigento",
    friendlyWith: {
      lgbtq: "0",
      multicultural: "0",
      pet_owner: "0",
      veg: "0",
      party_lover: "0",
      smooker: "0",
    },
  };

  const [formData, setFormData] = useState(initialForm);
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

  const handleCity = (city, town) => {
    setFormData({
      ...formData,
      city: city,
      town: town,
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
            handleCity={handleCity}
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
export default AddRoomAdForm;
