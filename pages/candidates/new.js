import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Message } from 'semantic-ui-react';
import web3 from '../../web3';
import voting from '../../Voting';
class candidateNew extends Component{
    state={
        name:"",
        address:"",
        party:"",
        description:"",
        loading:false,
        message:"",
        successMessage:""
    }
    onClick = async (event)=>{
        this.setState({loading:true,successMessage:"",message:""});
        try {
            const accounts=await web3.eth.getAccounts();
            await voting.methods.createCandidate(this.state.name,this.state.address,this.state.party,this.state.description).send({
                from:accounts[0],
                gas:"1000000"
            });
        } catch (error) {
            this.setState({message:error.message});
        }
        this.setState({loading:false})
        this.setState({successMessage:"You have successfully created a candidate"});
    }
    render (){
        return (
            <Layout>
                <Form onSubmit={this.onClick} error={!!this.state.message}>
                    <Form.Group widths="equal">
                        <Form.Input fluid label="name" placeholder="name" value={this.state.name} onChange={event=>{this.setState({name:event.target.value})}}/>
                        <Form.Input fluid label="party" placeholder="party" value={this.state.party} onChange={event=>{this.setState({party:event.target.value})}}/>
                    </Form.Group>
                    <Form.Field>
                        <Form.Input fluid label="address" placeholder="address" value={this.state.address} onChange={event=>{this.setState({address:event.target.value})}}/>
                    </Form.Field>
                    <Form.TextArea label="description" placeholder="any short description?" value={this.state.description} onChange={event=>{this.setState({description:event.target.value})}}/>
                    <Message error header="Oops!!" content={this.state.message }/>
                    <Button primary loading={this.state.loading}>Submit</Button>
                </Form>
                <div style={{color:"green"}}>
                 {this.state.successMessage}
                </div>
            </Layout>
        );
    }
}

export default candidateNew;