const generateBool = () => Math.random() >= 0.5;
const gameResult = () => [ generateBool() , generateBool() , generateBool() ];

class slotMachine {
    constructor () {
        this.coins = 0;
    } 

    play = () => {
        this.coins++;
        const game = gameResult();
        
        if( game.some(x => x === false)) {
            console.log("Good luck next time!!");
        }
        else {
            console.log(`Congratulations you won ${this.coins} coins!!!!`)
            this.coins = 0;
        }
    }
}

const slot1 = new slotMachine();

const ejercicio5 = () => {
    slot1.play();
}

export default ejercicio5;