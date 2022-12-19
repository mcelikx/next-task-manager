import React from 'react'
import { Button, Form, Input, Modal, Select } from 'antd'
import { PRIORITY_OPTIONS } from '../../constants/contants'
import styles from './deleteModal.module.scss'
import UseJobs from '../../hooks/useJobs'
import {WarningOutlined} from "@ant-design/icons";

const DeleteModal = (props) => {
  const { deleteJob, setDeleteJob } = props
  console.log(deleteJob)
  const { handleDeleteJob } = UseJobs()
  return (
    <Modal
      open={deleteJob}
      title={false}
      footer={false}
      centered
      onCancel={() => setDeleteJob(false)}
    >
      <div className={styles.question}>
        <WarningOutlined
          style={{
            fontSize: '30px',
            color: '#ff4d4f',
          }}
        />
        <h4>Are you sure you want to delete this job?</h4>
      </div>
      <div className={styles.modalActions}>
        <button
          onClick={() => setDeleteJob(false)}
          className={styles.cancelButton}
        >
          Cancel
        </button>
        <button
          onClick={() => {
            handleDeleteJob(deleteJob.id)
            setDeleteJob(false)
          }}
          className={styles.submitButton}
        >
          Approve
        </button>
      </div>
    </Modal>
  )
}

export default DeleteModal
