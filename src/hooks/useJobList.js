import React from 'react';
import {useJobContext} from "../contexts/jobContext";

const UseJobList = props => {
  const [jobs, setJobs] = useJobContext()

  const handleDeleteJob = (id) => {
    localStorage.setItem('jobs', JSON.stringify(jobs.filter((job) => job.id !== id)))
    setJobs(jobs.filter((job) => job.id !== id))
  }

  const handleEditJob = (id) => {
    const jobToEdit = jobs.find((job) => job.id === id)
    console.log(jobToEdit)
    setJobs(jobs.map((job) => job.id === id ? {...job, name: 'edited'} : job))
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

export default UseJobList;
