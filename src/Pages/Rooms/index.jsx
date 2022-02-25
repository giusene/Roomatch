import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Rooms.module.scss";
import RoomCard from "../../components/RoomCard/RoomCard";
import { httpPOST } from "../../libs/http";
import CitiesFilter from "./../../components/CitiesFilter";
import PlaceHolder from "../../components/PlaceHolder";
import Footer from "../../components/Footer/Footer";

const Rooms = () => {
  const user = useSelector(state => state.user);
  const [roomsList, setRoomList] = useState([]);
  const [result, setResult] = useState(false);
  const [filter, setFilter] = useState({
    city: user.city,
    town: user.town,
  });

  useEffect(() => {
    httpPOST("/getrooms", user.iam).then(data => setRoomList(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setNoFilter = () => {
    setFilter({
      city: null,
      town: user.town,
    });
  };

  return (
    <>
      <div className={styles.main}>
        <h3 className={styles.title}>Find your perfect Room!</h3>
        <div className={styles.filter}>
          <CitiesFilter
            filter={filter}
            setResult={setResult}
            setFilter={setFilter}
            town={user.town}
            city={user.city}
          />
          <button className={styles.clearFilterBtn} onClick={setNoFilter}>
            No filter
          </button>
        </div>
        <div className={styles.cardsWrapper}>
          {roomsList.map(
            room =>
              !user.matches.map(item => item.roomId).includes(room._id) &&
              room.roomOwner !== user._id &&
              (filter.city ? (
                filter.city === room.city && (
                  <RoomCard
                    setResult={setResult}
                    filter={filter.city}
                    room={room}
                    key={room._id}
                  />
                )
              ) : (
                <RoomCard
                  setResult={setResult}
                  filter={filter.city}
                  room={room}
                  key={room._id}
                />
              ))
          )}
          {!result && <PlaceHolder />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Rooms;
