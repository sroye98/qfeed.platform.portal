import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreOutlined, AuditOutlined, HomeTwoTone } from '@ant-design/icons';

const HeaderLayout = (props) => {
    const [currentKey, setKey] = useState('dashboard');
    const history = useHistory();

    const handleClick = (e) => {
        setKey(e.key);
        history.push(`/${e.key}`);
    };

    return (
        <>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={1} selectedKeys={[currentKey]} onClick={handleClick}>
                <Menu.Item key="dashboard" icon={<HomeTwoTone />}>Dashboard</Menu.Item>
                <Menu.Item key="practices" icon={<AppstoreOutlined />}>Practices</Menu.Item>
                <Menu.Item key="audit-logs" icon={<AuditOutlined />}>Audit Logs</Menu.Item>
            </Menu>
        </>
    );
}

export default HeaderLayout;