import { useEffect, useState } from "react";
import { cities } from "./../../libs/cities";
import { provData } from "./../../libs/prov";
import styles from "./CitiesSelector.module.scss";
const CitiesSelector = ({ handleInputCities, values }) => {
  const [prov, setProv] = useState(values.city);
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    setFilteredCities(cities.filter((item) => prov === item.sigla));
  }, [prov]);

  return (
    <>
      <select
        className={styles.select}
        name="city"
        value={values.city}
        onChange={(e) => {
          setProv(e.target.value);
          handleInputCities("city", e.target.value);
        }}
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
        onChange={(e) => {
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
