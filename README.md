# Cronjob
use to call api Twitter
## Clone project
```bash
git clone https://github.com/tamto58713/cronjob
cd cronjob
```
## Install dependences
- via npm
```bash
npm install
```
- via yarn
```bash
yarn
```
## Start project (require .env file)
- via npm
```bash
npm start
```
- via yarn
```bash
yarn start
```
## Start project with Docker (require .env file)
```bash
docker-compose up -d
```
- show docker container
```bash
docker ps
```
- restart docker container
```bash
docker restart <container>
```  
- show logs of docker container
 ```bash
docker logs -f <container>
```
## Start project with pm2 (require .env file)
```bash
pm2 start index.js
```
- show logs
```bash
pm2 logs <index>
```

