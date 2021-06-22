var InMemoryDatabase = /** @class */ (function () {
    function InMemoryDatabase() {
        this.db = {};
    }
    InMemoryDatabase.prototype.set = function (newValue) {
        this.db[newValue.id] = newValue;
    };
    InMemoryDatabase.prototype.get = function (id) {
        return this.db[id];
    };
    return InMemoryDatabase;
}());
var pokemonDB = new InMemoryDatabase();
pokemonDB.set({
    id: "pikachu",
    attack: 40,
    defense: 60
});
console.log(pokemonDB.get("pikachu"));
console.log(pokemonDB.get("pichu"));
console.log("hello");
