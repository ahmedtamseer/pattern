
const Events = require('events');

function Player(id, name, tableId){
    this.id = id;
    this.name = name;
    this.tableId = tableId;
    this.points = 0;
    this.addPoints = function(points){
        this.points += points;
    };
    this.Emitter = new Events.EventEmitter();
    this.Emitter.on('event', (a, b) => {
      console.log(a, b, this);
      // Prints: a b {}
    });
    return this;
}

module.exports = Player;