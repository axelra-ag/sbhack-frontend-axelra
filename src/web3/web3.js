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
  new Web3.providers.HttpProvider("http://192.168.225.117:8545")
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
      case "1561229938200":
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
      .catch(err => {
        // console.error("An error with getBalance() occurred: " + err);
        return err;
      });
  }
};

export const createAccount = psw => {
  return web3.eth.personal
    .newAccount(psw)
    .then(s => {
      return s;
    })
    .catch(e => {
      throw new Error(e);
    });
};

export const lockAccount = address => {
  return web3.eth.personal
    .lockAccount(address)
    .then(s => {
      return s;
    })
    .catch(e => {
      throw new Error(e);
    });
};

export const unlockAccount = (address, pws, unlockDuration) => {
  return web3.eth.personal
    .unlockAccount(address, pws, unlockDuration)
    .then(s => {
      return s;
    })
    .catch(e => {
      throw new Error(e);
    });
};
