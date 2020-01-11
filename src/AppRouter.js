import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import PostGet from './PostGet';

const AppRouter = () =>(
    <BrowserRouter>
        <Route exact path="/posts" component={PostGet} />
    </BrowserRouter>
);

export default AppRouter;