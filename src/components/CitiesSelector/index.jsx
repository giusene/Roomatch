import { useEffect, useState } from "react";
import { cities } from "./../../libs/cities";
import { provData } from "./../../libs/prov";

const CitiesSelector = () => {
  const [prov, setProv] = useState("AG");
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    setFilteredCities(cities.filter((item) => prov === item.sigla));
  }, [prov]);

  return (
    <>
      <select onChange={(e) => setProv(e.target.value)}>
        {provData.map((item, index) => (
          <option value={item.sigla} key={index}>
            {item.nome}
          </option>
        ))}
      </select>

      <select>
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
