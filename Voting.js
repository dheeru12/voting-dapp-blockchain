import web3 from './web3';
import voting from './compile';
const instance= new web3.eth.Contract(
    voting.abi,
    '0xF429e79e55FAfc0041BD167478b8bDDb890dc934'
);
export default instance;