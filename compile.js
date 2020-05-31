const path=require('path');
const solc=require('solc');
const fs=require('fs');

const votingPath=path.resolve(__dirname,'contracts/voting.sol');
const source=fs.readFileSync(votingPath,'utf-8');

var input= {
    language:'Solidity',
    sources:{
        'voting.sol':{
            content:source
        }
    },
    settings:{
        outputSelection:{
            '*':{
                '*':['*']
            }
        }
    }
}
module.exports=JSON.parse(solc.compile(JSON.stringify(input))).contracts['voting.sol']['voting'];
