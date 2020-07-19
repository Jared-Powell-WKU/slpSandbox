const { default: SlippiGame } = require('slp-parser-js');
const path = require('path');
const fs = require('fs');
const dirPath = 'C:/Users/PowellJaredD/Documents/Slippi';
const game = new SlippiGame("test.slp");
// Get game settings – stage, characters, etc
const settings = game.getSettings();
// console.log(settings);

// Get metadata - start time, platform played on, etc
const metadata = game.getMetadata();
// console.log(metadata);

// // Get computed stats - openings / kill, conversions, etc
const stats = game.getStats();
// console.log(stats);

// Get frames – animation state, inputs, etc
// This is used to compute your own stats or get more frame-specific info (advanced)
const frames = game.getFrames();
// console.log(frames); // Print frame when timer starts counting down

const prompt = require('prompt-sync')();
var input = "";
while(1) {
    input = prompt("");

    eval("console.log("+input+");");
}
const name = prompt('What is your name?');

console.log(`Hey there ${name}`);

// fs.readdir(dirPath, function (err, files) {
//     //handling error
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     } 
//     //listing all files using forEach
//     files.forEach(function (file) {
//         var directoryPath = path.join(dirPath, file);
//         var game = new SlippiGame(directoryPath);
//         // Get game settings – stage, characters, etc
//         const settings = game.getSettings();
//         console.log(settings);

//         // Get metadata - start time, platform played on, etc
//         const metadata = game.getMetadata();
//         console.log(metadata);

//         // Get computed stats - openings / kill, conversions, etc
//         const stats = game.getStats();
//         console.log(stats);

//         // Get frames – animation state, inputs, etc
//         // This is used to compute your own stats or get more frame-specific info (advanced)
//         const frames = game.getFrames();
//         console.log(frames[0].players); // Print frame when timer starts counting down
//     });
// });