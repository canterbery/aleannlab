import React, { FC, useState, useEffect } from "react";
import { ReactComponent as Star } from "../../../images/star.svg";
import styles from "../../../components/joblist/jobcard/JobCard.module.css";
import { IJob } from "../../../types/job";

interface JobRatingProps {
  id: IJob["id"];
}

const JobRating: FC<JobRatingProps> = (id) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(null);
  const stars = Array(5).fill(0);

  useEffect(() => {
    const data = localStorage.getItem("stars" + JSON.stringify(id));
    if (data) setCurrentValue(JSON.parse(data));
  }, [id]);

  const handleClick = (value: number) => {
    setCurrentValue(value);
    localStorage.setItem("stars" + JSON.stringify(id), JSON.stringify(value));
  };

  const handleMouseOver = (newHoverValue: any) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
  };

  return (
    <div className={styles.stars_container}>
      <div className="flex">
        {stars.map((_, index) => {
          return (
            <Star
              key={index}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              className={`${styles.star} ${
                (hoverValue || currentValue) > index
                  ? "fill-gray-700"
                  : "fill-gray-400"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};
export default JobRating;
