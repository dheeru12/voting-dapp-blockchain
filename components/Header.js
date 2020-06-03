import React from 'react';
import {Menu} from 'semantic-ui-react';

export default ()=>{
    return (
        <Menu style={{marginTop:'10px'}}>
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
            <Menu.Item href="/">
                VotingDApp
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item href="/">
                    Candidates
                </Menu.Item>
                <Menu.Item href="/candidates/new">
                    +
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};