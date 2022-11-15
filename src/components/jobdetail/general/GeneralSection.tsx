import React, { FC } from "react";
import { IJob } from "../../../types/job.js";
import styles from "./GeneralSection.module.css";
import CalculateDate from "../../../utils/getPostedAgo";
import { Description } from "./Description";

interface GeneralProps {
  description: IJob["description"];
  salary: IJob["salary"];
  title: IJob["title"];
  updatedAt: IJob["updatedAt"];
  windowWidth: number;
}

const GeneralSection: FC<GeneralProps> = ({
  title,
  salary,
  updatedAt,
  description,
  windowWidth,
}) => {
  return (
    <>
      {windowWidth >= 639 ? (
        <>
          <div className="flex justify-between">
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.price_block}>
              <h3 className={styles.price}>
                € {salary.replaceAll("k", " 000").replace("-", "—")}
              </h3>
              <h5>Brutto, per year</h5>
            </div>
          </div>
          <h5 className={styles.date}>{CalculateDate(updatedAt)}</h5>
          <h5 className={styles.description}>
            <Description jobDescription={description} />
          </h5>
        </>
      ) : (
        <>
          <div>
            <h2 className={styles.title}>{title}</h2>
            <div className="flex justify-between items-center mb-[14px]">
              <h5 className={styles.date}>{CalculateDate(updatedAt)}</h5>
              <div className={styles.price_block}>
                <h5>Brutto, per year</h5>
                <h3 className={styles.price}>
                  € {salary.replaceAll("k", " 000").replace("-", "—")}
                </h3>
              </div>
            </div>
          </div>
          <h5 className={styles.description}>
            <Description jobDescription={description} />
          </h5>
        </>
      )}
    </>
  );
};
export default GeneralSection;
