import React, { FC, useEffect } from "react";
import styles from "./JobList.module.css";
import { ReactComponent as LeftArrow } from "../../images/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../images/right-arrow.svg";

type PaginationBarProps = {
  totalJobs: number;
  jobsPerPage: number;
  setCurrentPage: (item: number) => void;
};
const PaginationBar: FC<PaginationBarProps> = ({
  totalJobs,
  jobsPerPage,
  setCurrentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className={styles.navigation_wrapper}>
      <div className="flex items-center">
        <LeftArrow className={styles.navigation_left_arrow} />{" "}
        <div className={styles.navigation_separator} />
      </div>
      <div className={styles.navigation_numbers}>
        {pages.map((item, i) => (
          <h4
            key={i}
            className={styles.navigation_number}
            onClick={() => setCurrentPage(item)}
          >
            {item}
          </h4>
        ))}
      </div>
      <div className="flex items-center">
        <div className={styles.navigation_separator} />
        <RightArrow className={styles.navigation_right_arrow} />
      </div>
    </div>
  );
};
export default PaginationBar;
