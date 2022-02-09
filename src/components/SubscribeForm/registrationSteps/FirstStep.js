const FirstStep = ({ handleFormData, values, nextStep }) => {
    const submitFormData = (e) => {
        e.preventDefault();
        nextStep();
    };

    return (
        <div>
            <p>Create your profile</p>
            <form onSubmit={(e) => submitFormData(e)}>
                <div>
                    <label htmlFor='photo'>Photo</label>
                    <input
                        value={values.photo}
                        onChange={handleFormData('photo')}
                        name='photo'
                        id='photo'
                        type='text'
                        placeholder='Photo URL'
                        required />
                    <label htmlFor='fullname'>Name / Surname*</label>
                    <input
                        value={values.fullName}
                        onChange={handleFormData('fullname')}
                        name='fullname'
                        id='fullname'
                        type='text'
                        placeholder='Full name'
                        required />
                    <label htmlFor='email'>Email*</label>
                    <input
                        value={values.email}
                        onChange={handleFormData('email')}
                        name='email'
                        id='email'
                        type='email'
                        placeholder='Email'
                        required />
                    <label htmlFor='password'>Password</label>
                    <input
                        value={values.password}
                        onChange={handleFormData('password')}
                        name='password'
                        id='password'
                        type='password'
                        placeholder='Password'
                        required />
                    <label htmlFor='matchpwd'>Confirm password</label>
                    <input
                        value={values.matchPwd}
                        onChange={handleFormData('matchpwd')}
                        name='matchpwd'
                        id='matchpwd'
                        type='password'
                        placeholder='Confirm password'
                        required />
                </div>
            </form>
            <button onClick={nextStep}>{'>'}</button>
        </div>
    )
}

export default FirstStep;