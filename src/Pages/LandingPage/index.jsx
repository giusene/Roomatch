import { Link } from 'react-router-dom';
import styles from './LandingPage.module.scss';
import homeHero from './../../libs/img/homehero.jpeg';
import Footer from './../../components/Footer/Footer'

const LandingPage = () => {
  return (
    <>
      <div
        className={styles.main}
        style={{ backgroundImage: `url(${homeHero})` }}
      >
        <div className={styles.mask}>
          <div className={styles.title}>
            <h1>FIND YOUR PERFECT ROOMMATE</h1>
          </div>
          <div className={styles.btnSet}>
            <Link to={'/registration'}>Registrati</Link>
            <Link to={'/login'}>Login</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
