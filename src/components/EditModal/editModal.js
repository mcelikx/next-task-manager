import React from 'react'
import { Button, Form, Input, Modal, Select } from 'antd'
import { PRIORITY_OPTIONS } from '../../constants/contants'
import styles from './editModal.module.scss'
import UseJobs from '../../hooks/useJobs'

const EditModal = (props) => {
  const { editJob, setEditJob } = props
  console.log(editJob)
  const { handleEditJob } = UseJobs()
  return (
    <Modal
      open={editJob}
      title={false}
      footer={false}
      centered
      onCancel={() => setEditJob(false)}
    >
      <Form
        initialValues={{
          name: editJob?.name,
          priority: editJob?.priority,
        }}
        layout={'vertical'}
        onFinish={(values) => {
          handleEditJob(editJob.id, values.priority)
          setEditJob(false)
        }}
      >
        <h2 className={styles.title}>Job Edit</h2>
        <Form.Item label="Name" name="name">
          <Input disabled value={editJob?.name} />
        </Form.Item>
        <Form.Item label="Priority" name="priority">
          <Select>
            {PRIORITY_OPTIONS.map((option) => (
              <Select.Option key={option.value} value={option.value}>
                {option.label}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <div className={styles.modalActions}>
          <button
            onClick={() => setEditJob(false)}
            className={styles.cancelButton}
          >
            Cancel
          </button>
          <button type="submit" className={styles.submitButton}>
            Save
          </button>
        </div>
      </Form>
    </Modal>
  )
}

export default EditModal
