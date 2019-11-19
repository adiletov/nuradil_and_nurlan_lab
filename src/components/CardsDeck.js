const runks = ['2','3','4','5','6','7','8','9','10','J', 'Q', 'K', 'A'];
const suit = ['D', 'S', 'H', 'C'];


class CardsDeck {

    constructor(){
        this.deckCards = [];
        for (let i = 0; i < runks.length; i++){
            for (let x= 0; x < suit.length ; x++){
                this.deckCards.push({
                    runk: runks[i],
                    suit: suit[x],
                })
            }
        }
    };

    getCard(){
        let numberRandom = Math.floor(Math.random() * this.deckCards.length);
        return this.deckCards.splice(numberRandom, 1);
    }
    getCards(howMany){
       const cards = [];
       for (let i = 0; i < howMany; i++){
           cards.push(this.getCard()[0]);
       }
        return cards;
    }

}

export default CardsDeck;
