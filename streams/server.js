const fs = require('fs');
const server = require('http').createServer();
const createBigFile = require('./createBigFile');

if (!fs.existsSync(__dirname + '/big.file')) {
	createBigFile();
}

server.on('request', (req, res) => {
	// inefficient way:
	//   fs.readFile('./big.file', (err, data) => {
	//     if (err) throw err;
	//     res.end(data);
	//   });
	const src = fs.createReadStream('./big.file');
	src.pipe(res);
});

server.listen(8000);
