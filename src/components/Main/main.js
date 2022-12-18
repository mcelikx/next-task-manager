import React, { useEffect, useState } from 'react'
import { DatePicker } from 'antd'
import styles from './main.module.scss'
import CreateJob from '../CreateJob'
import JobList from '../JobList'
import JobContextProvider from '../../contexts/jobContext'

const Main = props => {

  return (
    <JobContextProvider>
      <div className={styles.root}>
        <CreateJob />
        <JobList />
      </div>
    </JobContextProvider>
  )
}

export default Main
