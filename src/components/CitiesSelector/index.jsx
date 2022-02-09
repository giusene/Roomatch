import { useEffect, useState } from "react";
import { cities } from "./../../libs/cities";
import { provData } from "./../../libs/prov";

const CitiesSelector = ({handleInputCities}) => {
  const [prov, setProv] = useState("AG");
  const [filteredCities, setFilteredCities] = useState([]);

  useEffect(() => {
    setFilteredCities(cities.filter((item) => prov === item.sigla));
  }, [prov]);

  return (
    <>
      <select name='city' onChange={(e) => {
          setProv(e.target.value)
          handleInputCities('city', e.target.value)
          }}>
        {provData.map((item, index) => (
          <option value={item.sigla} key={index}>
            {item.nome}
          </option>
        ))}
      </select>

      <select name='town' onChange={(e) => {
          handleInputCities('town', e.target.value)
          }} >
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
