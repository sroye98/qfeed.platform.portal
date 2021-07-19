import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, Modal, PageHeader, Space, Table } from 'antd';
import { CheckCircleOutlined, CloseOutlined, MailOutlined } from '@ant-design/icons';

import { practices } from '../constants/StaticData';

const { Column } = Table;

const data = practices;

const Practices = (props) => {
    const [isPracticeModalVisible, setIsPracticeModalVisible] = useState(false);

    const showPracticeModal = () => {
        setIsPracticeModalVisible(true);
    };

    const hidePracticeModal = () => {
        setIsPracticeModalVisible(false);
    };

    return (
        <>
            <PageHeader
                title="Current Practices"
                extra={[
                    <Button key="1" type="primary" onClick={showPracticeModal}>
                        Invite New Practice
                    </Button>,
                ]} />
            <Table dataSource={data}>
                <Column title="Name" key="practiceName" render={(record) => (
                    <Button type="link" onClick={showPracticeModal}>{record.fullName}</Button>
                )} />
                <Column title="administrator" dataIndex="administrator" key="administrator" />
                <Column title="Email" dataIndex="email" key="email" />
                <Column title="Phone" dataIndex="phone" key="phone" />
                <Column title="Signed Up" key="signedUp" render={(record) => record.signedUp ? (<CheckCircleOutlined />) : (<CloseOutlined />)} />
                <Column title="Action" key="action" render={() => (
                    <Space size="middle">
                        <Button type="primary" icon={<MailOutlined />} onClick={showPracticeModal}>Resend Invite</Button>
                    </Space>
                )} />
            </Table>
            <Modal title="Patient Form" visible={isPracticeModalVisible} onOk={hidePracticeModal} onCancel={hidePracticeModal}>
                <Form name="patient" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
                    <Form.Item label="Practice Name" name="practiceName" rules={[{ required: true, message: 'Please enter the practice\'s name' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Full Name" name="fullName" rules={[{ required: true, message: 'Please enter the practice\'s administrator full name' }]}>
                        <DatePicker />
                    </Form.Item>
                    <Form.Item label="Email Address" name="email" rules={[{ required: true, message: 'Please enter the practice\'s administrator email address', type: 'email' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Phone Number" name="phone" rules={[{ required: false, message: 'Please enter the practice\'s administrator phone number' }]}>
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};

export default Practices;