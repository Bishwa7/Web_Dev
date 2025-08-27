const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of words and lines in a file')
  .argument('<file>', 'node index.js count <FileName>')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } 
      else {
        const words = data.split(" ").length;
        const lines = data.split("\n").length;
        const ans = (words + lines)-1;
        console.log(`There are ${ans} words in ${file}`);
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });

  program.command('words')
  .description('Count the number of words in a file')
  .argument('<file>', 'node index.js words <FileName>')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } 
      else {
        const words = data.split(" ").length;
        const lines = data.split("\n").length;
        const ans = (words + lines)-1;
        console.log(`There are ${ans} words in ${file}`);
      }
    });
  });

  program.command('lines')
  .description('Count the number of lines in a file')
  .argument('<file>', 'node index.js count <FileName>')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } 
      else {
        const lines = data.split("\n").length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });

program.parse();