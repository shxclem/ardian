export class Pokemon {

    id!: number;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    types: string[];
    created: Date;

    constructor (
        name: string = "Entrer un nom...", 
        hp: number = 100,
        cp: number = 10,
        picture: string = "https://www.pokepedia.fr/images/e/ef/xxx-RFVF.png",
        types: string[] = ["Normal"],
        created: Date = new Date()
    ) {
            
    this.name = name;
    this.hp = hp;
    this.cp = cp;
    this.picture = picture;
    this.types = types;
    this.created = created;

    }
}