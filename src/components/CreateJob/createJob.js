import React from 'react'
import styles from './createJob.module.scss'
import { Button, Form, Input, Select } from 'antd'
const { Option } = Select
import { PRIORITY_OPTIONS } from '../../constants/contants'
import PlusOutlined from '@ant-design/icons/PlusOutlined'
import useCreateJob from "../../hooks/useCreateJob";
const CreateJob = (props) => {

  const {
    handleCreateJob,
  } = useCreateJob()
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log(values)
    handleCreateJob(values)
  }
  return (
    // Job Form. This form will be used to create a new job. Job Name and Job Priority are required fields.
    <div className={styles.root}>
      <Form
        layout={'vertical'}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
      >
        <h4>Create New Job</h4>
        <div className={styles.createJobForm}>
          <Form.Item
            name="name"
            label="Job Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="priority"
            label="Job Priority"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select priority"
            >
              {PRIORITY_OPTIONS.map((priority, index) => {
                return (
                  <Option key={index} value={priority.value}>{priority.label}</Option>
                )
              })}
            </Select>
          </Form.Item>

          {/*  Submit Form */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.submitButton}
            >
              <PlusOutlined />
              Create
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  )
}

export default CreateJob
