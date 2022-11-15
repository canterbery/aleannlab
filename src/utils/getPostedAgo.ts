import React from "react";

export default function getPostedAgo(date: string) {
  const today = new Date().getTime();
  const currentDate = new Date(date).getTime();
  let result = "";
  let difference = today - currentDate;
  let calculate = difference / (1000 * 3600 * 24);
  if (calculate > 360) {
    result = `${Math.floor(calculate / 360)} years`;
  } else if (calculate < 1) {
    result = `${Math.floor(calculate * 24)} hours`;
  } else {
    result = `${Math.floor(calculate)} days`;
  }
  return `Posted ${result} ago`;
}
