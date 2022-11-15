import React, { FC } from "react";
import { IJob } from "../../../types/job.js";
import general_styles from "./../JobDetail.module.css";
import styles from "./style.module.css";

interface Additionalrops {
  employment_type: IJob["employment_type"];
  benefits: IJob["benefits"];
}

const AdditionalInfo: FC<Additionalrops> = ({ employment_type, benefits }) => {
  return (
    <div>
      <h1 className={styles.additional_text}>Additional info</h1>
      <div className={general_styles.separator} />
      <h5 className={styles.title_text}>Employment type</h5>
      <div className={styles.employmnet_blocks}>
        {employment_type.map((type: string, i: number) => {
          return (
            <div key={i} className={styles.employmnet_block__wrapper}>
              <h4 className={styles.employmnet_block__text}>{type}</h4>
            </div>
          );
        })}
      </div>
      <h5 className={styles.title_text}>Benefits</h5>
      <div className={styles.benefits_blocks}>
        {benefits.map((benefit: string, i: number) => {
          return (
            <div key={i} className={styles.benefits_block__wrapper}>
              <h4 className={styles.benefits_block__text}>{benefit}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AdditionalInfo;
