import { HashRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';

import HeaderLayout from './components/Header';
import FooterLayout from './components/Footer';
import Routes from './routes';

const { Header, Footer, Content } = Layout;

const Application = (props) => {
    return (
        <Layout>
            <Header>
                <HeaderLayout />
            </Header>
            <Content style={{ margin: '20px' }}>
                <Router>
                    <Routes />
                </Router>
            </Content>
            <Footer>
                <FooterLayout />
            </Footer>
        </Layout>
    );
}

export default Application;