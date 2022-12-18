import React from "react";
import {useJobContext} from "../contexts/jobContext";
import { PRIORITY_OPTIONS} from "../constants/contants";

const UseCreateJob = props => {
  const [jobs, setJobs] = useJobContext()

  const handleCreateJob = job => {
    console.log(job)
    const newJob = {
      id: Date.now(),
      name: job.name,
      priority: job.priority,
      order: PRIORITY_OPTIONS.find((option) => option.value === job.priority).order
    }
    localStorage.setItem('jobs', JSON.stringify([newJob, ...jobs]))
    setJobs([...jobs, newJob])
  }

  console.log(jobs)
  return {
    handleCreateJob
  }
}

export default UseCreateJob;
