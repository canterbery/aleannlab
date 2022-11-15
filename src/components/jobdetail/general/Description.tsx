import { FC } from "react";

type DescriptionProps = {
  jobDescription: string;
};

export const Description: FC<DescriptionProps> = ({ jobDescription }) => {
  let benefits = jobDescription.slice(
    jobDescription.indexOf("Compensation & Benefits:")
  );
  let description = jobDescription
    .slice(0, jobDescription.indexOf("Responsopilities:"))
    .trim();
  let responsibilities = jobDescription.slice(
    jobDescription.indexOf("Responsopilities:"),
    jobDescription.indexOf("Compensation & Benefits:")
  );
  responsibilities = responsibilities.replace("Responsopilities:", "").trim();
  benefits = benefits
    .replace("Compensation & Benefits:", "")
    .replace(/\n|\r/g, "")
    .trim();
  let benefitsArray = benefits.split(".");

  return (
    <div>
      {description}
      <h3>Responsopilities:</h3>
      {responsibilities}
      <h3>Compensation & Benefits:</h3>
      <ul>
        {benefitsArray.map((item) => {
          if (item) return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
