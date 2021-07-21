import React, { useState } from 'react';
import { Button, DatePicker, Dropdown, Form, Input, Menu, Modal, PageHeader, Space, Table } from 'antd';
import { CheckCircleOutlined, CloseOutlined, DownOutlined, MailOutlined } from '@ant-design/icons';

import { practices } from '../constants/StaticData';

const { Column } = Table;

const data = practices;

const filterMenu = (
    <Menu>
        <Menu.Item>Signed Up</Menu.Item>
        <Menu.Item>Not Signed Up</Menu.Item>
    </Menu>
);

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
                    <Dropdown overlay={filterMenu}>
                        <Button>
                            Filter <DownOutlined />
                        </Button>
                    </Dropdown>,
                    <Button key="1" type="primary" onClick={showPracticeModal}>
                        Invite New Practice
                    </Button>,
                ]} />
            <Table dataSource={data}>
                <Column title="Name" key="practiceName" sorter={{ compare: (a, b) => a.practiceName.localeCompare(b.practiceName) }} render={(record) => (
                    <Button type="link" onClick={showPracticeModal}>{record.practiceName}</Button>
                )} />
                <Column title="administrator" dataIndex="administrator" key="administrator" sorter={{ compare: (a, b) => a.administrator.localeCompare(b.administrator) }} />
                <Column title="Email" dataIndex="email" key="email" sorter={{ compare: (a, b) => a.email.localeCompare(b.email) }} />
                <Column title="Phone" dataIndex="phone" key="phone" />
                <Column title="Signed Up" key="signedUp" sorter={{ compare: (a, b) => a.signedUp - b.signedUp }} render={(record) => record.signedUp ? (<CheckCircleOutlined />) : (<CloseOutlined />)} />
                <Column title="Action" key="action" render={() => (
                    <Space size="middle">
                        <Button type="primary" icon={<MailOutlined />}>Resend Invite</Button>
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