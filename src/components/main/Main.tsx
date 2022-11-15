import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { IJob } from "../../types/job";
import JobDetail from "../jobdetail/JobDetail";
import JobList from "../joblist/JobList";

type MainProps = {
  dataSource: IJob[];
  windowWidth: number;
};

export const Main: FC<MainProps> = ({ dataSource, windowWidth }) => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Navigate to="jobs" />} />
        <Route path="/" element={<Navigate to="jobs" />} />
        <Route
          path="jobs"
          element={<JobList jobs={dataSource} windowWidth={windowWidth} />}
        />
        <Route
          path={"/jobs/:id"}
          element={<JobDetail jobs={dataSource} windowWidth={windowWidth} />}
        />
      </Routes>
    </>
  );
};
