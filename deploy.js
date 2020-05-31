const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const voting = require('./compile');

const provider=new HDWalletProvider(
    'fever shrug spatial build chapter roof person error feel unaware buyer quit',
    'https://rinkeby.infura.io/v3/2ae324fcb0d94486b6b022f559475dc7'
);

const web3=new Web3(provider);

const deploy= async ()=>{
    console.log("started deployement");
    console.log("interface",JSON.stringify(voting.abi));
    const accounts=await web3.eth.getAccounts();
    console.log(accounts);
    const votingContract=await new web3.eth.Contract(voting.abi).deploy({data:'0x'+voting.evm.bytecode.object}).send({from:accounts[0]});
    console.log("contract deployed to:",votingContract.options.address);
};

deploy();