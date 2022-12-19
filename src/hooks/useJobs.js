import React from 'react';
import {useJobContext} from "../contexts/jobContext";

const UseJobs = props => {
  const [jobs, setJobs] = useJobContext()

  const handleDeleteJob = (id) => {
    localStorage.setItem('jobs', JSON.stringify(jobs.filter((job) => job.id !== id)))
    setJobs(jobs.filter((job) => job.id !== id))
  }

  const handleEditJob = (id, priority) => {
    localStorage.setItem('jobs', JSON.stringify(jobs.map((job) => job.id === id ? {...job, priority} : job)))
    setJobs(jobs.map((job) => job.id === id ? {...job, priority: priority} : job))
  }

  const handleClearJobs = () => {
    localStorage.setItem('jobs', null)
  //   reload page to clear jobs from state
    window.location.reload()
  }
  return{
    jobs,
    handleDeleteJob,
    handleEditJob,
    handleClearJobs
  }
}

export default UseJobs;
