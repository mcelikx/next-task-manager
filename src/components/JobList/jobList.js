import React from 'react'
import styles from './jobList.module.scss'
import { Table } from 'antd'
import { useJobContext } from '../../contexts/jobContext'
import { PRIORITY_OPTIONS } from '../../constants/contants'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Priority',
    dataIndex: 'priority',
    defaultSortOrder: 'ascend',
    // sort field by corresponding PRIORITY_OPTIONS order
    sorter: (a, b) => PRIORITY_OPTIONS.find((option) => option.value === a.priority).order - PRIORITY_OPTIONS.find((option) => option.value === b.priority).order,
    // sorter: (a, b) => a.value - b.value,
    render: (priority) => {
      const priorityOption = PRIORITY_OPTIONS.find(
        (option) => option.value === priority,
      )

      // Class will be determined with switch case with respect to priorityOption.priority
      const priorityClass =
        priorityOption.value === 'urgent'
          ? styles.urgent
          : priorityOption.value === 'regular'
          ? styles.regular
          : styles.trivial

      return (
        <div className={styles.tagWrapper}>
          <span className={priorityClass}>{priorityOption.label}</span>
        </div>
      )
    },
  },
]

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra)
}
const JobList = (props) => {
  const [jobs, setJobs] = useJobContext()

  return (
    <div className={styles.root}>
      <h4>Job List</h4>
      <Table columns={columns} dataSource={jobs} onChange={onChange} />
    </div>
  )
}

export default JobList
