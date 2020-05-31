const Web3=require('web3');
const assert=require('assert');
const ganache=require('ganache-cli');

const web3=new Web3(ganache.provider());

const voting=require('../compile');
let accounts;
beforeEach(async ()=>{
    accounts=await web3.eth.getAccounts();
    console.log(accounts);
    votingContract=await new web3.eth.Contract(
        JSON.parse(JSON.stringify(voting.abi))
    ).deploy({data:voting.evm.bytecode.object}).send({from:accounts[0],gas:'1000000'});
});

describe('voting contract',()=>{
    it('deploys a contract',async ()=>{
        assert(votingContract.options.address);
    });
    /*
    it('candidate is entered',async ()=>{
        await votingContract.methods.createCandidate("dheer",'0xad1CFfA5AC0FE68967E93B6502B72666A7123742').send(
            {from:accounts[0],gas:'1000000'}
        );

        const candidate=await votingContract.methods.candidates(0).call({from:accounts[0]});
        assert(candidate.candidateAddress=='0xad1CFfA5AC0FE68967E93B6502B72666A7123742');
    });

    it('candidate voted and winner is picked',async ()=>{
        await votingContract.methods.createCandidate("dheer",'0xad1CFfA5AC0FE68967E93B6502B72666A7123742').send({
            from:accounts[0],
            gas:'1000000'
        });
        const candidate=await votingContract.methods.candidates(0).call({from:accounts[0]});
        await votingContract.methods.vote(0).send({
            from:accounts[0],
            gas:'1000000'
        });
        const index=await votingContract.methods.pickWinner().call({from:accounts[0],gas:'1000000'});
        assert(index==0);
    });
    */
    
});