export default class GotService {
    // Game of trones
    constructor () {
        this._apibase = 'https://www.anapioficeandfire.com/api';
    }
    async getResource(url) {
        const res = await fetch(`${this._apibase}${url}`);

    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url} , status --- ${res.status}`);
        }
        
        return await res.json();
    }
    async getAllCharacters() {
        const res = await this.getResource('/characters/?page=5&pageSize=10');
        return res.map(this._transformCharacter);
    }
    
    async getCharacter(id) {
        const character = await this.getResource(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    getAllHouses() {
        return this.getResource(`/houses/`);
    }

    getBooks() {
        return this.getResource(`/books/`);
    }

    getBook(id) {
        return this.getResource(`/books/${id}`);
    }

    _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture,
        };
    }

    _transformHouses(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons,
        };
    }

    _transferBooks(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released,
        };
    }
}

// const got = new GotService();

// got.getAllCharacters()
//     .then(res => console.log(res));

// // got just names
// got.getAllCharacters()
//     .then(res => {
//         res.forEach(item => console.log(item.name)); 
//     });
    
// got.getCharacter(120)
//     .then(result => console.log(result));