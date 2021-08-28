# Static-Server
Simple express static server for landings **http only**.  
*You are supposed to use a reverse proxy*


## Guide

Simple bootstraper to run a webserver on the fly for static content.

1.) Clone this repository   
2.) `npm install` to install all dependencies  
3.) Drag and drop all assets/resources to `src/public`.   
4.) Ensure you have an entry point file `index.html` which be the main page in `/src/index.html`.  
5.) All other html files in `/src` will be binded to links depending on their names. For example `src/tos.html` will be avaiable on `domain/tos`.


### Quick Start Ubuntu


```sh
#Install pre-requisites
sudo apt-get update
sudo apt-get install git
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
apt-get install git
npm i -g pm2

#Clone the repo 

git clone https://github.com/dyingg/Static-Server.git

# Now use WINSCP or anything of your choice to put your files in src. Then

npm run production

# To see logs

npm run logs
```
