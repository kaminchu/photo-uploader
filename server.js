import express from 'express';
import path from 'path';


const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 8080;

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('./webpack.config.express');
  const compiler = webpack(config);
  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));
  }

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  // クライアントからメッセージを受け取ったら投げ返す
  socket.on('chat message', function(msg){
    // 同じクライアントに送信する場合は socket.emit を io.emit に変える
    socket.emit('chat message', msg);
  });
});


console.log(`Served: http://localhost:${port}`);
http.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});