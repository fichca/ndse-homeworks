#!/usr/bin/env node
const readline = require('readline');
const GameService = require("./GameService");
const DataService = require("./DataService");


const rl = readline.createInterface(process.stdin);
let gameService;
let dataService;


rl.on('line', (data) => {
    let userValue = parseInt(data);
    if (gameService.validateDate(userValue)) {
        let result = gameService.resultGame(userValue);
        gameService.generateNewTarget();
        dataService.saveResult(result);
        console.log(result ?  "win" : "loss")
    } else {
        console.log(`Please enter number in the range: ${gameService.getGameRange()}`);
    }
})


function startGame() {
    console.log("Hello");
    const path = process.argv[2];
    gameService = new GameService([1, 2]);
    dataService = new DataService(path);
}

startGame();