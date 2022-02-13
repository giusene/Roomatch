import MatchesProfiles from '../../components/MatchesProfiles'
import styles from './Matches.module.scss'

const Matches = () => {
    return (
        <div className={styles.main}>
            <h4>Matches Page</h4>
            <MatchesProfiles />
        </div>
    )
} 

export default Matches