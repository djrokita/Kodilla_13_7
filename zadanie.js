var fs = require('fs');
var colors = require('colors');

fs.readdir(__dirname, function(err, files) {
	console.log(files);
	//Komentarz potrzebny na commit
	fs.writeFile('./myPath.txt', files, function(err, data) {
		if (err) throw err;
		console.log('Zapisano do pliku'.green);
	});
});

fs.readFile('./myPath.txt', 'utf-8', function(err, data) {
	console.log('Dane po zapisie'.blue);
	console.log(data);
});

