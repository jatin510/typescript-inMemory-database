interface Pokemon {
  id: string;
  attack: number;
  defense: number;
}

interface BaseRecord {
  id: string;
}

interface Database<T> {
  set(newValue: T): void;
  get(id: string): T | undefined;
}

class InMemoryDatabase<T extends BaseRecord> implements Database<T> {
  private db: Record<string, T> = {};

  set(newValue: T): void {
    this.db[newValue.id] = newValue;
  }
  get(id: string): T | undefined {
    return this.db[id];
  }
}

const pokemonDB = new InMemoryDatabase<Pokemon>();
pokemonDB.set({
  id: "pikachu",
  attack: 40,
  defense: 60,
});
console.log(pokemonDB.get("pikachu"));
console.log(pokemonDB.get("pichu"));
