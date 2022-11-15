import React, { FC } from "react";
import { IJob } from "../../../types/job";
import { Link } from "react-router-dom";
import Location from "../../../images/location.svg";
import styles from "./JobCard.module.css";
import Stars from "./JobRating";
import Bookmark from "../../jobdetail/Bookmark";
import getPostedAgo from "../../../utils/getPostedAgo";

interface JobCardProps {
  id: IJob["id"];
  pictures: IJob["pictures"];
  title: IJob["title"];
  name: IJob["name"];
  address: IJob["address"];
  updatedAt: IJob["updatedAt"];
  windowWidth: number;
}

const JobCard: FC<JobCardProps> = ({
  id,
  pictures,
  title,
  name,
  address,
  updatedAt,
  windowWidth,
}) => {
  return (
    <>
      {windowWidth >= 639 ? (
        <div className={styles.wrapper}>
          <Link className="cursor-pointer flex" to={`/jobs/${id}`}>
            <div className="flex">
              <img src={pictures[0]} className={styles.logo} alt="logo"></img>
              <div>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.name}>Departament name • {name}</p>
                <div className="flex">
                  <img
                    className={styles.location_logo}
                    src={Location}
                    alt="location"
                  ></img>
                  <p>{address}</p>
                </div>
              </div>
            </div>
          </Link>
          <div className={styles.right_side}>
            <Bookmark id={id} />
            <Stars id={id} />
            <h3 className={styles.post_date}>{getPostedAgo(updatedAt)}</h3>
          </div>
        </div>
      ) : (
        <div className={styles.wrapper}>
          <div className="flex w-full">
            <div className="w-full">
              <div className={styles.mobile_top}>
                <Stars id={id} />
                <h3 className={styles.post_date}>{getPostedAgo(updatedAt)}</h3>
              </div>
              <Link className="cursor-pointer flex" to={`/jobs/${id}`}>
                <img src={pictures[0]} className={styles.logo} alt="logo" />
                <div>
                  <h2 className={styles.title}>{title}</h2>
                  <p className={styles.name}>Departament name • {name}</p>

                  <div className="flex">
                    <img
                      className={styles.location_logo}
                      src={Location}
                      alt="location"
                    ></img>
                    <p>{address}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default JobCard;
