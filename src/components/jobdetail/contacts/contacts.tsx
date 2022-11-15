import React, { FC } from "react";
import { IJob } from "../../../types/job.js";
import general_styles from "./../JobDetail.module.css";
import styles from "./style.module.css";
import Circle from "./../../../images/circle.svg";
import Location from "./../../../images/location.svg";

interface MapProps {
  address: IJob["address"];
  phone: IJob["phone"];
  email: IJob["email"];
  location: IJob["location"];
  name: IJob["name"];
}

const Contacts: FC<MapProps> = ({ name, address, phone, email, location }) => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts_hide}>
        <h1 className={styles.contacts_text}>Contacts</h1>
        <div className={general_styles.separator} />
      </div>
      <div className={styles.contacts_map}>
        <div className={styles.contacts_description}>
          <div className={styles.contacts_wrapper}>
            <h2 className={styles.name}>
              Department name.
              <br /> {name}
            </h2>
            <div className={styles.location_block}>
              <img className={styles.location} src={Location} />
              <h3 className={styles.description}>{address}</h3>
            </div>
            <div className={styles.phone_email}>
              <h3 className={styles.description}>{phone},</h3>
              <h3 className={styles.description}>{email}</h3>
            </div>
          </div>
          <img className={styles.circle} src={Circle} />
        </div>
        <iframe
          className={styles.map}
          src={`//maps.google.com/maps?q=${location.lat},${location.long}&z=4&amp&output=embed`}
        ></iframe>
      </div>
    </div>
  );
};
export default Contacts;
