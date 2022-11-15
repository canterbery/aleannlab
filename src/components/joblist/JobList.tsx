import React, { FC, useState } from "react";
import { IJob } from "../../types/job";
import JobCard from "./jobcard/JobCard";
import general_styles from "./JobList.module.css";

import PaginationBar from "./PaginationBar";

interface JobListProps {
  jobs: IJob[];
  windowWidth: number;
}

const JobList: FC<JobListProps> = ({ jobs, windowWidth }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [jobsPerPage, setJobsPerPage] = useState<number>(6);
  const lastJobIndex = currentPage * jobsPerPage;
  const firstJobIndex = lastJobIndex - jobsPerPage;
  const currentJobs = jobs.slice(firstJobIndex, lastJobIndex);

  return (
    <>
      <div className={general_styles.container}>
        {currentJobs.map((item) => {
          return (
            <JobCard
              key={item.id}
              id={item.id}
              pictures={item.pictures}
              title={item.title}
              name={item.name}
              address={item.address}
              updatedAt={item.updatedAt}
              windowWidth={windowWidth}
            />
          );
        })}
        <PaginationBar
          totalJobs={jobs.length}
          jobsPerPage={jobsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default JobList;
