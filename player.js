function Player(id, name, tableId){
    this.id = id;
    this.name = name;
    this.tableId = tableId;
    this.points = 0;
    this.addPoints = function(points){
        this.points += points;
    };
    return this;
}


module.exports = Player;