#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue("\tWelcome to Adventure Game"));
console.log("-".repeat(60));
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Enemy {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "playerName",
        type: "input",
        message: chalk.magenta("Enter your name:")
    }
]);
let enemy = await inquirer.prompt([
    {
        name: "Select",
        type: "list",
        message: chalk.magenta("Select your enemy you fight with:"),
        choices: ["Skeleton", "Alien", "Zombi"]
    }
]);
let p1 = new Player(player.playerName);
let e1 = new Enemy(enemy.Select);
do {
    // skeleton
    if (enemy.Select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "eny",
                type: "list",
                message: chalk.magenta("what would you like to do?"),
                choices: ["Atack", "Drink portion", "Run for your life"]
            }
        ]);
        if (ask.eny == "Atack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.blueBright(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.blueBright(`${e1.name} fuel is ${e1.fuel}`));
            }
            if (p1.fuel <= 0) {
                console.log(chalk.redBright("you loose, Better luck next time"));
                process.exit();
            }
            if (num <= 0) {
                e1.fuelDecrease();
                console.log(chalk.blueBright(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.blueBright(`${e1.name} fuel is ${e1.fuel}`));
            }
            if (e1.fuel <= 0) {
                console.log(chalk.greenBright("Congratulation! you are the winner"));
                process.exit();
            }
        }
        if (ask.eny == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.greenBright(`you Drink Health portion your fuel is: ${p1.fuel}`));
        }
        if (ask.eny == "Run for your life") {
            console.log(chalk.red("you loose, Better luck next time"));
            process.exit();
        }
    }
    // alein
    if (enemy.Select == "Alien") {
        let ask = await inquirer.prompt([
            {
                name: "eny",
                type: "list",
                message: chalk.magenta("what would you like to do?"),
                choices: ["Atack", "Drink portion", "Run for your life"]
            }
        ]);
        if (ask.eny == "Atack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.blueBright(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.blueBright(`${e1.name} fuel is ${e1.fuel}`));
            }
            if (p1.fuel <= 0) {
                console.log(chalk.redBright("you loose, Better luck next time"));
                process.exit();
            }
            if (num <= 0) {
                e1.fuelDecrease();
                console.log(chalk.blueBright(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.blueBright(`${e1.name} fuel is ${e1.fuel}`));
            }
            if (e1.fuel <= 0) {
                console.log(chalk.greenBright("Congratulation! you are the winner"));
                process.exit();
            }
        }
        if (ask.eny == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.greenBright(`you Drink Health portion your fuel is: ${p1.fuel}`));
        }
        if (ask.eny == "Run for your life") {
            console.log(chalk.redBright("you loose, Better luck next time"));
            process.exit();
        }
    }
    //zombi
    if (enemy.Select == "Zombi") {
        let ask = await inquirer.prompt([
            {
                name: "eny",
                type: "list",
                message: chalk.magenta("what would you like to do?"),
                choices: ["Atack", "Drink portion", "Run for your life"]
            }
        ]);
        if (ask.eny == "Atack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.blueBright(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.blueBright(`${e1.name} fuel is ${e1.fuel}`));
            }
            if (p1.fuel <= 0) {
                console.log(chalk.redBright("you loose, Better luck next time"));
                process.exit();
            }
            if (num <= 0) {
                e1.fuelDecrease();
                console.log(chalk.blueBright(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.blueBright(`${e1.name} fuel is ${e1.fuel}`));
            }
            if (e1.fuel <= 0) {
                console.log(chalk.greenBright("Congratulation! you are the winner"));
                process.exit();
            }
        }
        if (ask.eny == "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.greenBright(`you Drink Health portion your fuel is: ${p1.fuel}`));
        }
        if (ask.eny == "Run for your life") {
            console.log(chalk.redBright("you loose, Better luck next time"));
            process.exit();
        }
    }
} while (true);
