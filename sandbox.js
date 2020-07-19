const slp = require('slp-parser-js');
const SlippiGame = slp.default;
const path = require('path');
const fs = require('fs');
const lodash = require('lodash/core');
const dirPath = 'C:/Users/PowellJaredD/Documents/Slippi';
const game = new SlippiGame("test.slp");
// Get game settings – stage, characters, etc
var settings = game.getSettings();
// console.log(settings);

// Get metadata - start time, platform played on, etc
var metadata = game.getMetadata();
// console.log(metadata);

// // Get computed stats - openings / kill, conversions, etc
var stats = game.getStats();
// console.log(stats);

// Get frames – animation state, inputs, etc
// This is used to compute your own stats or get more frame-specific info (advanced)
var frames = game.getFrames();
// console.log(frames); // Print frame when timer starts counting down

var prompt = require('prompt-sync')();
var input = "";
while(1) {
    input = prompt("");
    try {
        if(input.charAt(0) == '`')
            eval(input.substring(1));
        else if(input.charAt(0) == '~') {
            eval('console.log(Object.keys('+input.substring(1)+'));');
        }
        else
            eval("console.log("+input +");");
    } catch(e) {
        console.log("Catch: "+e);
    }
}
