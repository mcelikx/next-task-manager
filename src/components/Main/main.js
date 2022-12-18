import React from "react";
import { DatePicker } from 'antd';
import styles from './main.module.scss'
import CreateJob from "../CreateJob";
import JobList from "../JobList";


const Main = props => {
  return (
    <div className={styles.root}>
      <CreateJob/>
      <JobList/>
    </div>
  );
}

export default Main;
