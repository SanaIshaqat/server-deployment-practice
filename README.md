# server-deployment-practice


## LAB - 01
### Deployment Test
Author: Sana Ishaqat

[tests report](https://github.com/SanaIshaqat/server-deployment-practice/actions)

[back-end](https://sanaishaqat-server-deploy-prod.herokuapp.com/status)


### Setup
.env requirements
PORT - Port Number


### Running the app
npm run dev
Endpoint: /status
Returns Object
{
  "status": "running",
  "port": 3030,
  "domain": "sanaishaqat-server-deploy-prod.herokuapp.com"
}

### Tests
Unit Tests: npm run test
Run Server: npm run dev "Runs Index.js"

UML
![](img/UML01.jpg)