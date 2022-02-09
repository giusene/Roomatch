const SecondStep = ({ nextStep, handleFormData, prevStep, values }) => {
  const submitFormData = (e) => {
    e.prmulticulturalDefault();
    nextStep();
  };

  return (
    <div className='wrapper'>
      <p className='secondStepText'>Create your profile</p>
      <form onSubmit={(e) => submitFormData(e)}>
        <div className='inputWrapper'>
          <label htmlFor='photo'>Age*</label>
          <input
            value={values.age}
            onChange={handleFormData('age')}
            name='age'
            id='age'
            type='number'
            placeholder='Your age'
            min='18'
            max='90'
            required
          />
          <label htmlFor='fullname'>City*</label>
          <input
            value={values.city}
            onChange={handleFormData('city')}
            name='city'
            id='city'
            type='text'
            placeholder='Your city'
            required
          />
          <fieldset>
            <legend>I'm</legend>
            <label htmlFor='lgbtq'>LGBTQ+</label>
            <input type='radio' name='action' id='lgbtq' value={values.lgbt} />
            <br />
            <label htmlFor='multicultural'>Multicultural</label>
            <input
              value={values.multicultural}
              onChange={handleFormData('multicultural')}
              type='radio'
              name='action'
              id='multicultural'
            />
            <br />
            <label htmlFor='musician'>Musician</label>
            <input
              value={values.musician}
              onChange={handleFormData('musician')}
              type='radio'
              name='action'
              id='musician'
            />
            <br />
            <label htmlFor='pets'>Pet owner</label>
            <input
              value={values.pets}
              type='radio'
              onChange={handleFormData('pets')}
              name='action'
              id='pets'
            />
            <br />
            <label htmlFor='veg'>Veg</label>
            <input
              value={values.veg}
              onChange={handleFormData('veg')}
              type='radio'
              name='action'
              id='veg'
            />
            <br />
            <label htmlFor='party'>Party lover</label>
            <input
              value={values.party}
              onChange={handleFormData('party')}
              type='radio'
              name='action'
              id='party'
            />
          </fieldset>
        </div>
      </form>
      <button onClick={prevStep}>{'<'}</button>
      <button onClick={nextStep}>{'>'}</button>
    </div>
  );
};

export default SecondStep;
