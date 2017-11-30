var Player = require('./player');
var Table = require('./table');

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
console.log('tables', getMyTable(Players[6].tableId))
// console.log('tables', Tables(Players[6].tableId))