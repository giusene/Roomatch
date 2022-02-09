import CitiesSelector from "../../CitiesSelector";

const SecondStep = ({
  nextStep,
  handleFormData,
  prevStep,
  values,
  handleInputCities,
  handleInputPref,
}) => {
  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="wrapper">
      <p className="secondStepText">What roommate are you</p>
      <form onSubmit={(e) => submitFormData(e)}>
        <div className="inputWrapper">
          <label htmlFor="age">Age*</label>
          <input
            value={values.age}
            onChange={handleFormData("age")}
            name="age"
            id="age"
            type="number"
            placeholder="Your age"
            min="18"
            max="90"
            required
          />

          <label htmlFor="gender">gender*</label>
          <select
            defaultValue={"DEFAULT"}
            onChange={handleFormData("gender")}
            name="gender"
            id="gender"
            placeholder="gender"
            required
          >
            <option value="DEFAULT" disabled>
              gender
            </option>
            <option value={values.genre}>M</option>
            <option value={values.genre}>F</option>
          </select>

          <label htmlFor="City">City*</label>
          <CitiesSelector handleInputCities={handleInputCities} />
          <fieldset>
            <legend>I'm</legend>
            <label htmlFor="lgbtq">LGBTQ+</label>
            <input
              type="checkbox"
              name="action"
              id="lgbtq"
              value={values.lgbt}
              onChange={(e) => handleInputPref("lgbtq", e)}
            />
            <br />
            <label htmlFor="multicultural">Multicultural</label>
            <input
              value={values.multicultural}
              onChange={(e) => handleInputPref("multicultural", e)}
              type="checkbox"
              name="action"
              id="multicultural"
            />
            <br />

            <label htmlFor="musician">Musician</label>
            <input
              value={values.musician}
              onChange={(e) => handleInputPref("musician", e)}
              type="checkbox"
              name="action"
              id="musician"
            />
            <br />
            <label htmlFor="pets">Pet owner</label>
            <input
              value={values.pets}
              type="checkbox"
              onChange={(e) => handleInputPref("pets", e)}
              name="action"
              id="pets"
            />
            <br />
            <label htmlFor="veg">Veg</label>
            <input
              value={values.veg}
              onChange={(e) => handleInputPref("veg", e)}
              type="checkbox"
              name="action"
              id="veg"
            />
            <br />
            <label htmlFor="party">Party lover</label>
            <input
              value={values.party}
              onChange={(e) => handleInputPref("party", e)}
              type="checkbox"
              name="action"
              id="party"
            />
          </fieldset>
        </div>
      </form>
      <button onClick={prevStep}>{"<"}</button>
      <button onClick={nextStep}>{">"}</button>
    </div>
  );
};

export default SecondStep;
