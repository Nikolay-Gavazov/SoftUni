export function addStorage(ctx, next){
    ctx.game = getActiveGame();
    ctx.setGame = setActiveGame.bind(ctx);
    ctx.setIslands = setIslands.bind(ctx);

    next()
}

function setActiveGame(game){
    this.game = game;
    localStorage.setItem('activeGame', JSON.stringify(game))
}

function setIslands(islands){
    this.islands = islands;
    localStorage.setItem('islands', islands)
}

function getActiveGame(game){
   return JSON.parse(localStorage.getItem('activeGame'));
}

function removeActiveGame(game){
    localStorage.removeItem('activeGame');
}

// Model structure
const island = {
    objectId: 'string',
    game: 'ObjectId',
    name: 'string',
    // population: 'number'
}

const population = {
    island: 'ObjectId',
    peasant: 0,
    citizen: 0,
    patrician: 0,
    noble: 0,
    beggar: 0,
    nomad: 0,
    envoy: 0
}