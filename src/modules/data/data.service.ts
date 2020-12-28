import { Injectable } from '@nestjs/common';
import { DataRepository } from './data.repository';
import { escrowABI } from '../../shared/const/abi';
import {
  contractAddress,
  contractOwner,
  ownerPrivateKey,
} from '../../shared/const';
import axios from 'axios';
const Web3 = require('web3');
const web3 = new Web3();

@Injectable()
export class DataService {
  constructor(private dataRepository: DataRepository) {}

  async getData(): Promise<any> {
    web3.setProvider(
      new web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/98079c61ec6a4c029817d276104753d3',
      ),
    );
    const contract = new web3.eth.Contract(escrowABI, contractAddress);
    const ids = await contract.methods.getAllExchangeIds().call();
    const results = [];
    for (const iterator of ids) {
      const res = await contract.methods.exchangeFromId(iterator).call();
      console.log('result', res);
      results.push(res);
    }
    return results;
  }

  async getExchange(exchangeId: string): Promise<any> {
    web3.setProvider(
      new web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/98079c61ec6a4c029817d276104753d3',
      ),
    );
    const contract = new web3.eth.Contract(escrowABI, contractAddress);
    const res = contract.methods.exchangeFromId(exchangeId).encodeABI();

    const result = await axios.post(
      'https://rinkeby.infura.io/v3/98079c61ec6a4c029817d276104753d3',
      {
        jsonrpc: '2.0',
        id: 1,
        method: 'eth_call',
        params: [
          {
            to: contractAddress,
            data: res,
          },
          'latest',
        ],
      },
    );
    console.log('result->>', result.data);
    const hexString = result.data.result;
    // hex2a(hexString);
    return { data: res };
  }

  async claimExchange(exchangeId: string): Promise<any> {
    const Tx = require('ethereumjs-tx').Transaction;
    web3.setProvider(
      new web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/98079c61ec6a4c029817d276104753d3',
      ),
    );

    const count = await web3.eth.getTransactionCount(contractOwner);
    const contract = new web3.eth.Contract(escrowABI, contractAddress);
    const gasPrice = await web3.eth.getGasPrice();
    const gasLimit = 1000000;

    const rawTransaction = {
      from: contractOwner,
      nonce: web3.utils.toHex(count),
      gasPrice: web3.utils.toHex(gasPrice),
      gasLimit: web3.utils.toHex(gasLimit),
      to: contractAddress,
      value: '0x',
      data: contract.methods.claimPayment(exchangeId).encodeABI(),
    };

    const privKey = new Buffer(ownerPrivateKey.toUpperCase(), 'hex');
    const tx = new Tx(rawTransaction, {
      chain: 'rinkeby',
      hardfork: 'petersburg',
    });

    tx.sign(privKey);

    const serializedTx = tx.serialize();

    const hexTx = '0x' + serializedTx.toString('hex');
    // const resp = await axios.post(
    //   'https://rinkeby.infura.io/v3/98079c61ec6a4c029817d276104753d3',
    //   {
    //     jsonrpc: '2.0',
    //     id: 1,
    //     method: 'eth_sendRawTransaction',
    //     params: [hexTx],
    //   },
    // );

    // console.log('Result', resp.data);

    return { data: hexTx };
  }
}

function hex2a(hexx) {
  const hex = hexx.substring(2);
  const stringChunks = hex.match(/.{64}/g);
  const length = stringChunks.length;
  console.log('Chunk length', length);

  const exchangeId = parseInt(stringChunks[0], 16);
  const sender = '0x' + stringChunks[1].substring(24);
  const ethereumAmount = parseInt(stringChunks[3], 16);
  const numbrOfShares = parseInt(stringChunks[4], 16);
  const status = parseInt(stringChunks[5], 16);

  const cordaAccount = Buffer.from(stringChunks[8], 'hex').toString('utf8');
  const callbackStatus = Buffer.from(stringChunks[10], 'hex').toString('utf8');

  const temp = {
    exchangeId,
    sender,
    ethereumAmount,
    numbrOfShares,
    status,
    cordaAccount,
    callbackStatus,
  };

  console.log('json res', temp);

  return hex;
}
