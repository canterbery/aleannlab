import React, { FC } from "react";
import { IJob } from "../../types/job";
import styles from "./JobDetail.module.css";
import Header from "./header/Header";
import General from "./general/GeneralSection";
import AdditionalInfo from "./additional-info/AdditionalInfo";
import AttachedImages from "./attached-images/AttachedImages";
import Contacts from "./contacts/contacts";
import { ApplyButton } from "./ApplyButton";

import { ReturnButton } from "./ReturnButton";
import { useParams } from "react-router-dom";
interface JobDetailProps {
  jobs: IJob[];
  windowWidth: number;
}

const JobDetail: FC<JobDetailProps> = ({ jobs, windowWidth }) => {
  const { id } = useParams();
  const job = jobs.find((item) => item.id === id);

  if (job)
    return (
      <div className={styles.container}>
        <div className={styles.items_between}>
          <div className={styles.left_side}>
            <Header id={job.id} />
            <div className={styles.apply_button__hide}>
              <ApplyButton />
            </div>
            <General
              title={job.title}
              salary={job.salary}
              updatedAt={job.updatedAt}
              description={job.description}
              windowWidth={windowWidth}
            />
            <ApplyButton />
            <div className={styles.additional_attached__blocks}>
              <AdditionalInfo
                employment_type={job.employment_type}
                benefits={job.benefits}
              />

              <AttachedImages pictures={job.pictures} />
            </div>
            <ReturnButton />
          </div>
          <Contacts
            address={job.address}
            phone={job.phone}
            email={job.email}
            location={job.location}
            name={job.name}
          />
        </div>
      </div>
    );

  return <div>ERROR!PAGE NOT FOUND!</div>;
};

export default JobDetail;
