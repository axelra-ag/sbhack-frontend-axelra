import {serviceContract} from "./get-contracts.js";

export const startRide = (stationId, secretKey, ethAddress, endStationId) => {
  if (endStationId) {
    return serviceContract.methods.startRide(stationId, web3.utils.utf8ToHex(secretKey)).send({
      from: ethAddress,
      gas: 8000000000
    })
      .on('transactionHash', tx => console.log(tx))
      .on('receipt', receipt => {
        return receipt.events.RideStarted.returnValues.rideId;
      });
  } else {
    return serviceContract.methods.startRide(stationId, web3.utils.utf8ToHex(secretKey), endStationId).send({
      from: ethAddress,
      gas: 8000000000
    })
      .on('transactionHash', tx => console.log(tx))
      .on('receipt', receipt => {
        return receipt.events.RideStarted.returnValues.rideId;
      });
  }
};

export const endRide = (rideId, endStationId, secretKey, ethAddress) => {
  if (endStationId) {
    return serviceContract.methods.endRide(rideId, endStationId, web3.utils.utf8ToHex(secretKey)).send({
      from: ethAddress,
      gas: 8000000000
    })
      .on('transactionHash', tx => console.log(tx))
      .on('receipt', receipt => {
        return receipt.events.RideEnded.returnValues;
      });
  } else {
    return serviceContract.methods.endRide(rideId, web3.utils.utf8ToHex(secretKey)).send({
      from: ethAddress,
      gas: 8000000000
    })
      .on('transactionHash', tx => console.log(tx))
      .on('receipt', receipt => {
        return receipt.events.RideEnded.returnValues;
      });
  }
};