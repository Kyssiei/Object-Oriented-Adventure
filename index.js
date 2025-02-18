const bg = document.querySelector('body');
bg.style.backgroundColor = 'black';

const h1 = document.querySelector('h1');
h1.style.color = 'white';


//!=============================== PART 1: =================================

// Our adventure time character Fionna and her companions
const adventurer = {
    name: "Fionna",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Cake",
        type: "Cat",
        health: 10,
        inventory: ["sandwich", "magic", "phone"],
        companion: {
            name: "Lord Monochromicorn",
            type: "Unicorn",
            health: 10,
        },
        
    },

    // adding a dice roll
    rollDice(mod = 0){
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);            
    },
}
adventurer.rollDice();
adventurer.rollDice();
adventurer.rollDice();
// adventurer.companion.rollDice(),


console.log("================================================");



// console log 
console.log(`inventory ${adventurer.inventory[0]}`);
console.log(`Fionna's best friend is ${adventurer.companion.name}`);
console.log(`Cake has a boyfriend named ${adventurer.companion.companion.name}`);

console.log(`Fiona's health is ${adventurer.health}`);
console.log(`Cake's health is ${adventurer.companion.health}`);
console.log(`Lord Monochromicorn's health ${adventurer.companion.companion.health}`);

// looping through Fionna's inventory
for (let index = 0; index < adventurer.inventory.length; index++) {
    const advInventory = adventurer.inventory[index];
    
    console.log(`${advInventory} is in Fionna's inventory.`);
    
};

// looping through Cakes inventory
for (let index = 0; index < adventurer.companion.inventory.length; index++) {
    const compInventory = adventurer.companion.inventory[index];

    console.log(`${compInventory} is in Cake's inventory`);
    
}

//!========================== PART 2: =============================
console.log("==================================================");

class Character {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.inventory = [];
    };

    roll(mod = 0){
        const result1 = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result1}`)
    };
};

const fionna = new Character("Fionna");
fionna.roll();
fionna.inventory = ["sword", "potion", "artifact"];

//companion characters 
fionna.companion = new Character("Cake");
fionna.companion.type = "cat";

fionna.companion.companion = new Character("Lord Monochromicorn")
fionna.companion.companion.type = "unicorn"

//companion inventory
fionna.companion.inventory = ["sandich", "magic", "phone"]
fionna.companion.companion.inventory = ["violin", "magic horn"]

// console log
console.log(fionna);
console.log(fionna.companion);
console.log(fionna.companion.companion);


//!========================== PART 3: ==================================


class Adventurer extends Character{
    constructor (name, role){
        super(name);

        //adventeres have specialized roles
        this.role = role;

        // every adventurer starts with a bedroll and 50 gold coins
        this.inventory.push("bedroll", "100 gold coins", "strength booster", "spell book", "sword" );
    }
    // Adventurers have the ability to scout ahead of them
    scout () {
        console.log(`${this.name} is scouting ahead.. `);
        super.roll();
    }
};

class Companion extends Character {
    constructor (name, role, type){
        super(name);
        this.type = type;
        this.role = role;
        this.loyalty = 100;
        this.inventory.push("loyalty", "assist", "healer")
    };
    assist(){
        console.log(`${this.name} is assisting...`);
        super.roll();
    }
    heal(){
        console.log(`${this.name} is healing...`);
        this.health = Math.min(this.health + 20, 100) // healing properties add 20 points, but max health is 100.
        
    }
}

// create a new adventurer
const fin = new Adventurer("Fin", "Warior");
fin.roll();
fin.scout();

// createw a new companion
const jake = new Companion("Jake", "Best Friend", "Dog");
jake.roll();
jake.assist();
jake.heal();

console.log(`Jake's health is: ${jake.health}`);
console.log(jake.type);


const ladyRainicorn = new Companion("Lady", "Ally", "unicorn");
console.log(ladyRainicorn.type);

//!========================== PART 4: ===============================
console.log("===================================================");

























