import styles from "./SubscribeFormContainer.module.scss";

const SubscribeFormContainer = (props) => {
  const logo = props.logo || "ROOMATCH";
  const stepTitle = props.stepTitle || 'Create your profile'
  return (
    <>
      <h1 className={styles.logo}>{logo}</h1>
      <p className={styles.stepText}>{stepTitle}</p>
      
      <div className={styles.stepperWrapper}>
        <div className={`${styles.stepCounter} ${styles.active}`}></div>
        <div className={styles.stepCounter}></div>
        <div className={styles.stepCounter}></div>
      </div>
      <div>
        <button className={styles.closeBtn}>X</button>
      </div>
      <div>
        <button className={styles.nextBtn}>{`>`}</button>
      </div>
    </>
  );
};
export default SubscribeFormContainer;
