import EditRoomAdForm from "./../../components/EditRoomAdForm";
import styles from "./EditRoom.module.scss";

const EditRoom = () => {
  return (
    <div className={styles.main}>
      <div className={styles.image}></div>
      <div className={styles.form}>
        <EditRoomAdForm />
      </div>
    </div>
  );
};

export default EditRoom;
