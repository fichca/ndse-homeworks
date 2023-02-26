class GameService {

    constructor(array) {
        rangeGame = array;
        targetNum = generateNum(array);
    }

    resultGame(number) {
        return targetNum === number;
    }

    generateNewTarget() {
        targetNum = generateNum(rangeGame);
    }

    validateDate(userValue) {
        if (isNaN(userValue)) {
            return false;
        } else {
            for (let number of rangeGame) {
                if (userValue === number) {
                    return true;
                }
            }
        }
        return false;
    }

    getGameRange(){
        return rangeGame;
    }
}

let rangeGame;
let targetNum;

function generateNum(rangeGame) {
    return Math.floor(Math.random() * rangeGame.length) + 1;
}

module.exports = GameService