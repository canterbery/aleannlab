import React, { useEffect, useState } from "react";
import { IJob } from "./types/job";
import { mockData } from "./mock-data/data";
import { Main } from "./components/main/Main";

function App() {
  const url: string =
    "https://api.json-generator.com/templates/ZM1r0eic3XEy/data";
  const token: string = "wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu";
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [status, setStatus] = useState<"Loading" | "Error" | "Success">(
    "Loading"
  );
  useEffect(() => {
    const fetchJobs = (URL: string) => {
      fetch(URL, {
        headers: { Authorization: "Bearer " + token },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setJobs(data);
          setStatus("Success");
        })
        .catch(() => setStatus("Error"));
    };

    fetchJobs(url);
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  function handleWindowResize() {
    setWindowWidth(window.innerWidth);
  }

  return (
    <>
      {status === "Success" ? (
        <Main dataSource={jobs} windowWidth={windowWidth} />
      ) : (
        <Main dataSource={mockData} windowWidth={windowWidth} />
      )}
    </>
  );
}

export default App;
