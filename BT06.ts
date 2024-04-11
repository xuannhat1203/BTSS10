class Song {
    public readonly id: number;
    private _name: string;
    private _length: number;

    constructor(id: number, name: string, length: number) {
        this.id = id;
        this._name = name;
        this._length = length;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get length(): number {
        return this._length;
    }

    set length(value: number) {
        this._length = value;
    }
}
const song = new Song(1, "Chúng ta của tương lai", 1);
console.log(song.name);
console.log(song.length);

song.name = "Thiên Lý Ơi"; 
song.length = 210;
console.log(song.name);
console.log(song.length); 
