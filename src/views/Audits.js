import { PageHeader, Table } from 'antd';

import { audits } from '../constants/StaticData';

const { Column } = Table;

const data = audits;

const AuditLog = (props) => {
    return (
        <>
            <PageHeader title="Audit Logs" />
            <Table dataSource={data}>
                <Column title="Practice" dataIndex="practiceName" key="practiceName" />
                <Column title="Name" dataIndex="userName" key="userName" />
                <Column title="Email" dataIndex="email" key="email" />
                <Column title="IP Address" dataIndex="ip_address" key="ip_address" />
                <Column title="Action" dataIndex="action" key="action" />
            </Table>
        </>
    );
};

export default AuditLog;