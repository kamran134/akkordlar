import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About, Login, Registration } from 'components';
import { PostsList, FullPost } from 'modules';

function Routers() {
    return(
        <Switch>
            <Route path="/" exact component={() => (<PostsList/>)} ></Route>
            <Route path="/post/:id" exact component={FullPost}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/registration" exact component={Registration}></Route>
            {/*<Route path="/not-found" component={NotFound}></Route> */}
        </Switch>
    )
}

export default Routers;