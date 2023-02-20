#!/usr/bin/env node
/* eslint-disable */

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

console.log("Welcome to Holberton School, what is your name?");
rl.question("Your name is: ", (name) => {
    console.log(`This important software is now closing`);
    rl.close();
});
