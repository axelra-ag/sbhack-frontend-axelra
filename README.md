# SBHACK19 - Team Axelra

## velove - cycle and earn CO2 coins !

Velove is a blockchain app which rewards people for commuting with their bike. There are 4 million commuters in Switzerland, more than half of whom use cars to get to work. 31% use public transport and only 15% walk or cycle.
That's why we create velove, with which we want to encourage and reward people to ride more with bikes. By riding the bike to work, you can earn our virtual currency – the CO2 token. 
Once your ride is finished, we tell you how much CO2 tokens you have earned and how much you have reduced your carbon offset.
Of course you can also send the CO2 token to other people in the network - CO2 is a real ERC20 token on the Ethereum blockchain.

### Public Links
If you would like to test our application, you can find it at the following link: https://expo.io/@jonnyburger/sbhack-frontend-axelra

The Application contract is deployed to the Kovan Ethereum network aswell: https://kovan.etherscan.io/address/0x040c4de372560edaf7ebbc71454e616c6f9a7e59

The CO2 token contract is deployed to the Kovan Ethereum network: https://kovan.etherscan.io/address/0xdb6dab112d07267f19293308599c5bfba2989e37

The backend API is deployed to [http://axelra-loadbalancer-1829904015.eu-west-1.elb.amazonaws.com](http://axelra-loadbalancer-1829904015.eu-west-1.elb.amazonaws.com)

### Project information
This project includes two Github repositories.
- The frontend of the velove application is at [https://github.com/axelra-ag/sbhack-frontend-axelra](https://github.com/axelra-ag/sbhack-frontend-axelra).
- The backend is at [https://github.com/axelra-ag/sbhack-backend-axelra](https://github.com/axelra-ag/sbhack-backend-axelra)



### Start the application in the development environment:

Install dependencies:
```
yarn
```

#### Make sure Ganache is running in the background and the smart contracts are deployed.
Your computer the phone and Ganache need to be connected to the same Wi-Fi respectively host.
```
ganache-cli -b 3 -h <NETWORK_ADAPTER_IP> -l 20000000000
```

Set Ganache host and port in environment variable ``RPC_SERVER``.
```
RPC_SERVER=<NETWORK_ADAPTER_IP>:7545
```

Deploy smart contracts to Ganache:
```
yarn run deploy
```

#### Start React Native Application 
Start the Expo app:
```
yarn expo start
```

#### Run backend locally
```
yarn run server
```
