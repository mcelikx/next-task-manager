import { createContext, useContext, useEffect, useState } from 'react'
const JobContext = createContext()

const JobContextProvider = (props) => {
  const { children } = props
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    // First check local storage for jobs. If there are none, fetch jobs from http://54.144.76.108/tasks
    // and set them in local storage. If there are jobs in local storage, set them in state.
    if (JSON.parse(localStorage.getItem('jobs'))) {
      setJobs(JSON.parse(localStorage.getItem('jobs')))
    } else {
      fetch('http://54.144.76.108/tasks')
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem('jobs', JSON.stringify(data))
          setJobs(data)
        })
    }
  }, [])

  return (
    <JobContext.Provider value={[jobs, setJobs]}>
      {children}
    </JobContext.Provider>
  )
}

export default JobContextProvider

export const useJobContext = () => useContext(JobContext)
