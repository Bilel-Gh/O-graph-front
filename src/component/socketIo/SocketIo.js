import socketIOClient from "socket.io-client";
require('dotenv').config();

const urlServer = process.env.REACT_APP_URL_SERVER

const ENDPOINT = `${urlServer}/`;
const socket = socketIOClient(ENDPOINT);

export default socket;