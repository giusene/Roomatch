import { Link } from "react-router-dom";
import styles from "./LandingPage.module.scss";
import homeHero from "./../../libs/img/home-hero-2.jpg";
import Footer from "./../../components/Footer/Footer";
import Body from "../../components/LandingPageBody/LandingPageBody";

const LandingPage = () => {
  return (
    <>
      <div
        className={styles.main}
        style={{ backgroundImage: `url(${homeHero})` }}
      >
        <div className={styles.logoContainer}>
          <Link to={"/list"}>
            <div className={styles.logo}></div>
          </Link>
        </div>
        <div className={styles.mask}>
          <div className={styles.title}>
            <h1>FIND YOUR PERFECT ROOMMATE</h1>
          </div>
          <div className={styles.btnSet}>
            <Link className={styles.signInBtn} to={"/login"}>
              Sign in!
            </Link>
            <Link className={styles.registerLink} to={"/registration"}>
              Don’t have an account? Register!
            </Link>
          </div>
        </div>
      </div>
      <Body />
      <Footer landing={true} />
    </>
  );
};

export default LandingPage;
