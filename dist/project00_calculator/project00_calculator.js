import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlueBright.bold("\n\t**********Welcome to Calculator**********\t\n"));
const userReply = await inquirer.prompt([
    {
        name: "numb1",
        type: "number",
        message: chalk.blue.bold("Enter first number"),
    },
    {
        name: "numb2",
        type: "number",
        message: chalk.blue.bold("Enter Second number"),
    },
    {
        name: "operators",
        type: "list",
        choices: ["Add", "Subtract", "Multiply", "Divide"],
    },
]);
switch (userReply.operators) {
    case "Add":
        let add = userReply.numb1 + userReply.numb2;
        console.log(chalk.greenBright.bold(`The sum of : ${userReply.numb1} and ${userReply.numb2} = ${add}`));
        console.log(chalk.bgBlueBright.bold("\n\t\**********Thank You For using CLI Calculator**********\t\n"));
        break;
    case "Subtract":
        let sub = userReply.numb1 - userReply.numb2;
        console.log(chalk.greenBright.bold(`The subtraction of : ${userReply.numb1} and ${userReply.numb2} = ${sub}`));
        console.log(chalk.bgBlueBright.bold("\n\t\**********Thank You For using CLI Calculator**********\t\n"));
        break;
    case "Multiply":
        let mul = userReply.numb1 * userReply.numb2;
        console.log(chalk.greenBright.bold(`The Multiplication of : ${userReply.numb1} and ${userReply.numb2} = ${mul}`));
        console.log(chalk.bgBlueBright.bold("\n\t\**********Thank You For using CLI Calculator**********\n\t"));
        break;
    case "Divide":
        let div = userReply.numb1 / userReply.numb2;
        console.log(chalk.greenBright.bold(`The Division of : ${userReply.numb1} and ${userReply.numb2} = ${div}`));
        console.log(chalk.bgBlueBright.bold("\n\t\**********Thank You For using CLI Calculator**********\n\t"));
        break;
    default:
        break;
}
