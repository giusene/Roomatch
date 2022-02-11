import { httpPOST } from "../../../libs/http";
import styles from "./ThirdStep.module.scss";

const ThirdStep = ({ values }) => {
  const { name, surname, age, city } = values;

  const hadleConfirm = (data) => {
    httpPOST("/users", data).then((data) => console.log(data));
  };

  return (
    <div className={styles.container}>
      <p>Name: {name}</p>
      <p>Surname: {surname}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <button onClick={() => hadleConfirm(values)}>Conferma</button>
    </div>
  );
};

export default ThirdStep;
