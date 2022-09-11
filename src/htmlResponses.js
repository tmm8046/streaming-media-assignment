const fs = require('fs');

const getIndex = (request, response, address) => {
  const index = fs.readFileSync(__dirname.join(address));
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

module.exports.getIndex = getIndex;