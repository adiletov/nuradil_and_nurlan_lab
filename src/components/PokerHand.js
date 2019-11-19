class PokerHand {
    constructor() {

        this.getOutcome = (arrCards) => {

                let rank = 0;
                let suit = 0;
                for (let i = 0; i < arrCards.length; i++) {
                    for (let j = i + 1; j < arrCards.length; j++) {
                        if (arrCards[i].runk === arrCards[j].runk) rank++;
                        if (arrCards[i].suit === arrCards[j].suit) suit++;
                    }


                if (rank === 1) return 'pair';
                if (rank === 2) return 'two paire';
                if (rank === 3) return 'three of a kind';
                if (rank === 4) return 'four of a kind';
                if (suit === 5) return 'flush';
                if (rank === 0) return 'XXX';
            }
        }
    }
}

export default PokerHand;