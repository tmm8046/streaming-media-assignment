const http = require('http');

const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, response, '/../client/client.html');
      break;
    case '/client2.html':
      htmlHandler.getIndex(request, response, '/../client/client2.html');
      break;
    case '/client3.html':
      htmlHandler.getIndex(request, response, '/../client/client3.html');
      break;
    case '/party.mp4':
      mediaHandler.getFile(request, response, '../client/party.mp4', 'video/mp4');
      break;
    case '/bling.mp3':
      mediaHandler.getFile(request, response, '../client/bling.mp3', 'audio/mp3');
      break;
    case '/bird.mp4':
      mediaHandler.getFile(request, response, '../client/bird.mp4', 'video/mp4');
      break;
    default:
      htmlHandler.getIndex(request, response, '/../client/client.html');
      break;
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
