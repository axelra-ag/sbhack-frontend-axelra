/*import GanacheServiceContractAddress from '../../../sbhack-backend-axelra/smartcontracts/constants/GanacheServiceContractAddress.json';
import GanacheTokenContractAddress from '../../../sbhack-backend-axelra/smartcontracts/constants/GanacheTokenContractAddress.json';
import GanacheTokenAbi from '../../../sbhack-backend-axelra/smartcontracts/constants/GanacheTokenContractABI.json';
import GanacheServiceAbi from '../../../sbhack-backend-axelra/smartcontracts/constants/GanacheServiceContractABI.json';*/
import Web3 from "web3";

// or use static values
const tokenabi = [
  {
    constant: true,
    inputs: [],
    name: "admin2",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x06a8f8a2"
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x06fdde03"
  },
  {
    constant: false,
    inputs: [
      { name: "_spender", type: "address" },
      { name: "_value", type: "uint256" }
    ],
    name: "approve",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x095ea7b3"
  },
  {
    constant: true,
    inputs: [],
    name: "admin1",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x115976c4"
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x18160ddd"
  },
  {
    constant: false,
    inputs: [
      { name: "_from", type: "address" },
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" }
    ],
    name: "transferFrom",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x23b872dd"
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x313ce567"
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply_",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x324536eb"
  },
  {
    constant: false,
    inputs: [],
    name: "transferDisable",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x353319a1"
  },
  {
    constant: false,
    inputs: [
      { name: "_holders", type: "address[]" },
      { name: "_sixMonthCliff", type: "uint256[]" }
    ],
    name: "lockTokens",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x3547800a"
  },
  {
    constant: false,
    inputs: [
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
      { name: "_methodName", type: "bytes4" },
      { name: "_args", type: "bytes" }
    ],
    name: "transferAndCall",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x3c4461be"
  },
  {
    constant: false,
    inputs: [
      { name: "_spender", type: "address" },
      { name: "_subtractedValue", type: "uint256" }
    ],
    name: "decreaseApproval",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x66188463"
  },
  {
    constant: false,
    inputs: [
      { name: "_signature", type: "bytes" },
      { name: "_from", type: "address" },
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
      { name: "_fee", type: "uint256" },
      { name: "_nonce", type: "uint256" }
    ],
    name: "transferPreSigned",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x685e9960"
  },
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x70a08231"
  },
  {
    constant: false,
    inputs: [],
    name: "finishMinting",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x7d64bcb4"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x8da5cb5b"
  },
  {
    constant: true,
    inputs: [],
    name: "mintingDone",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x8e2ae564"
  },
  {
    constant: false,
    inputs: [
      { name: "_signature", type: "bytes" },
      { name: "_from", type: "address" },
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" },
      { name: "_fee", type: "uint256" },
      { name: "_nonce", type: "uint256" },
      { name: "_methodName", type: "bytes4" },
      { name: "_args", type: "bytes" }
    ],
    name: "transferAndCallPreSigned",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x9378f7a4"
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x95d89b41"
  },
  {
    constant: true,
    inputs: [],
    name: "sixMonth",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0x986feefa"
  },
  {
    constant: true,
    inputs: [],
    name: "transfersEnabled1",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xa5b6a236"
  },
  {
    constant: false,
    inputs: [
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" }
    ],
    name: "transfer",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xa9059cbb"
  },
  {
    constant: true,
    inputs: [],
    name: "transfersEnabled2",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xb49b7b59"
  },
  {
    constant: true,
    inputs: [],
    name: "transfersEnabled3",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xc1f22953"
  },
  {
    constant: false,
    inputs: [
      { name: "_admin1", type: "address" },
      { name: "_admin2", type: "address" }
    ],
    name: "setAdmin",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xc55b6bb7"
  },
  {
    constant: true,
    inputs: [],
    name: "isTransferEnabled",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xcca5dcb6"
  },
  {
    constant: true,
    inputs: [],
    name: "maxSupply",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xd5abeb01"
  },
  {
    constant: false,
    inputs: [
      { name: "_spender", type: "address" },
      { name: "_addedValue", type: "uint256" }
    ],
    name: "increaseApproval",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xd73dd623"
  },
  {
    constant: true,
    inputs: [
      { name: "_owner", type: "address" },
      { name: "_spender", type: "address" }
    ],
    name: "allowance",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xdd62ed3e"
  },
  {
    constant: false,
    inputs: [
      { name: "_recipients", type: "address[]" },
      { name: "_amounts", type: "uint256[]" }
    ],
    name: "mint",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xe467f7e0"
  },
  {
    constant: false,
    inputs: [{ name: "_newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xf2fde38b"
  },
  {
    constant: true,
    inputs: [],
    name: "firstFeb19",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xf5fa681e"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
    signature: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_holder", type: "address" },
      { indexed: false, name: "_timeout", type: "uint256" }
    ],
    name: "TokensLocked",
    type: "event",
    signature:
      "0xac87f20a77d28ee8bbb58ec87ea8fa968b3393efae1a368fd50b767c2847391c"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_from", type: "address" },
      { indexed: true, name: "_to", type: "address" },
      { indexed: false, name: "_value", type: "uint256" },
      { indexed: false, name: "_methodName", type: "bytes4" },
      { indexed: false, name: "_args", type: "bytes" }
    ],
    name: "TransferAndCall",
    type: "event",
    signature:
      "0xdd3e0c228b64b39b4fe47dda02dba02d084503cb9a5692cb36a09c2253762927"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_from", type: "address" },
      { indexed: true, name: "_to", type: "address" },
      { indexed: true, name: "_delegate", type: "address" },
      { indexed: false, name: "_amount", type: "uint256" },
      { indexed: false, name: "_fee", type: "uint256" }
    ],
    name: "TransferPreSigned",
    type: "event",
    signature:
      "0xec5a73fd1f178be20c1bca1b406cbf4b5c20d833b66e582fc122fb4baa0fc2a4"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_from", type: "address" },
      { indexed: true, name: "_to", type: "address" },
      { indexed: true, name: "_delegate", type: "address" },
      { indexed: false, name: "_amount", type: "uint256" },
      { indexed: false, name: "_fee", type: "uint256" },
      { indexed: false, name: "_methodName", type: "bytes4" },
      { indexed: false, name: "_args", type: "bytes" }
    ],
    name: "TransferAndCallPreSigned",
    type: "event",
    signature:
      "0x95f8bb1059e9b9dc861fa51f50b9143ef0101152bce82dd2760584849223d1f2"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "owner", type: "address" },
      { indexed: true, name: "spender", type: "address" },
      { indexed: false, name: "value", type: "uint256" }
    ],
    name: "Approval",
    type: "event",
    signature:
      "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "from", type: "address" },
      { indexed: true, name: "to", type: "address" },
      { indexed: false, name: "value", type: "uint256" }
    ],
    name: "Transfer",
    type: "event",
    signature:
      "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
  }
];
const serviceabi = [
  {
    constant: false,
    inputs: [
      { name: "_rideId", type: "uint256" },
      { name: "_endStationSecretHash", type: "bytes32" }
    ],
    name: "endRide",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x2caf763e"
  },
  {
    constant: false,
    inputs: [
      { name: "_checkpointId", type: "uint256" },
      { name: "_checkpointSecret", type: "bytes32" }
    ],
    name: "redeemCheckpointReward",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x64410212"
  },
  {
    constant: false,
    inputs: [
      { name: "_stationId1", type: "uint256" },
      { name: "_stationId2", type: "uint256" },
      { name: "distance", type: "uint256" }
    ],
    name: "setDistances",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x6a3e68e8"
  },
  {
    constant: false,
    inputs: [
      { name: "_rideId", type: "uint256" },
      { name: "_endStationId", type: "uint256" },
      { name: "_endStationSecretHash", type: "bytes32" }
    ],
    name: "endRide",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x762e05d6"
  },
  {
    constant: false,
    inputs: [
      { name: "_from", type: "address" },
      { name: "_value", type: "uint256" },
      { name: "_rewardPerCheckin", type: "uint256" },
      { name: "_amountOfRewards", type: "uint256" },
      { name: "_checkpointSecret", type: "bytes32" }
    ],
    name: "createSponsoredCheckpoint",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0x9c9ea337"
  },
  {
    constant: false,
    inputs: [
      { name: "_startStationId", type: "uint256" },
      { name: "_startStationSecretHash", type: "bytes32" }
    ],
    name: "startRide",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xaae38db3"
  },
  {
    constant: false,
    inputs: [
      { name: "_secretHash", type: "bytes32" },
      { name: "_stationIds", type: "uint256[]" },
      { name: "_distances", type: "uint256[]" }
    ],
    name: "createStation",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xad9c1e09"
  },
  {
    constant: false,
    inputs: [
      { name: "_startStationId", type: "uint256" },
      { name: "_startStationSecretHash", type: "bytes32" },
      { name: "_endStationId", type: "uint256" }
    ],
    name: "startRide",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xafb29d76"
  },
  {
    constant: false,
    inputs: [{ name: "contractAddress", type: "address" }],
    name: "setTokenContract",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xbbcd5bbe"
  },
  {
    constant: true,
    inputs: [],
    name: "contractOwner",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
    signature: "0xce606ee0"
  },
  {
    constant: false,
    inputs: [{ name: "_rewardPerDistance", type: "uint256" }],
    name: "setRewardPerDistance",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
    signature: "0xdb409814"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
    signature: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "rideId", type: "uint256" },
      { indexed: false, name: "rider", type: "address" },
      { indexed: false, name: "startStationId", type: "uint256" }
    ],
    name: "RideStarted",
    type: "event",
    signature:
      "0xdaac134dbc2add1b0e4e3c30f5bd908c53463a7e07d33a386937e5daea602516"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "rideId", type: "uint256" },
      { indexed: false, name: "rider", type: "address" },
      { indexed: false, name: "startStationId", type: "uint256" },
      { indexed: false, name: "endStationId", type: "uint256" },
      { indexed: false, name: "reward", type: "uint256" },
      { indexed: false, name: "distance", type: "uint256" }
    ],
    name: "RideEnded",
    type: "event",
    signature:
      "0x1c14cc8f3ec5a500a6d27a34b0566d206098cd98d1d2cf5966aecff72d99821b"
  }
];
const tokanaddress = "0x59d072E4C31A93CFAd369b00Ab6BF43Ff2593A2c";
const serviceaddress = "0x37e4B36d797C4852D4fCbd9Ab7e2FdA9379eD2dc";

export let tokenContract;
export let serviceContract;

const setContracts = () => {
  const web3 = new Web3(
    new Web3.providers.HttpProvider("http://192.168.225.117:8545")
  );
  if (!tokenContract || !serviceContract) {
    tokenContract = new web3.eth.Contract(tokenabi, tokanaddress);
    serviceContract = new web3.eth.Contract(serviceabi, serviceaddress);
  }
};

setContracts();
