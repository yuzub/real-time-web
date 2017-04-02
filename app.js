function printHelp() {
  console.log('app.js (c) Learning');
  console.log('');
  console.log('usage:');
  console.log('--help                 print this help');
  // console.log('--name={NAME}          say "Hello to {NAME}"');
  console.log('--file={FILE}          read the file of {FILE} and output it');
  console.log('');
}

var args = require('minimist')(process.argv.slice(2), {
  string: 'file'
});

if (args.help || !args.file) {
  printHelp();
  process.exit(1);
}

// var name = args.name;
// console.log('Hello ' + name);
// process.stdout.write('Hello World!');

var readFile = require('./readfile.js');

readFile.say(args.file, function(err, contents) {
  if (err) {
    console.error('Error: ' + err);
  }
  else {
    console.log(contents.toString());
  }
});
