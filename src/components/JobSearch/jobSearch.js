import React from "react";
import styles from './jobSearch.module.scss'
import { useContext } from "react";
import {useJobContext} from "../../contexts/jobContext";

const JobSearch = props => {

  return (
    <div className={styles.root}>
      <h4>
        Job Search
      </h4>
    </div>
  )
}

export default JobSearch;
