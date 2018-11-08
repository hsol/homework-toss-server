import React from 'react'
import ReactDOM from 'react-dom'
import TribeList from "./Lists/TribeList";

ReactDOM.render(
    <div className={'columns'} style={{margin: '0px auto'}}>
        <div className={'column'}>
            <TribeList/>
        </div>
    </div>,
    document.getElementById('app')
);
