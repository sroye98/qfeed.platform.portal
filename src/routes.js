import { Route, Switch } from 'react-router-dom';

import Dashboard from './views/Dashboard';

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
        </Switch>
    );
}

export default Routes;