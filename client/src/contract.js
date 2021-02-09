export default {
  contractName: "SecureTicket",
  abi: [
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "_owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "_approved",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "eventId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "eventName",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "date",
          type: "uint256",
        },
      ],
      name: "NewEvent",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "ticketId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "eventId",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "eventName",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint32",
          name: "date",
          type: "uint32",
        },
      ],
      name: "NewTicket",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "_from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "_to",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "address",
          name: "_approved",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "address",
          name: "_owner",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "string",
          name: "_eventName",
          type: "string",
        },
        {
          internalType: "uint32",
          name: "_date",
          type: "uint32",
        },
      ],
      name: "createEvent",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "uint256",
          name: "_eventId",
          type: "uint256",
        },
      ],
      name: "createTicket",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "eventTicketCount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "eventToCreator",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "events",
      outputs: [
        {
          internalType: "string",
          name: "eventName",
          type: "string",
        },
        {
          internalType: "uint32",
          name: "date",
          type: "uint32",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "isOwner",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256",
        },
      ],
      name: "ownerOf",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "ownerTicketCount",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "uint256",
          name: "_newLimit",
          type: "uint256",
        },
      ],
      name: "setTransferLimit",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "ticketToOwner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "tickets",
      outputs: [
        {
          internalType: "uint256",
          name: "eventId",
          type: "uint256",
        },
        {
          internalType: "uint8",
          name: "transferCount",
          type: "uint8",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "address",
          name: "_from",
          type: "address",
        },
        {
          internalType: "address",
          name: "_to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  metadata:
    '{"compiler":{"version":"0.5.16+commit.9c3226ce"},"language":"Solidity","output":{"abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"eventId","type":"uint256"},{"indexed":false,"internalType":"string","name":"eventName","type":"string"},{"indexed":false,"internalType":"uint256","name":"date","type":"uint256"}],"name":"NewEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"ticketId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"eventId","type":"uint256"},{"indexed":false,"internalType":"string","name":"eventName","type":"string"},{"indexed":false,"internalType":"uint32","name":"date","type":"uint32"}],"name":"NewTicket","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":true,"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"_approved","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"_eventName","type":"string"},{"internalType":"uint32","name":"_date","type":"uint32"}],"name":"createEvent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_eventId","type":"uint256"}],"name":"createTicket","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"eventTicketCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"eventToCreator","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"events","outputs":[{"internalType":"string","name":"eventName","type":"string"},{"internalType":"uint32","name":"date","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"ownerTicketCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"_newLimit","type":"uint256"}],"name":"setTransferLimit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ticketToOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tickets","outputs":[{"internalType":"uint256","name":"eventId","type":"uint256"},{"internalType":"uint8","name":"transferCount","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],"devdoc":{"methods":{"isOwner()":{"return":"true if `msg.sender` is the owner of the contract."},"owner()":{"return":"the address of the owner."},"renounceOwnership()":{"details":"Allows the current owner to relinquish control of the contract."},"transferOwnership(address)":{"details":"Allows the current owner to transfer control of the contract to a newOwner.","params":{"newOwner":"The address to transfer ownership to."}}}},"userdoc":{"methods":{"renounceOwnership()":{"notice":"Renouncing to ownership will leave the contract without an owner. It will not be possible to call the functions with the `onlyOwner` modifier anymore."}}}},"settings":{"compilationTarget":{"/C/Users/Ali/source/repos/secure-ticket/smart_contract/contracts/SecureTicket.sol":"SecureTicket"},"evmVersion":"istanbul","libraries":{},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"/C/Users/Ali/source/repos/secure-ticket/smart_contract/contracts/SecureTicket.sol":{"keccak256":"0x61bd1def1eb5552a911097b50c29970577e4d73beb1f425130ecc0ccdb8fdcde","urls":["bzz-raw://49af8d15693aa4087c9ad80d2f6750c44114721a50a997206316b394bc5566b1","dweb:/ipfs/QmPYhq6vRf6EEedufsq7hJFfGCn5YJgJj9QAWRSgRdytRD"]},"/C/Users/Ali/source/repos/secure-ticket/smart_contract/contracts/erc721.sol":{"keccak256":"0xb58c69bf5f51bbbc11ea4f407edc6240dc62777f530c915221ec869b634a1519","urls":["bzz-raw://afa94cbb21200a323d4fdfba4c514d9aabb86d113c26174792617c46be991336","dweb:/ipfs/QmWbiFmSNQj1TrbiAio3oKeiHJKCohXGEMJH8KPvFpbEye"]},"/C/Users/Ali/source/repos/secure-ticket/smart_contract/contracts/ownable.sol":{"keccak256":"0x33f9862afb90391d02eed330569a92bc9143dd1cb5d6661d737bcedb22f24c68","urls":["bzz-raw://e8f11612996616032f44968b1850c1e71a94a368094141a23f229f2c1a260990","dweb:/ipfs/QmXaxow6LX1FHFKXvMHbKrSn12csP81Fegmbu8HvhUd6MB"]},"/C/Users/Ali/source/repos/secure-ticket/smart_contract/contracts/ticketFactory.sol":{"keccak256":"0x56807e371dbd3bd484c2628819ab0edefabf0bdbad86028973f1d5ab659834f2","urls":["bzz-raw://106d6bfc0b9d75b8417915812c578e78e0618144f8da7319da375f4f18df60c4","dweb:/ipfs/QmSUbLFCMSGpKfxuWXfDbm2HcZpXC3KwumbvmqDiRFHtef"]},"/C/Users/Ali/source/repos/secure-ticket/smart_contract/contracts/ticketHelper.sol":{"keccak256":"0x80d98e8db4a8c01ea289ce996ddf9f088cf82d02461aeefbd70dd6d66f3c8ff1","urls":["bzz-raw://efa66526c9d101ea0c446fe1b33a12265df7cb89018825494859aec7d0e97f7a","dweb:/ipfs/QmaMgGGApnRaNfc2ouQ11JaLtXL89ymWHUvX4hnSq3q8QY"]},"/C/Users/Ali/source/repos/secure-ticket/smart_contract/contracts/ticketOwnership.sol":{"keccak256":"0xb0faf402baf34b530819be9862f9e0b400b4dd0d68ddd4f89a0a3544aac72a99","urls":["bzz-raw://de41e02af76e084f8cca2da3ac37b844675cc9cd6f2d25b4eb8c7667c1ea683d","dweb:/ipfs/QmXyASNAnvCq2hHxjJgf322SQ54HuWi2pLQDcaxxcpntbw"]}},"version":1}',
  bytecode:
    "0x6080604052610100600755336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36114de806100d56000396000f3fe6080604052600436106100fe5760003560e01c806354fdfd4e116100955780637a17feff116100645780637a17feff1461061b5780638da5cb5b146106565780638f32d59b146106ad578063f2fde38b146106dc578063f37a4a511461072d576100fe565b806354fdfd4e146104bf5780636352211e1461052457806370a082311461059f578063715018a614610604576100fe565b806323b872dd116100d157806323b872dd146102a25780632b08e824146103105780632bdd59b01461038b57806350b4471214610463576100fe565b80630497879c14610103578063095ea7b31461013e5780630b7914301461018c5780631af32d7814610253575b600080fd5b34801561010f57600080fd5b5061013c6004803603602081101561012657600080fd5b81019080803590602001909291905050506107a8565b005b61018a6004803603604081101561015457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a8e565b005b34801561019857600080fd5b506101c5600480360360208110156101af57600080fd5b8101908080359060200190929190505050610b3f565b60405180806020018363ffffffff1663ffffffff168152602001828103825284818151815260200191508051906020019080838360005b838110156102175780820151818401526020810190506101fc565b50505050905090810190601f1680156102445780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561025f57600080fd5b5061028c6004803603602081101561027657600080fd5b8101908080359060200190929190505050610c18565b6040518082815260200191505060405180910390f35b61030e600480360360608110156102b857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c30565b005b34801561031c57600080fd5b506103496004803603602081101561033357600080fd5b8101908080359060200190929190505050610d14565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561039757600080fd5b50610461600480360360408110156103ae57600080fd5b81019080803590602001906401000000008111156103cb57600080fd5b8201836020820111156103dd57600080fd5b803590602001918460018302840111640100000000831117156103ff57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803563ffffffff169060200190929190505050610d47565b005b34801561046f57600080fd5b5061049c6004803603602081101561048657600080fd5b8101908080359060200190929190505050610ee5565b604051808381526020018260ff1660ff1681526020019250505060405180910390f35b3480156104cb57600080fd5b5061050e600480360360208110156104e257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f23565b6040518082815260200191505060405180910390f35b34801561053057600080fd5b5061055d6004803603602081101561054757600080fd5b8101908080359060200190929190505050610f3b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156105ab57600080fd5b506105ee600480360360208110156105c257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f78565b6040518082815260200191505060405180910390f35b34801561061057600080fd5b50610619610fc1565b005b34801561062757600080fd5b506106546004803603602081101561063e57600080fd5b8101908080359060200190929190505050611091565b005b34801561066257600080fd5b5061066b6110ac565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156106b957600080fd5b506106c26110d5565b604051808215151515815260200191505060405180910390f35b3480156106e857600080fd5b5061072b600480360360208110156106ff57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061112c565b005b34801561073957600080fd5b506107666004803603602081101561075057600080fd5b8101908080359060200190929190505050611149565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b80806002805490501015610824576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f4576656e7420646f6573206e6f7420657869737421000000000000000000000081525060200191505060405180910390fd5b60006001806040518060400160405280868152602001600060ff16815250908060018154018082558091505090600182039060005260206000209060020201600090919290919091506000820151816000015560208201518160010160006101000a81548160ff021916908360ff1602179055505050039050336003600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555060056000848152602001908152602001600020600081548092919060010191905055507f18b0cd07168eb72bb0c5bd4ef7b666b3dd0c9baa9874f61bba1374eb59103c0081846002868154811061099157fe5b9060005260206000209060020201600001600287815481106109af57fe5b906000526020600020906002020160010160009054906101000a900463ffffffff1660405180858152602001848152602001806020018363ffffffff1663ffffffff168152602001828103825284818154600181600116156101000203166002900481526020019150805460018160011615610100020316600290048015610a785780601f10610a4d57610100808354040283529160200191610a78565b820191906000526020600020905b815481529060010190602001808311610a5b57829003601f168201915b50509550505050505060405180910390a1505050565b816008600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60028181548110610b4c57fe5b9060005260206000209060020201600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bf85780601f10610bcd57610100808354040283529160200191610bf8565b820191906000526020600020905b815481529060010190602001808311610bdb57829003601f168201915b5050505050908060010160009054906101000a900463ffffffff16905082565b60056020528060005260406000206000915090505481565b3373ffffffffffffffffffffffffffffffffffffffff166003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161480610cfb57503373ffffffffffffffffffffffffffffffffffffffff166008600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b610d0457600080fd5b610d0f83838361117c565b505050565b60036020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006001600260405180604001604052808681526020018563ffffffff16815250908060018154018082558091505090600182039060005260206000209060020201600090919290919091506000820151816000019080519060200190610daf929190611404565b5060208201518160010160006101000a81548163ffffffff021916908363ffffffff1602179055505050039050336004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f8c5af749065e922554309a97225ec2d6780f9ff5a7a9ca9e21725ac4de6ff0af81848460405180848152602001806020018363ffffffff168152602001828103825284818151815260200191508051906020019080838360005b83811015610ea4578082015181840152602081019050610e89565b50505050905090810190601f168015610ed15780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a1505050565b60018181548110610ef257fe5b90600052602060002090600202016000915090508060000154908060010160009054906101000a900460ff16905082565b60066020528060005260406000206000915090505481565b60006003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610fc96110d5565b610fd257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6110996110d5565b6110a257600080fd5b8060078190555050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b6111346110d5565b61113d57600080fd5b6111468161130c565b50565b60046020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b806007546001828154811061118d57fe5b906000526020600020906002020160010160009054906101000a900460ff1660ff1611156111ba57600080fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008154809291906001019190505550600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600190039190505550336003600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a450505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561134657600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061144557805160ff1916838001178555611473565b82800160010185558215611473579182015b82811115611472578251825591602001919060010190611457565b5b5090506114809190611484565b5090565b6114a691905b808211156114a257600081600090555060010161148a565b5090565b9056fea265627a7a723158205d93ca7b360388a360347194f154ab138097e59167c76f98d98e28415e0fc4fa64736f6c63430005100032",
  deployedBytecode:
    "0x6080604052600436106100fe5760003560e01c806354fdfd4e116100955780637a17feff116100645780637a17feff1461061b5780638da5cb5b146106565780638f32d59b146106ad578063f2fde38b146106dc578063f37a4a511461072d576100fe565b806354fdfd4e146104bf5780636352211e1461052457806370a082311461059f578063715018a614610604576100fe565b806323b872dd116100d157806323b872dd146102a25780632b08e824146103105780632bdd59b01461038b57806350b4471214610463576100fe565b80630497879c14610103578063095ea7b31461013e5780630b7914301461018c5780631af32d7814610253575b600080fd5b34801561010f57600080fd5b5061013c6004803603602081101561012657600080fd5b81019080803590602001909291905050506107a8565b005b61018a6004803603604081101561015457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a8e565b005b34801561019857600080fd5b506101c5600480360360208110156101af57600080fd5b8101908080359060200190929190505050610b3f565b60405180806020018363ffffffff1663ffffffff168152602001828103825284818151815260200191508051906020019080838360005b838110156102175780820151818401526020810190506101fc565b50505050905090810190601f1680156102445780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561025f57600080fd5b5061028c6004803603602081101561027657600080fd5b8101908080359060200190929190505050610c18565b6040518082815260200191505060405180910390f35b61030e600480360360608110156102b857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c30565b005b34801561031c57600080fd5b506103496004803603602081101561033357600080fd5b8101908080359060200190929190505050610d14565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561039757600080fd5b50610461600480360360408110156103ae57600080fd5b81019080803590602001906401000000008111156103cb57600080fd5b8201836020820111156103dd57600080fd5b803590602001918460018302840111640100000000831117156103ff57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803563ffffffff169060200190929190505050610d47565b005b34801561046f57600080fd5b5061049c6004803603602081101561048657600080fd5b8101908080359060200190929190505050610ee5565b604051808381526020018260ff1660ff1681526020019250505060405180910390f35b3480156104cb57600080fd5b5061050e600480360360208110156104e257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f23565b6040518082815260200191505060405180910390f35b34801561053057600080fd5b5061055d6004803603602081101561054757600080fd5b8101908080359060200190929190505050610f3b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156105ab57600080fd5b506105ee600480360360208110156105c257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f78565b6040518082815260200191505060405180910390f35b34801561061057600080fd5b50610619610fc1565b005b34801561062757600080fd5b506106546004803603602081101561063e57600080fd5b8101908080359060200190929190505050611091565b005b34801561066257600080fd5b5061066b6110ac565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156106b957600080fd5b506106c26110d5565b604051808215151515815260200191505060405180910390f35b3480156106e857600080fd5b5061072b600480360360208110156106ff57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061112c565b005b34801561073957600080fd5b506107666004803603602081101561075057600080fd5b8101908080359060200190929190505050611149565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b80806002805490501015610824576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f4576656e7420646f6573206e6f7420657869737421000000000000000000000081525060200191505060405180910390fd5b60006001806040518060400160405280868152602001600060ff16815250908060018154018082558091505090600182039060005260206000209060020201600090919290919091506000820151816000015560208201518160010160006101000a81548160ff021916908360ff1602179055505050039050336003600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050555060056000848152602001908152602001600020600081548092919060010191905055507f18b0cd07168eb72bb0c5bd4ef7b666b3dd0c9baa9874f61bba1374eb59103c0081846002868154811061099157fe5b9060005260206000209060020201600001600287815481106109af57fe5b906000526020600020906002020160010160009054906101000a900463ffffffff1660405180858152602001848152602001806020018363ffffffff1663ffffffff168152602001828103825284818154600181600116156101000203166002900481526020019150805460018160011615610100020316600290048015610a785780601f10610a4d57610100808354040283529160200191610a78565b820191906000526020600020905b815481529060010190602001808311610a5b57829003601f168201915b50509550505050505060405180910390a1505050565b816008600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60028181548110610b4c57fe5b9060005260206000209060020201600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bf85780601f10610bcd57610100808354040283529160200191610bf8565b820191906000526020600020905b815481529060010190602001808311610bdb57829003601f168201915b5050505050908060010160009054906101000a900463ffffffff16905082565b60056020528060005260406000206000915090505481565b3373ffffffffffffffffffffffffffffffffffffffff166003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161480610cfb57503373ffffffffffffffffffffffffffffffffffffffff166008600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b610d0457600080fd5b610d0f83838361117c565b505050565b60036020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006001600260405180604001604052808681526020018563ffffffff16815250908060018154018082558091505090600182039060005260206000209060020201600090919290919091506000820151816000019080519060200190610daf929190611404565b5060208201518160010160006101000a81548163ffffffff021916908363ffffffff1602179055505050039050336004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f8c5af749065e922554309a97225ec2d6780f9ff5a7a9ca9e21725ac4de6ff0af81848460405180848152602001806020018363ffffffff168152602001828103825284818151815260200191508051906020019080838360005b83811015610ea4578082015181840152602081019050610e89565b50505050905090810190601f168015610ed15780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a1505050565b60018181548110610ef257fe5b90600052602060002090600202016000915090508060000154908060010160009054906101000a900460ff16905082565b60066020528060005260406000206000915090505481565b60006003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610fc96110d5565b610fd257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6110996110d5565b6110a257600080fd5b8060078190555050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614905090565b6111346110d5565b61113d57600080fd5b6111468161130c565b50565b60046020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b806007546001828154811061118d57fe5b906000526020600020906002020160010160009054906101000a900460ff1660ff1611156111ba57600080fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008154809291906001019190505550600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600190039190505550336003600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550818373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a450505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141561134657600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061144557805160ff1916838001178555611473565b82800160010185558215611473579182015b82811115611472578251825591602001919060010190611457565b5b5090506114809190611484565b5090565b6114a691905b808211156114a257600081600090555060010161148a565b5090565b9056fea265627a7a723158205d93ca7b360388a360347194f154ab138097e59167c76f98d98e28415e0fc4fa64736f6c63430005100032",
  sourceMap:
    "70:43:0:-;;;171:3:5;147:27;;538:10:2;529:6;;:19;;;;;;;;;;;;;;;;;;593:6;;;;;;;;;;;560:40;;589:1;560:40;;;;;;;;;;;;70:43:0;;;;;;",
  deployedSourceMap:
    "70:43:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1091:344:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1091:344:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1091:344:3;;;;;;;;;;;;;;;;;:::i;:::-;;1114:184:5;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1114:184:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;460:21:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;460:21:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;460:21:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;460:21:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;601:46;;8:9:-1;5:2;;;30:1;27;20:12;5:2;601:46:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;601:46:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;796:310:5;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;796:310:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;494:46:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;494:46:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;494:46:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;852:227;;8:9:-1;5:2;;;30:1;27;20:12;5:2;852:227:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;852:227:3;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;852:227:3;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;852:227:3;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;852:227:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;852:227:3;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;430:23;;8:9:-1;5:2;;;30:1;27;20:12;5:2;430:23:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;430:23:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;654:49;;8:9:-1;5:2;;;30:1;27;20:12;5:2;654:49:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;654:49:3;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;360:116:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;360:116:5;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;360:116:5;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;235:117;;8:9:-1;5:2;;;30:1;27;20:12;5:2;235:117:5;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;235:117:5;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1314:130:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1314:130:2;;;:::i;:::-;;1577:106:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1577:106:5;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1577:106:5;;;;;;;;;;;;;;;;;:::i;:::-;;664:72:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;664:72:2;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;962:85;;8:9:-1;5:2;;;30:1;27;20:12;5:2;962:85:2;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1608:103;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1608:103:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1608:103:2;;;;;;;;;;;;;;;;;;;:::i;:::-;;547:47:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;547:47:3;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;547:47:3;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1091:344;1147:8;787:7;770:6;:13;;;;:24;;762:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1168:7;1214:1;1178:7;1191:19;;;;;;;;1198:8;1191:19;;;;1208:1;1191:19;;;;;1178:33;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1178:33:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:37;1168:47;;1246:10;1226:13;:17;1240:2;1226:17;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;1268:16;:28;1285:10;1268:28;;;;;;;;;;;;;;;;:30;;;;;;;;;;;;;1309:16;:26;1326:8;1309:26;;;;;;;;;;;;:28;;;;;;;;;;;;;1353:74;1363:2;1367:8;1377:6;1384:8;1377:16;;;;;;;;;;;;;;;;;;:26;;1405:6;1412:8;1405:16;;;;;;;;;;;;;;;;;;:21;;;;;;;;;;;;1353:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;831:1;1091:344;;:::o;1114:184:5:-;1224:9;1196:15;:25;1212:8;1196:25;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;1281:8;1270:9;1249:41;;1258:10;1249:41;;;;;;;;;;;;1114:184;;:::o;460:21:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;601:46::-;;;;;;;;;;;;;;;;;:::o;796:310:5:-;975:10;948:37;;:13;:23;962:8;948:23;;;;;;;;;;;;;;;;;;;;;:37;;;:97;;;;1035:10;1006:39;;:15;:25;1022:8;1006:25;;;;;;;;;;;;;;;;;;;;;:39;;;948:97;926:130;;;;;;1067:31;1077:5;1084:3;1089:8;1067:9;:31::i;:::-;796:310;;;:::o;494:46:3:-;;;;;;;;;;;;;;;;;;;;;;:::o;852:227::-;931:7;981:1;941:6;953:24;;;;;;;;959:10;953:24;;;;971:5;953:24;;;;;941:37;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;941:37:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:41;931:51;;1014:10;993:14;:18;1008:2;993:18;;;;;;;;;;;;:31;;;;;;;;;;;;;;;;;;1040;1049:2;1053:10;1065:5;1040:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1040:31:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;852:227;;;:::o;430:23::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;654:49::-;;;;;;;;;;;;;;;;;:::o;360:116:5:-;418:7;445:13;:23;459:8;445:23;;;;;;;;;;;;;;;;;;;;;438:30;;360:116;;;:::o;235:117::-;293:7;320:16;:24;337:6;320:24;;;;;;;;;;;;;;;;313:31;;235:117;;;:::o;1314:130:2:-;855:9;:7;:9::i;:::-;847:18;;;;;;1409:1;1372:40;;1393:6;;;;;;;;;;;1372:40;;;;;;;;;;;;1436:1;1419:6;;:19;;;;;;;;;;;;;;;;;;1314:130::o;1577:106:5:-;855:9:2;:7;:9::i;:::-;847:18;;;;;;1666:9:5;1650:13;:25;;;;1577:106;:::o;664:72:2:-;701:7;724:6;;;;;;;;;;;717:13;;664:72;:::o;962:85::-;1001:4;1035:6;;;;;;;;;;;1021:20;;:10;:20;;;1014:27;;962:85;:::o;1608:103::-;855:9;:7;:9::i;:::-;847:18;;;;;;1677:28;1696:8;1677:18;:28::i;:::-;1608:103;:::o;547:47:3:-;;;;;;;;;;;;;;;;;;;;;;:::o;484:304:5:-;607:8;1405:13;;1369:7;1377:9;1369:18;;;;;;;;;;;;;;;;;;:32;;;;;;;;;;;;:49;;;;1361:58;;;;;;628:16;:21;645:3;628:21;;;;;;;;;;;;;;;;:23;;;;;;;;;;;;;662:16;:23;679:5;662:23;;;;;;;;;;;;;;;;:25;;;;;;;;;;;;;;724:10;698:13;:23;712:8;698:23;;;;;;;;;;;;:36;;;;;;;;;;;;;;;;;;771:8;766:3;750:30;;759:5;750:30;;;;;;;;;;;;484:304;;;;:::o;1848:173:2:-;1938:1;1918:22;;:8;:22;;;;1910:31;;;;;;1982:8;1953:38;;1974:6;;;;;;;;;;;1953:38;;;;;;;;;;;;2007:8;1998:6;;:17;;;;;;;;;;;;;;;;;;1848:173;:::o;70:43:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  source:
    'pragma solidity >=0.5.0 <0.6.0;\r\n\r\nimport "./ticketOwnership.sol";\r\n\r\ncontract SecureTicket is TicketOwnership {}\r\n',
  sourcePath:
    "C:/Users/Ali/source/repos/secure-ticket/smart_contract/contracts/SecureTicket.sol",
  ast: {
    absolutePath:
      "/C/Users/Ali/source/repos/secure-ticket/smart_contract/contracts/SecureTicket.sol",
    exportedSymbols: {
      SecureTicket: [5],
    },
    id: 6,
    nodeType: "SourceUnit",
    nodes: [
      {
        id: 1,
        literals: ["solidity", ">=", "0.5", ".0", "<", "0.6", ".0"],
        nodeType: "PragmaDirective",
        src: "0:31:0",
      },
      {
        absolutePath:
          "/C/Users/Ali/source/repos/secure-ticket/smart_contract/contracts/ticketOwnership.sol",
        file: "./ticketOwnership.sol",
        id: 2,
        nodeType: "ImportDirective",
        scope: 6,
        sourceUnit: 496,
        src: "35:31:0",
        symbolAliases: [],
        unitAlias: "",
      },
      {
        baseContracts: [
          {
            arguments: null,
            baseName: {
              contractScope: null,
              id: 3,
              name: "TicketOwnership",
              nodeType: "UserDefinedTypeName",
              referencedDeclaration: 495,
              src: "95:15:0",
              typeDescriptions: {
                typeIdentifier: "t_contract$_TicketOwnership_$495",
                typeString: "contract TicketOwnership",
              },
            },
            id: 4,
            nodeType: "InheritanceSpecifier",
            src: "95:15:0",
          },
        ],
        contractDependencies: [54, 163, 318, 324, 495],
        contractKind: "contract",
        documentation: null,
        fullyImplemented: true,
        id: 5,
        linearizedBaseContracts: [5, 495, 324, 318, 163, 54],
        name: "SecureTicket",
        nodeType: "ContractDefinition",
        nodes: [],
        scope: 6,
        src: "70:43:0",
      },
    ],
    src: "0:115:0",
  },
  legacyAST: {
    attributes: {
      absolutePath:
        "/C/Users/Ali/source/repos/secure-ticket/smart_contract/contracts/SecureTicket.sol",
      exportedSymbols: {
        SecureTicket: [5],
      },
    },
    children: [
      {
        attributes: {
          literals: ["solidity", ">=", "0.5", ".0", "<", "0.6", ".0"],
        },
        id: 1,
        name: "PragmaDirective",
        src: "0:31:0",
      },
      {
        attributes: {
          SourceUnit: 496,
          absolutePath:
            "/C/Users/Ali/source/repos/secure-ticket/smart_contract/contracts/ticketOwnership.sol",
          file: "./ticketOwnership.sol",
          scope: 6,
          symbolAliases: [null],
          unitAlias: "",
        },
        id: 2,
        name: "ImportDirective",
        src: "35:31:0",
      },
      {
        attributes: {
          contractDependencies: [54, 163, 318, 324, 495],
          contractKind: "contract",
          documentation: null,
          fullyImplemented: true,
          linearizedBaseContracts: [5, 495, 324, 318, 163, 54],
          name: "SecureTicket",
          nodes: [null],
          scope: 6,
        },
        children: [
          {
            attributes: {
              arguments: null,
            },
            children: [
              {
                attributes: {
                  contractScope: null,
                  name: "TicketOwnership",
                  referencedDeclaration: 495,
                  type: "contract TicketOwnership",
                },
                id: 3,
                name: "UserDefinedTypeName",
                src: "95:15:0",
              },
            ],
            id: 4,
            name: "InheritanceSpecifier",
            src: "95:15:0",
          },
        ],
        id: 5,
        name: "ContractDefinition",
        src: "70:43:0",
      },
    ],
    id: 6,
    name: "SourceUnit",
    src: "0:115:0",
  },
  compiler: {
    name: "solc",
    version: "0.5.16+commit.9c3226ce.Emscripten.clang",
  },
  networks: {},
  schemaVersion: "3.3.3",
  updatedAt: "2021-02-08T11:48:13.681Z",
  devdoc: {
    methods: {
      "isOwner()": {
        return: "true if `msg.sender` is the owner of the contract.",
      },
      "owner()": {
        return: "the address of the owner.",
      },
      "renounceOwnership()": {
        details:
          "Allows the current owner to relinquish control of the contract.",
      },
      "transferOwnership(address)": {
        details:
          "Allows the current owner to transfer control of the contract to a newOwner.",
        params: {
          newOwner: "The address to transfer ownership to.",
        },
      },
    },
  },
  userdoc: {
    methods: {
      "renounceOwnership()": {
        notice:
          "Renouncing to ownership will leave the contract without an owner. It will not be possible to call the functions with the `onlyOwner` modifier anymore.",
      },
    },
  },
};
