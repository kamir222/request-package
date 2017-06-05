var request = require('request');
var fs = require('fs');

// request('https://sytantris.github.io/http-examples/', function (err, response, body) {
//   if (err) throw err; // if an error occurs, halt execution and throw err
//   console.log('Response Status Code:', response.statusCode);
// });

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log("Downloading Image...");
         console.log(response.statusMessage + " " +response.headers['content-type']);

       })
       .on('end', function() {
         console.log('Download complete.');
       })
       .pipe(fs.createWriteStream('./future.jpg'));

// request.get('https://sytantris.github.io/http-examples/')
//       .on('error', function (err) {
//         throw err;
//       })
//       .on('response', function (response) {
//         console.log('Response Status Code:', response.statusCode);
//       })
//       .pipe(fs.createWriteStream('./downloaded.html'))
//       .on('end', function() {
//         console.log('Response stream complete.');
//       });
