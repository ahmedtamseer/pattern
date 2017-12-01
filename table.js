const Events = require('events');

function Table() {
    this.id = (function () {
        return "t"
            + Math.floor(Math.random() * (99 - 10 + 1) + 10) + "_"
            + Math.floor(Math.random() * (99 - 10 + 1) + 10) + "_"
            + Math.floor(Math.random() * (99 - 10 + 1) + 10) + "_"
            + Math.floor(Math.random() * (99 - 10 + 1) + 10);
    })();
    this.maxPlayers = 3;
    this.players = [];
    this.addPlayer = function (player) {
        this.players.push(player);
    }
    this.getPlayer = function (playerId) {
        return this.players[this.players.findIndex(res => res.id === playerId)];
    };
    this.getPlayers = function () {
        return this.players;
    };
    this.getPlayerCount = function () {
        return this.players.length;
    };
    this.Emitter = new Events.EventEmitter();
    this.Emitter.broadcast = function(players, obj){
        let c = 1;
        players.forEach(res => res.Emitter.emit("event", c++, obj))
    };
    return this;
}


// console.log(new Table())
module.exports = Table;