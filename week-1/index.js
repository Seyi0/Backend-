// Asynchronous nature of node
// Variables : scope and syntax


let statement = `Statement Number One `
const statement2 = `Statement Number Two`

// Asynchronous nature of node
setTimeout (()=>{
    console.log(statement = `Happy learning`)
}, 2000)

console.log(statement2)
console.log('Statement Number Three')

// Class, Objects and Arrays , Accessing Items (dot and bracket notation)

const animals = {
    name : `dog `,
    sound : `bark`
}

class Animals {
    constructor (name, sound){
    this.name = name;
    this.sound = sound;
}
}

const newAnimal = new Animals ('pig', 'grunt')
const newAnimal2 = new Animals('cow', 'mow')

const animalCollections = []
animalCollections.push(newAnimal2,newAnimal )

// const animalCollections = ['pigs', 'dog', 'cat']

console.log(animals)
console.log(newAnimal)

console.log(animalCollections[0].sound)