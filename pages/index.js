import React, { Component } from 'react';
import web3 from '../web3';
import voting from '../Voting';
class votingComponent extends Component{
    render(){
        console.log(web3,voting);
        return (
            <h1>hello world</h1>
        );
    }
}

export default votingComponent;