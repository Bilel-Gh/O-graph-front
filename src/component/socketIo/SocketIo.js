// import io from "socket.io-client";
// let socket = io("http://localhost:3001");

import socketIOClient from "socket.io-client";

const ENDPOINT = "http://localhost:3001/";
const socket = socketIOClient(ENDPOINT);

export default socket;