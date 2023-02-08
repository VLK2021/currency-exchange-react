import React from 'react';

import './LayoutStyle.css';
import LeftBlock from "../components/LeftBlock/LeftBlock";
import RightBlock from "../components/RightBlock/RightBlock";


const Layout = () => {


    return (
        <div className={'layout'}>
            <h1>currency exchange</h1>
            <div className={'layout-blocks'}><LeftBlock/>
                <RightBlock/></div>
        </div>
    );
};

export default Layout;