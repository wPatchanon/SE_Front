import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import { Home } from '../../components';
import { MenuAppBar } from '../../components';

const App = (props) => {
    return (
        <div>
            <MenuAppBar />
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </div>
    )
}

export default withRouter(App);