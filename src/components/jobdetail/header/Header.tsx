import React, { FC } from "react";
import { IJob } from "../../../types/job";
import Bookmark from "../Bookmark";
import general_styles from "./../JobDetail.module.css";
import styles from "./header.module.css";
import { ReactComponent as ShareImg } from "../../../images/share.svg";

interface HeaderProps {
  id: IJob["id"];
}

const Header: FC<HeaderProps> = ({ id }) => {
  return (
    <>
      <div className={styles.job_details}>
        <h1>Job Details</h1>
        <div className={styles.svg_desktop}>
          <div className="flex">
            <Bookmark id={id} />
            <h5 className={styles.save_text}>Save to my list</h5>
          </div>
          <div className={styles.share_block}>
            <ShareImg />
            <h5 className={styles.share_text}>Share</h5>
          </div>
        </div>
      </div>
      <div className={general_styles.separator} />
      <div className={styles.svg_mobile}>
        <div className="flex">
          <Bookmark id={id} />
          <h5 className={styles.save_text}>Save to my list</h5>
        </div>
        <div className={styles.share_block}>
          <ShareImg />
          <h5 className={styles.share_text}>Share</h5>
        </div>
      </div>
    </>
  );
};
export default Header;
