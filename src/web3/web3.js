import Web3 from "web3";

export const Network = {
  MAIN: "MAIN",
  MORDEN: "MORDEN",
  ROPSTEN: "ROPSTEN",
  RINKEBY: "RINKEBY",
  KOVAN: "KOVAN",
  GANACHE: "GANACHE",
  UNKNOWN: "UNKNOWN"
};

const web3 = new Web3(
  new Web3.providers.HttpProvider("http://172.20.10.2:8545")
);

export const getNetwork = async () => {
  if (web3) {
    const netId = await web3.eth.net.getId().then(netId => {
      return netId;
    });
    console.log("Detected Network ID", netId);
    switch (netId.toString()) {
      case "1":
        console.log("Mainnet detected");
        return Network.MAIN;
      case "2":
        console.log("Morden test network detected.");
        return Network.MORDEN;
      case "3":
        console.log("Ropsten test network detected.");
        return Network.ROPSTEN;
      case "4":
        console.log("Rinkeby test network detected.");
        return Network.RINKEBY;
      case "42":
        console.log("Kovan test network detected.");
        return Network.KOVAN;
      case "1561202696539":
        console.log("GANACHE test network detected.");
        return Network.GANACHE;
      default:
        console.log("Unknown network detected.");
        return Network.UNKNOWN;
    }
  }
};

export const getAccounts = async () => {
  if (web3) {
    return web3.eth
      .getAccounts()
      .then(accounts => {
        return accounts;
      })
      .catch(err => {
        console.error("An error with getAccounts() occurred: " + err);
        return null;
      });
  }
};

export const getBalance = async address => {
  if (web3) {
    return web3.eth
      .getBalance(address)
      .then(balance => {
        return balance;
      })
      .catch(err =>
        console.error("An error with getBalance() occurred: " + err)
      );
  }
};

export const createAccount = () => {
  return web3.eth.accounts.create();
};
