import { useEffect, useState } from "react";
import { cities } from "./../../libs/cities";
import { provData } from "./../../libs/prov";
import styles from "./CitiesSelector.module.scss";

const CitiesSelector = ({ handleInputCities, values, handleCity }) => {
  const [prov, setProv] = useState(values.city);
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    setFilteredCities(cities.filter(item => prov === item.sigla));
  }, [prov]);

  const changeProv = e => {
    setProv(e.target.value);
    handleCity(
      e.target.value,
      cities.filter(item => e.target.value === item.sigla)[0].nome
    );
  };

  return (
    <>
      <select
        className={styles.select}
        name="city"
        value={prov}
        onChange={e => changeProv(e)}
      >
        {provData.map((item, index) => (
          <option value={item.sigla} key={index}>
            {item.nome}
          </option>
        ))}
      </select>

      <select
        className={styles.select}
        name="town"
        value={values.town}
        onChange={e => {
          handleInputCities("town", e.target.value);
        }}
      >
        {filteredCities.map((city, index) => (
          <option value={city.nome} key={index}>
            {city.nome}
          </option>
        ))}
      </select>
    </>
  );
};

export default CitiesSelector;
