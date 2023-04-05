import { Foundation, Pile, Stock, Waste, suits } from "./cards.js";
import { createDeckElement } from "./dom.js";
import { createDeck, dealDeck, shuffleDeck } from "./util.js";

const zones = {
    stock: document.getElementById('stock'),
    foundations: document.getElementById('foundation'),
    piles: document.getElementById('pile')
}

document.getElementById('board').addEventListener('click', onClick);

start()

function start(){ 
    const deck = createDeck()
    shuffleDeck(deck);
    shuffleDeck(deck);
    shuffleDeck(deck);
    shuffleDeck(deck);
    shuffleDeck(deck);
    shuffleDeck(deck);
    shuffleDeck(deck);
    shuffleDeck(deck);

    const {index, state} = dealDeck(deck);

    stateToBoard(state)
}

/**
 * 
 * @param {import('./cards.js').Deck} deck 
 * @param {import ('./cards.js').Card | import('./cards.js').Card[] | null} cards
 */

function getMoves(deck, cards){
    return {
        flip: deck.canFlip(),
        take: deck.cards.map((_, i) => deck.canTake(i)).map((v, i) => v && i).filter(v => v !== false),
        place: deck.canPlace(cards)
    }
}

/**
 * 
 * @param {import('./util.js').GameState} state 
 */

function stateToBoard(state){
    zones.stock.replaceChildren(
        createDeckElement(state.stock),
        createDeckElement(state.waste)
    );

    zones.foundations.replaceChildren(...Object.values(state.foundations).map(createDeckElement));
    zones.piles.replaceChildren(...state.piles.map(createDeckElement))
}


function onClick(e){
    let deck = null;
    if(e.target.classList.contains('deck')){
        deck = e.target;
    }else if(e.target.classList.contains('card')){
        deck = e.target.parentElement;
    }else if(e.target.classList.contains('back')){
        deck = e.target.parentElement.parentElement;
    }

    if(deck != null){
        const type = deck.dataset.type;
        let suit = '';
        let index = -1;

        if(type == 'foundation'){
        suit = deck.dataset.suit;
        }else if(type == 'pile'){
            index = Number(deck.dataset.index);
        }
    }


}
