const Player = require('./player');
const Table = require('./table');
const Events = require('events');
const Emitter = new Events.EventEmitter();


var Players = [];
var Tables = [];

createTable();

for (var i = 1; i <= 10; i++) {
    createPlayer(i, "player_" + i, Tables[getTableLength()].id);
}

function createTable() {
    Tables.push(new Table());
}

function createPlayer(id, name, tableId) {
    if (Tables[getTableLength()].maxPlayers == Tables[getTableLength()].getPlayerCount()) createTable();
    Players.push(new Player(id, name, tableId));
    Tables[getTableLength()].addPlayer(Players[getPlayersLength()])
}

function getTableLength() {
    return Tables.length - 1;
}

function getPlayersLength() {
    return Players.length - 1;
}

function getMyTable(id) {
    return Tables[Tables.findIndex(res => res.id === id)];
}

function getMyTableId(index) {
    return Tables[index].id;
}

// console.log('Players', Players)
// console.log('tables', getMyTable(Players[6].tableId))

// Players[getPlayersLength() - 1].Emitter.emit('event',{"a":"ddd"}, "Aa");
Tables[getTableLength() - 3].Emitter.broadcast(Tables[getTableLength() - 2].players, {"a":"dddddddd"});
// console.log('tables', Tables(Players[6].tableId))