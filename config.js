require('dotenv').config();

const config = {

    "prefix": "!", //Add your prefix here
  
    "ownerOnly": false, //If set to true, only bot owner can control Pinger. If set to false, everyone can use Pinger.
  
    "ownerID": "", //Id of bot owner for "ownerOnly" function.
  
    "channelName": "ping", //Name of channel, where will be all pings sent.
  
    "pingInterval": "1000", //Time in ms (miliseconds). 1000 recommended - If 1000ms (1s), bot will send ping every 1000ms (1s).
  
    "token": process.env.dev_token //Bot token from discord app.
  
  }
  
  module.exports = config;