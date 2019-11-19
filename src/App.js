import React, {Component} from 'react';
import './App.css';
import './components/cards.css';
import Card from "./components/Cards";
import CardsDeck from "./components/CardsDeck";
import PokerHand from "./components/PokerHand";

class App extends Component {
    constructor(props){
        super(props);
        this.cardsDeck = new CardsDeck();
    };
    state = {
        cards : new CardsDeck(),
        pokerHand: [],
        combo: '',

    };
    getPullCards = async () =>{
            await this.setState({pokerHand: this.state.cards.getCards(5)});
            let result = new PokerHand();
            let combo = result.getOutcome(this.state.pokerHand);
            await this.setState({combo});
    };

    changeCard = async (id) => {
        const pokerHand = [...this.state.pokerHand];
        const newCard = this.state.cards.getCards(1)[0];
        pokerHand[id] = newCard;

        await this.setState({pokerHand});
        let result = new PokerHand();
        let combo = result.getOutcome(this.state.pokerHand);

        await this.setState({combo});
    };

    render() {
        console.log(this.state.pokerHand);
        return (
            <div className="App">
                <div className="playingCards faceImages">
                    <div className="cardBack">
                        <div className="card back"></div>
                        <div className="card back"></div>
                        <div className="card back"></div>
                        <div className="card back"></div>
                        <div className="card back"></div>
                    </div>
                    {this.state.pokerHand.map((card, id)=>(
                        <Card click={this.changeCard} id={id} key={id} rank={card.runk} suit={card.suit}/>
                    ))}
                </div>
                <div className="clickBox">
                    <div className="result">{this.state.combo}</div>
                    <button className="btn" onClick={this.getPullCards}>Click</button>
                </div>
            </div>
        );
    }
}

export default App;
