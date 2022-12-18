import React, { useEffect, useState } from 'react'
import { DatePicker } from 'antd'
import styles from './main.module.scss'
import CreateJob from '../CreateJob'
import JobList from '../JobList'
import JobSearch from '../JobSearch'
import JobContextProvider from '../../contexts/jobContext'

const Main = (props) => {

  return (
    <JobContextProvider>
      <div className={styles.root}>
        <CreateJob />
        <JobSearch />
        <JobList />
      </div>
    </JobContextProvider>
  )
}

export default Main
