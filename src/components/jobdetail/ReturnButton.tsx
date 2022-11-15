import styles from "./JobDetail.module.css";
import ArrowButton from "./../../images/left-arrow-button.svg";
import { Link } from "react-router-dom";

export const ReturnButton = () => {
  return (
    <Link to={process.env.PUBLIC_URL + "/jobs"}>
      <button className={styles.return_button}>
        <img src={ArrowButton} />
        <h6 className={styles.return_button__text}>RETURN TO JOB BOARD</h6>
      </button>
    </Link>
  );
};
