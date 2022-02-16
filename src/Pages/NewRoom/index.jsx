import AddRoomAdForm from './../../components/AddRoomAdForm'
import styles from './NewRoom.module.scss';

const NewRoom = () => {
    return (
        <div className={styles.main}>
            <AddRoomAdForm />
        </div>
    )
}

export default NewRoom