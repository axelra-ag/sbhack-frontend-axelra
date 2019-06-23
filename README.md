# SBHACK19 - Team Axelra

## velove - cycle and earn CO2 coins !





### Project information
This project includes two Github repositories.
- This repository represents the frontend for the velove application.
- The backend is at [https://github.com/severinwullschleger/sbhack-backend-axelra](https://github.com/severinwullschleger/sbhack-backend-axelra)

The backend API is deployed to [http://axelra-loadbalancer-1829904015.eu-west-1.elb.amazonaws.com](http://axelra-loadbalancer-1829904015.eu-west-1.elb.amazonaws.com)

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