import styles from "./Footer.module.scss";

const Footer = ({ landing = false }) => {
  const year = new Date().getFullYear();

  return (
    <div
      className={landing ? styles.footerWrapperLanding : styles.footerWrapper}
    >
      <div className={styles.footer}>
        <div className={styles.links}>
          <ul>
            <li>
              <h2>Policy</h2>
            </li>
            <li>Community Policy</li>
            <li>Privacy and cookies</li>
          </ul>

          <ul>
            <li>
              <h2>Contact us</h2>
            </li>
            <li>roomatch@info.com</li>
            <li>Sede legale: via blablabla, 16 (CT) 95125</li>
          </ul>
        </div>
        <hr />
        <div className={styles.trademark}>
          <p>ROOMATCH - All Rights Reserved © - {year}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
