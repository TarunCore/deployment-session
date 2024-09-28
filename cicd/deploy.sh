#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v18.18.0/bin

cd deployment-session
git pull origin main
cd server
pm2 kill
pm2 start index.js
