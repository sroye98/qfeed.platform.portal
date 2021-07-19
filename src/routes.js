import { Route, Switch } from 'react-router-dom';

import AuditLog from './views/Audits';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import NotFound from './views/404';
import Practices from './views/Practices';

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/practices" component={Practices} />
            <Route exact path="/audit-logs" component={AuditLog} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
}

export default Routes;