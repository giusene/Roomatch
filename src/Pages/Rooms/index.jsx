import { useEffect, useState } from "react";
import styles from "./Rooms.module.scss";
import RoomCard from "../../components/RoomCard/RoomCard";
import { httpGET } from "../../libs/http";

const Rooms = () => {
  const [roomsList, setRoomList] = useState([]);

  useEffect(() => {
    httpGET('/rooms').then(data => setRoomList(data))
  }, []);



  return (
    <div className={styles.main}>
      {roomsList.map((room) => (
        <RoomCard room={room} key={room._id} />
      ))}
    </div>
  );
};

export default Rooms;
