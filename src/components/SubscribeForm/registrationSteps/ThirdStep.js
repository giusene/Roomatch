const ThirdStep = ({ values }) => {
    const { fullName, age, city } = values;

    return (
        <div>
            <p>Name/Surname: {fullName}</p>
            <p>Age: {age}</p>
            <p>City: {city}</p>
        </div>
    )
}

export default ThirdStep;