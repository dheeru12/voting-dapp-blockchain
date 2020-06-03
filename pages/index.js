import React, { Component } from 'react';
import web3 from '../web3';
import {Card, Button , Icon} from 'semantic-ui-react';
import voting from '../Voting';
import Layout from '../components/Layout'
import {Link} from '../routes';
class votingComponent extends Component{
    state={
        disabled:false,
        successMessage:""
    }
    static async getInitialProps(){
        const candidates=await voting.methods.returnNames().call();
        const manager=await voting.methods.manager().call();
        return {candidates:candidates,manager:manager}
    }
    async componentDidMount(){
        const accounts=await web3.eth.getAccounts();
        if (accounts[0]!=this.props.manager){
            this.setState({disabled:true});
        }
    }
    pickWinner= async (event)=>{
        event.preventDefault();
        const accounts=await web3.eth.getAccounts();
        const index=await voting.methods.pickWinner().call({from:accounts[0]});
        this.setState({successMessage:"The winner of the current voting results is: Candidate no-"+index+"  ,Please redploy the contract to create a new voting session",disabled:true});

    }
    renderCandidates(){
        let candidatecount=0
        const items=this.props.candidates.map(address=>{
            return {
                header: address,
                description:(
                    <Link route={`candidates/${candidatecount}`} disabled>
                        <a >view Candidate</a>
                    </Link>
                ),
                meta:"candidate no:"+(candidatecount++),
                fluid:true
            };
        });

        return items;
    }
    render(){
        return (
            <Layout>
                <h4>Candidates participating</h4>
                <Button floated="right" content="create candidate" icon="add circle" disabled={this.state.disabled} primary href='/candidates/new'></Button>
                <Button animated disabled={this.state.disabled} floated="right" positive onClick={this.pickWinner}>
                    <Button.Content visible>
                        <Icon name='hand point right' />
                        pick Winner!!
                    </Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
                <Card.Group items={this.renderCandidates()} />
                <h4 style={{color:"green"}}>
                    {this.state.successMessage}
                </h4>
            </Layout>
        );
    }
}

export default votingComponent;