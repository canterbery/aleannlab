import styles from "./JobDetail.module.css";

export const ApplyButton = () => {
  return (
    <div className={styles.apply_button__wrapper}>
      <button className={styles.apply_button}>
        <h6>APPLY NOW</h6>
      </button>
    </div>
  );
};
