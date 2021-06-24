import React from 'react';
import './Page404.css'

const Page404 = () => {
    return (
        <div className="not-found">
            <img src={'https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png'} alt="not Found" />
            <div>
                <h1>404 this page is not founded</h1>
            </div>
        </div>
    );
};

export default Page404;