import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';


import { Home } from '../../components';
import { Feed } from '../../components';
import { MenuAppBar } from '../../components';

const App = (props) => {
    return (
        <div style={{ backgroundColor: '#f5f5f5' }}>
            <MenuAppBar />
            <Switch>
                <Route exact path="/" component={Feed} />
                <Route path="/store" component={Home} />
            </Switch>
        </div>
    )
}

export default withRouter(App);