import React from 'react';
import classes from './Layout.module.css';
import Aux from '../../hoc/Auxinliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = (props) =>(
    <Aux>
        <Toolbar/>
        <main className={classes.Content}>{props.children}</main>
    </Aux>
);
export default Layout;