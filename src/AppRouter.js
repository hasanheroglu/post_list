import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import PostGet from './PostGet';
import MainPage from './MainPage';

const AppRouter = () =>(
    <BrowserRouter>
        <Route exact path="/*" component={MainPage} />
        <Route exact path="/posts" component={PostGet} />
    </BrowserRouter>
);

export default AppRouter;