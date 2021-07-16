import { Route, Switch } from 'react-router-dom';

import Dashboard from './views/Dashboard';
import NotFound from './views/404';

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
}

export default Routes;