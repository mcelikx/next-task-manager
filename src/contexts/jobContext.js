import {createContext, useContext, useEffect, useState} from "react";

const JobContext = createContext();

const JobContextProvider = props => {
  const { children } = props;
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    fetch('http://54.144.76.108/tasks')
      .then((res) => res.json())
      .then((data) => {
        setJobs(data)
      })
  }, [])
  return (
    <JobContext.Provider value={[jobs, setJobs]}>
      {children}
    </JobContext.Provider>
  )
}

export default JobContextProvider;

export const useJobContext = () => useContext(JobContext);
