import React, { Component } from 'react';
import voting from '../../Voting';
import web3 from '../../web3';
import Layout from '../../components/Layout';
import {Header,Segment, Button, Message} from 'semantic-ui-react';
import {Router} from '../../routes';
class candidateShow extends Component{
    state={
        errorMessage:"",
        disabled:false,
        loading:false,
        successMessage:'',
    }
    static async getInitialProps(props){
        const candidate=await voting.methods.candidates(props.query.id).call();
        return {candidate,id:parseInt(props.query.id)};
    }
    async componentDidMount(){
        this.setState({loading:false,disabled:false,successMessage:""});
        const accounts=await web3.eth.getAccounts();
        console.log(accounts[0]);
        const bool=await voting.methods.voters(accounts[0]).call()
        console.log(bool)
        if(bool===true){
            this.setState({disabled:true,successMessage:"you have voted already"});
        }
    }
    onClick=async(event)=>{
        event.preventDefault();
        this.setState({loading:true});
        try{
            const accounts=await web3.eth.getAccounts();
            await voting.methods.vote(this.props.id).send({from:accounts[0],gas:'1000000'});
            this.setState({loading:false,disabled:true,successMessage:'you have successfully voted'});
            Router.pushRoute(`/candidates/${this.props.id}`)
        }catch(err){
            this.setState({errorMessage:err.message})
        }
        this.setState({loading:false,successMessage:""});
    };
    renderMessage(){
        if(this.state.errorMessage){
            return (
                <Message content={this.state.errorMessage} error></Message>
            );
        }
        if(this.state.successMessage){
            return (
                <Message content={this.state.successMessage} success></Message>
            );
        }
        
    }
    render(){
        return (
            <Layout>
                <div>
                    <Header as="h3" attached="top">{this.props.candidate.name}</Header>
                    <Segment attached inverted >
                        <div>
                            <Header as="h4" color="red">current Votes:</Header>
                            {this.props.candidate.votes}
                        </div>
                        <div style={{marginTop:"5px"}}>
                            <Header as="h4" color="red">party:</Header>
                            {this.props.candidate.party}
                        </div>
                        <div style={{marginTop:"5px"}}>
                            <Header as="h4" color="red">description:</Header>
                            {this.props.candidate.description}
                        </div>
                        <div>
                        <Button style={{marginLeft:"500px"}} color="green" onClick={this.onClick} disabled={this.state.disabled} loading={this.state.loading}>
                            Vote
                        </Button>
                        </div>
                    </Segment>
                    {this.renderMessage()}
                </div>
            </Layout>
        );
    }
}

export default candidateShow;