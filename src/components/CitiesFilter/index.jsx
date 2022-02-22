import { useEffect, useState } from "react";
import { cities } from "./../../libs/cities";
import { provData } from "./../../libs/prov";
import styles from "./CitiesFilter.module.scss";

const CitiesFilter = ({ filter, setFilter, town, city }) => {
  const [prov, setProv] = useState(city);
  const [changeTown, setChangeTown] = useState(town)
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    setFilteredCities(cities.filter((item) => prov === item.sigla));
  }, [prov]);

  return (
    <>
      <select
        className={styles.select}
        name="city"
        onChange={(e) => {
          setProv(e.target.value);
          setFilter({...filter, city: e.target.value})
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
        value={changeTown}
        onChange={(e) => {
        setChangeTown(e.target.value)
        setFilter({...filter, town: e.target.value})
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

export default CitiesFilter;
