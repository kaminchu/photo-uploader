import actions from './actions/index';

module.exports =  io => socket => {
  console.log('a user connected');
  socket.on('disconnect',() => console.log('user disconnected'));
  socket.on('action', action => {
    if (action.type in actions && typeof actions[action.type] === 'function') {
      actions[action.type](action, socket, io);
    }
  });
};
