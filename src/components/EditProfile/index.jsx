import styles from "./EditProfile.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { IoIosCloseCircle } from "react-icons/io";
import { changeChar } from "./../../store/actions";
import { useState } from "react";
import CitiesSelector from "../CitiesSelector";

const EditProfile = ({ setModal }) => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: user.name,
    surname: user.surname,
    age: user.age,
    gender: user.gender,
    city: user.city,
    town: user.town,
  });

  const handleInputCities = (input, value) => {
    setForm({
      ...form,
      [input]: value,
    });
  };

  const HandleSubmit = e => {
    e.preventDefault();

    dispatch(
      changeChar(
        [
          {
            propName: "name",
            value: form.name,
          },
          {
            propName: "surname",
            value: form.surname,
          },
          {
            propName: "age",
            value: form.age,
          },
          {
            propName: "gender",
            value: form.gender,
          },
          {
            propName: "city",
            value: form.city,
          },
          {
            propName: "town",
            value: form.town,
          },
        ],
        user._id
      )
    );
    setModal(false);
  };

  return (
    <div className={styles.main}>
      <div className={styles.modal}>
        <div className={styles.btnWrapper}>
          <IoIosCloseCircle onClick={() => setModal(false)} />
        </div>
        <form onSubmit={e => HandleSubmit(e)}>
          <input
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            type="text"
            required
            placeholder="Name"
          />
          <input
            value={form.surname}
            onChange={e => setForm({ ...form, surname: e.target.value })}
            type="text"
            required
            placeholder="Surname"
          />
          <input
            value={form.age}
            onChange={e => setForm({ ...form, age: e.target.value })}
            type="text"
            required
            placeholder="Age"
          />
          <select
            onChange={e => setForm({ ...form, gender: e.target.value })}
            name="gender"
            id="gender"
            placeholder="Gender"
            value={form.gender}
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {/* <input
            value={form.gender}
            onChange={e => setForm({ ...form, gender: e.target.value })}
            type="text"
          /> */}
          <CitiesSelector handleInputCities={handleInputCities} values={form} />
          <button>Salva</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
