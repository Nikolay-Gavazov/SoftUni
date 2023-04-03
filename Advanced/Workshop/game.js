
import { createDeckElement } from "./dom.js";
import { createDeck, dealDeck, shuffleDeck } from "./util.js";

const zones = {
    stock: document.getElementById('stock'),
    foundations: document.getElementById('foundation'),
    piles: document.getElementById('pile')
}

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
 * @param {import('./util.js').GameState} state 
 */

function stateToBoard(state){
    zones.stock.replaceChildren(
        createDeckElement(state.stock),
        createDeckElement(state.stock),
    )
}