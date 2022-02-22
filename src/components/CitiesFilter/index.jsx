// import { useEffect } from "react";
import { useState } from "react";
// import { cities } from "./../../libs/cities";
import { provData } from "./../../libs/prov";
import styles from "./CitiesFilter.module.scss";

const CitiesFilter = ({ filter, setFilter, town, city }) => {
  const [prov, setProv] = useState(city);
  // const [changeTown, setChangeTown] = useState(town);
  // const [filteredCities, setFilteredCities] = useState([]);

  // useEffect(() => {
  //   setFilteredCities(cities.filter(item => prov === item.sigla));
  // }, [prov]);

  const changeProv = e => {
    setProv(e.target.value);
    // setFilteredCities(cities.filter(item => prov === item.sigla));

    setFilter({
      // town: cities.filter(item => e.target.value === item.sigla)[0].nome,
      city: e.target.value,
    });
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

      {/* <select
        className={styles.select}
        name="town"
        value={changeTown}
        defaultValue={filteredCities[0]}
        onChange={e => {
          setChangeTown(e.target.value);
          setFilter({ ...filter, town: e.target.value });
        }}
      >
        {filteredCities.map((city, index) => (
          <option value={city.nome} key={index}>
            {city.nome}
          </option>
        ))}
      </select> */}
    </>
  );
};

export default CitiesFilter;
