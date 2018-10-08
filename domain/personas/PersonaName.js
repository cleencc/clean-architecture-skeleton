export default class PersonaName {
    constructor(name) {
        if (!name) {
            throw { name: "Name cannot be empty." };
        }

        if (name.length < 3) {
            throw { name: "Name has to be at least 3 characters long." };
        }

        this.name = name;
    }

    toString() {
        return this.name;
    }
}