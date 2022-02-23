import AddRoomAdForm from "./../../components/AddRoomAdForm";
import styles from "./NewRoom.module.scss";

const NewRoom = () => {
  return (
    <div className={styles.main}>
      <div className={styles.image}></div>
      <div className={styles.form}>
        <AddRoomAdForm />
      </div>
    </div>
  );
};

export default NewRoom;
