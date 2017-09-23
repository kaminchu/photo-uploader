//@flow
export default class ActionSender{
    socket: any;
    io: any;

    constructor(socket, io){
        this.socket = socket;
        this.io = io;
    }
    sendMulticast(type, payload, meta) {
        console.log(type, payload, meta);
        this.io.emit('action', {type: type, payload: payload, meta: meta})
    };
    sendUnicast(type, payload, meta) {
        this.socket.emit('action', {type: type, payload: payload, meta: meta})
    }
}