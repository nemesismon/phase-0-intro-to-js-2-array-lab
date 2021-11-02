// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push(`Ralph`);
}

function destructivelyPrependCat() {
    cats.unshift(`Bob`)
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name =`Broom`) {
    const copyOfCats = [...cats, name];
    return copyOfCats;
}

function prependCat(name="Arnold") {
    const copyOfCats = [name, ...cats];
    return copyOfCats;
}

function removeLastCat() {
    const copyOfCats = cats.slice(0, 2);
    return copyOfCats;
}

function removeFirstCat() {
    const copyOfCats = cats.slice(1);
    return copyOfCats;
}