import { Menu } from 'antd';

const HeaderLayout = (props) => {
    return (
        <>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
                <Menu.Item>Home</Menu.Item>
                <Menu.Item>Practices</Menu.Item>
            </Menu>
        </>
    );
}

export default HeaderLayout;