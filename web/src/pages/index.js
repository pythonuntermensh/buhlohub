import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from '../components/Layout';

import Home from './home';
import Products from './products';
import SignUp from './signup';
import SignIn from './signin';
import Alcoholics from './alcoholics';
import User from './user';
import Developing from './developing';
import Review from './review';

const Pages = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/products' component={Products} />
                <Route path='/alcoholics' component={Alcoholics} />
                <Route path='/signup' component={SignUp} />
                <Route path='/signin' component={SignIn} />
                <Route path="/user/:username" component={User} />
                <Route path="/product/:drink" component={Developing} />
                <Route path="/product/undefined" component={Developing} />
                <Route path="/review/:review" component={Review} />
            </Layout>
        </BrowserRouter>
    );
};

export default Pages;