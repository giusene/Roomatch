import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styles from './Messages.module.scss'

const Messages = () => {
    const discussion = useLocation();
    const user = useSelector(state => state.user);

    return (
        <div className={styles.main}>
           {console.log(discussion.state)}
           {console.log(user)}
        </div>
    )
} 

export default Messages