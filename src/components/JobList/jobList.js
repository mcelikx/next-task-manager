import React, {useState} from 'react'
import styles from './jobList.module.scss'
import {Input, Select, Table} from 'antd'
import { useJobContext } from '../../contexts/jobContext'
import { PRIORITY_OPTIONS } from '../../constants/contants'
import {DeleteOutlined, EditOutlined, SearchOutlined} from "@ant-design/icons";
import useJobList from "../../hooks/useJobList";
const JobList = props => {

  const {
    jobs,
    handleDeleteJob,
    handleEditJob,
    handleClearJobs
  } = useJobList()

  const [searchText, setSearchText] = useState('')

  const [filteredPriority, setFilteredPriority] = useState('')

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      filteredValue: [searchText],
      onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend', 'ascend'],
      ellipsis: true,
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      defaultSortOrder: 'ascend',
      filted: filteredPriority,
      filteredValue: [filteredPriority],
      onFilter: (value, record) => record.priority.includes(value),
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
      width: '30%',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className={styles.actions}>
          <button
            className={styles.editButton}
            onClick={() => handleEditJob(record.id)}
          >
            <EditOutlined />
          </button>
          <button
            className={styles.deleteButton}
            onClick={() => handleDeleteJob(record.id)}
          >
            <DeleteOutlined />
          </button>
        </div>
      ),
      width: 100,
    },
  ]


  return (
    <div className={styles.root}>
      <h4>Job List</h4>
      <div
        className={styles.searchAndFilter}
      >
        <Input
          placeholder="Search by name"
          prefix={<SearchOutlined />}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Select
          className={styles.priorityFilter}
          onChange={(value) => setFilteredPriority(value)}
          defaultValue=""
        >
          <Select.Option
            value=""
            key=""
          >
            Priority (All)
          </Select.Option>
          {PRIORITY_OPTIONS.map((option) => (
            <Select.Option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </Select.Option>
          ))}
        </Select>
      </div>
      <Table
        columns={columns}
        dataSource={jobs}
      />

      <button
        className={styles.clearButton}
        onClick={() => handleClearJobs()}
      >
        Start From Stratch
      </button>
    </div>
  )
}

export default JobList
