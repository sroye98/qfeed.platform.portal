import { useHistory } from 'react-router-dom';
import { Result, Button } from 'antd';

const NotFound = (props) => {
    const history = useHistory();
    
    const goHome = () => {
        history.push("/dashboard");
    };

    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={goHome}>Back Home</Button>} />
    );
};

export default NotFound;