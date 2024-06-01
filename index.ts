#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

console.log(chalk.green.bold("\n<<<============= Welcome to Umama Shah CLI Number Guessing Game ==========>>>\n"));

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: chalk.yellow.bold("Enter you a guess number(Number limit from 1 to 5):"),
    }
]);

if(answer.userGuessedNumber === randomNumber){
    console.log(chalk.magenta.bold("Congratulation! you guess a write number."));
}
else{
    console.log(chalk.redBright.bold("You entered a wrong number."));
}