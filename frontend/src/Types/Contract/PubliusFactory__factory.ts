/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "./common";
import type {
  PubliusFactory,
  PubliusFactoryInterface,
} from "./PubliusFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_publiusImpl",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "beaconAddress",
        type: "address",
      },
    ],
    name: "BeaconDeployed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "publicationAddress",
        type: "address",
      },
    ],
    name: "PublicationCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_publicationAuthorAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "_publicationAuthorName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_publicationName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_publicationCoverImage",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_costToMint",
        type: "uint256",
      },
    ],
    name: "createPublication",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBeacon",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getPublicationAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "publicationCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051611a82380380611a8283398101604081905261002f916100bd565b8060405161003c906100b0565b6001600160a01b039091168152602001604051809103906000f080158015610068573d6000803e3d6000fd5b506001600160a01b031660808190526040519081527f23e72bf06da93b8174a09c1259470d8c19cfa76701a76a409c311f3288686b489060200160405180910390a1506100ed565b610a3c8061104683390190565b6000602082840312156100cf57600080fd5b81516001600160a01b03811681146100e657600080fd5b9392505050565b608051610f316101156000396000818160ae01528181610111015261021a0152610f316000f3fe60806040523480156200001157600080fd5b50600436106200005e5760003560e01c80630a97c8dd14620000635780632d6b3a6b14620000ac5780632db54f7d14620000d3578063aaf10f4214620000ec578063d6a315fe14620000f6575b600080fd5b6200008f620000743660046200036a565b6000908152602081905260409020546001600160a01b031690565b6040516001600160a01b0390911681526020015b60405180910390f35b7f00000000000000000000000000000000000000000000000000000000000000006200008f565b620000dd60015481565b604051908152602001620000a3565b6200008f6200010d565b6200008f62000107366004620003e9565b62000199565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663406fe66c6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200016e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001949190620004b3565b905090565b6000898152602081905260408120546001600160a01b031615620002165760405162461bcd60e51b815260206004820152602a60248201527f5075626c697573466163746f72793a205075626c69636174696f6e20616c72656044820152696164792065786973747360b01b606482015260840160405180910390fd5b60007f00000000000000000000000000000000000000000000000000000000000000006337eaa78a60e01b8c8c8c8c8c8c8c8c8c604051602401620002649998979695949392919062000503565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051620002a3906200035c565b620002b092919062000573565b604051809103906000f080158015620002cd573d6000803e3d6000fd5b5060008c815260208190526040812080546001600160a01b0319166001600160a01b03841617905560018054929350906200030883620005d3565b9091555050604080518c81526001600160a01b03831660208201527f0cbdc7125166de006b9aa9404a312b86b7efdff4d8e123c23f3d8a13bd9be453910160405180910390a19a9950505050505050505050565b61090080620005fc83390190565b6000602082840312156200037d57600080fd5b5035919050565b6001600160a01b03811681146200039a57600080fd5b50565b60008083601f840112620003b057600080fd5b50813567ffffffffffffffff811115620003c957600080fd5b602083019150836020828501011115620003e257600080fd5b9250929050565b600080600080600080600080600060c08a8c0312156200040857600080fd5b8935985060208a01356200041c8162000384565b975060408a013567ffffffffffffffff808211156200043a57600080fd5b620004488d838e016200039d565b909950975060608c01359150808211156200046257600080fd5b620004708d838e016200039d565b909750955060808c01359150808211156200048a57600080fd5b50620004998c828d016200039d565b9a9d999c50979a9699959894979660a00135949350505050565b600060208284031215620004c657600080fd5b8151620004d38162000384565b9392505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b8981526001600160a01b038916602082015260c06040820181905260009062000530908301898b620004da565b82810360608401526200054581888a620004da565b905082810360808401526200055c818688620004da565b9150508260a08301529a9950505050505050505050565b60018060a01b038316815260006020604081840152835180604085015260005b81811015620005b15785810183015185820160600152820162000593565b506000606082860101526060601f19601f830116850101925050509392505050565b600060018201620005f457634e487b7160e01b600052601160045260246000fd5b506001019056fe60806040526040516109003803806109008339810160408190526100229161045b565b61002e82826000610035565b5050610585565b61003e83610100565b6040516001600160a01b038416907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e90600090a260008251118061007f5750805b156100fb576100f9836001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100e9919061051b565b836102a360201b6100291760201c565b505b505050565b610113816102cf60201b6100551760201c565b6101725760405162461bcd60e51b815260206004820152602560248201527f455243313936373a206e657720626561636f6e206973206e6f74206120636f6e6044820152641d1c9858dd60da1b60648201526084015b60405180910390fd5b6101e6816001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d7919061051b565b6102cf60201b6100551760201c565b61024b5760405162461bcd60e51b815260206004820152603060248201527f455243313936373a20626561636f6e20696d706c656d656e746174696f6e206960448201526f1cc81b9bdd08184818dbdb9d1c9858dd60821b6064820152608401610169565b806102827fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5060001b6102de60201b6100641760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b60606102c883836040518060600160405280602781526020016108d9602791396102e1565b9392505050565b6001600160a01b03163b151590565b90565b6060600080856001600160a01b0316856040516102fe9190610536565b600060405180830381855af49150503d8060008114610339576040519150601f19603f3d011682016040523d82523d6000602084013e61033e565b606091505b5090925090506103508683838761035a565b9695505050505050565b606083156103c95782516000036103c2576001600160a01b0385163b6103c25760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610169565b50816103d3565b6103d383836103db565b949350505050565b8151156103eb5781518083602001fd5b8060405162461bcd60e51b81526004016101699190610552565b80516001600160a01b038116811461041c57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561045257818101518382015260200161043a565b50506000910152565b6000806040838503121561046e57600080fd5b61047783610405565b60208401519092506001600160401b038082111561049457600080fd5b818501915085601f8301126104a857600080fd5b8151818111156104ba576104ba610421565b604051601f8201601f19908116603f011681019083821181831017156104e2576104e2610421565b816040528281528860208487010111156104fb57600080fd5b61050c836020830160208801610437565b80955050505050509250929050565b60006020828403121561052d57600080fd5b6102c882610405565b60008251610548818460208701610437565b9190910192915050565b6020815260008251806020840152610571816040850160208701610437565b601f01601f19169190910160400192915050565b610345806105946000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610067565b610100565b565b606061004e83836040518060600160405280602781526020016102e960279139610124565b9392505050565b6001600160a01b03163b151590565b90565b600061009a7fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50546001600160a01b031690565b6001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100fb919061024c565b905090565b3660008037600080366000845af43d6000803e80801561011f573d6000f35b3d6000fd5b6060600080856001600160a01b0316856040516101419190610299565b600060405180830381855af49150503d806000811461017c576040519150601f19603f3d011682016040523d82523d6000602084013e610181565b606091505b50915091506101928683838761019c565b9695505050505050565b60608315610210578251600003610209576001600160a01b0385163b6102095760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064015b60405180910390fd5b508161021a565b61021a8383610222565b949350505050565b8151156102325781518083602001fd5b8060405162461bcd60e51b815260040161020091906102b5565b60006020828403121561025e57600080fd5b81516001600160a01b038116811461004e57600080fd5b60005b83811015610290578181015183820152602001610278565b50506000910152565b600082516102ab818460208701610275565b9190910192915050565b60208152600082518060208401526102d4816040850160208701610275565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220f9b87127417650d94f9f98cd72654978bfb72e785e4bb7a839c0a464e468351764736f6c63430008120033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220bc91a5bad2c18a5a018f80fca018b1d7fd65b489b6d8ac7e3517a81be3e79eb064736f6c6343000812003360a060405234801561001057600080fd5b50604051610a3c380380610a3c83398101604081905261002f916101dd565b610038336100a6565b80604051610045906101d0565b6001600160a01b039091168152602001604051809103906000f080158015610071573d6000803e3d6000fd5b506001600160a01b03908116608052600180546001600160a01b0319169183169190911790556100a0326100f6565b5061020d565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6100fe610174565b6001600160a01b0381166101685760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b610171816100a6565b50565b6000546001600160a01b031633146101ce5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161015f565b565b6104e48061055883390190565b6000602082840312156101ef57600080fd5b81516001600160a01b038116811461020657600080fd5b9392505050565b608051610330610228600039600061010f01526103306000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631c1b877214610067578063406fe66c1461007c5780635c60da1b146100ab578063715018a6146100bc5780638da5cb5b146100c4578063f2fde38b146100d5575b600080fd5b61007a6100753660046102ca565b6100e8565b005b60015461008f906001600160a01b031681565b6040516001600160a01b03909116815260200160405180910390f35b6001546001600160a01b031661008f565b61007a61018e565b6000546001600160a01b031661008f565b61007a6100e33660046102ca565b6101a2565b6100f0610220565b604051631b2ce7f360e11b81526001600160a01b0382811660048301527f00000000000000000000000000000000000000000000000000000000000000001690633659cfe690602401600060405180830381600087803b15801561015357600080fd5b505af1158015610167573d6000803e3d6000fd5b5050600180546001600160a01b0319166001600160a01b0394909416939093179092555050565b610196610220565b6101a0600061027a565b565b6101aa610220565b6001600160a01b0381166102145760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61021d8161027a565b50565b6000546001600160a01b031633146101a05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161020b565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156102dc57600080fd5b81356001600160a01b03811681146102f357600080fd5b939250505056fea264697066735822122065fe7d94cf3a2ea47c596509e7a27e34a50ec758d0ac5f672ffe2febf43c8efa64736f6c63430008120033608060405234801561001057600080fd5b506040516104e43803806104e483398101604081905261002f91610151565b61003833610047565b61004181610097565b50610181565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6100aa8161014260201b6101a01760201c565b6101205760405162461bcd60e51b815260206004820152603360248201527f5570677261646561626c65426561636f6e3a20696d706c656d656e746174696f60448201527f6e206973206e6f74206120636f6e747261637400000000000000000000000000606482015260840160405180910390fd5b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b03163b151590565b60006020828403121561016357600080fd5b81516001600160a01b038116811461017a57600080fd5b9392505050565b610354806101906000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633659cfe61461005c5780635c60da1b14610071578063715018a61461009a5780638da5cb5b146100a2578063f2fde38b146100b3575b600080fd5b61006f61006a3660046102ee565b6100c6565b005b6001546001600160a01b03165b6040516001600160a01b03909116815260200160405180910390f35b61006f61010e565b6000546001600160a01b031661007e565b61006f6100c13660046102ee565b610122565b6100ce6101af565b6100d781610209565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6101166101af565b610120600061029e565b565b61012a6101af565b6001600160a01b0381166101945760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61019d8161029e565b50565b6001600160a01b03163b151590565b6000546001600160a01b031633146101205760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161018b565b6001600160a01b0381163b61027c5760405162461bcd60e51b815260206004820152603360248201527f5570677261646561626c65426561636f6e3a20696d706c656d656e746174696f6044820152721b881a5cc81b9bdd08184818dbdb9d1c9858dd606a1b606482015260840161018b565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561030057600080fd5b81356001600160a01b038116811461031757600080fd5b939250505056fea26469706673582212205a4bcbe734b0303f91cbd77e7b789360ca15c6a5575a00561307587f1772993c64736f6c63430008120033";

type PubliusFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PubliusFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PubliusFactory__factory extends ContractFactory {
  constructor(...args: PubliusFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _publiusImpl: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PubliusFactory> {
    return super.deploy(
      _publiusImpl,
      overrides || {}
    ) as Promise<PubliusFactory>;
  }
  override getDeployTransaction(
    _publiusImpl: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_publiusImpl, overrides || {});
  }
  override attach(address: string): PubliusFactory {
    return super.attach(address) as PubliusFactory;
  }
  override connect(signer: Signer): PubliusFactory__factory {
    return super.connect(signer) as PubliusFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PubliusFactoryInterface {
    return new utils.Interface(_abi) as PubliusFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PubliusFactory {
    return new Contract(address, _abi, signerOrProvider) as PubliusFactory;
  }
}
