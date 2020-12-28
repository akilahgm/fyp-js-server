// tslint:disable:indent
// tslint:disable:quotemark
// tslint:disable:object-literal-key-quotes
// tslint:disable:trailing-comma
export const escrowABI = [
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'myid',
        type: 'bytes32'
      },
      {
        internalType: 'string',
        name: 'result',
        type: 'string'
      }
    ],
    name: '__callback',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_myid',
        type: 'bytes32'
      },
      {
        internalType: 'string',
        name: '_result',
        type: 'string'
      },
      {
        internalType: 'bytes',
        name: '_proof',
        type: 'bytes'
      }
    ],
    name: '__callback',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'newPrice',
        type: 'uint256'
      }
    ],
    name: 'changePrice',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'exchangeId',
        type: 'uint256'
      }
    ],
    name: 'claimPayment',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'cordaAccount',
        type: 'string'
      },
      {
        internalType: 'uint256',
        name: 'expectedShares',
        type: 'uint256'
      }
    ],
    name: 'createExchange',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [],
    stateMutability: 'payable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'description',
        type: 'string'
      }
    ],
    name: 'EventTriggered',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'description',
        type: 'string'
      }
    ],
    name: 'LogNewProvableQuery',
    type: 'event'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'exchangeId',
        type: 'uint256'
      },
      {
        internalType: 'string[]',
        name: 'args',
        type: 'string[]'
      }
    ],
    name: 'requestRefund',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    stateMutability: 'payable',
    type: 'fallback'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'exchangeFromId',
    outputs: [
      {
        internalType: 'uint256',
        name: 'exchangeId',
        type: 'uint256'
      },
      {
        internalType: 'address payable',
        name: 'sender',
        type: 'address'
      },
      {
        internalType: 'string',
        name: 'cordaAccount',
        type: 'string'
      },
      {
        internalType: 'uint256',
        name: 'ethereumAmount',
        type: 'uint256'
      },
      {
        internalType: 'uint256',
        name: 'numbrOfShares',
        type: 'uint256'
      },
      {
        internalType: 'enum IPOEscrow.PaymentStatus',
        name: 'status',
        type: 'uint8'
      },
      {
        internalType: 'string',
        name: 'callbackStatus',
        type: 'string'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    name: 'exchangeIdFromQuery',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address'
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'exchangeIdsFromSender',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    name: 'exchanngeIDs',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getAllExchangeIds',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address'
      }
    ],
    name: 'getUserExchangeIds',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address payable',
        name: '',
        type: 'address'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'priceOfShare',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32'
      }
    ],
    name: 'queries',
    outputs: [
      {
        internalType: 'enum IPOEscrow.QueryType',
        name: '',
        type: 'uint8'
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_i',
        type: 'uint256'
      }
    ],
    name: 'uintToStr',
    outputs: [
      {
        internalType: 'string',
        name: '_uintAsString',
        type: 'string'
      }
    ],
    stateMutability: 'pure',
    type: 'function'
  }
];
