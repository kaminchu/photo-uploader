module.exports =  function (io){ return function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  // クライアントからメッセージを受け取ったら投げ返す
  socket.on('action', function(action){
    // 同じクライアントに送信する場合は socket.emit を io.emit に変える

    if(action.type === 'POST_PHOTO') {
      console.log(action);
      io.emit('action', {type: 'CHANGE_MESSAGE', payload: action.payload});
    }
  });
}}


