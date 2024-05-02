import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlueBright.bold("\n\t**********Welcome to ATM**********\t\n"));
let condition = true;
//storing customer information in an array
let customer = [];
//current customer information
let currentCustomer = undefined;
const main = async () => {
    while (condition) {
        let _main = await inquirer.prompt([
            {
                type: "list",
                name: "select",
                message: chalk.bgCyanBright.bold("Please select an option"),
                choices: ["Open an account", "Debit Card Number", "With Draw Cash", "Fast Cash", "Check Balance", "Exit"]
            }
        ]);
        if (_main.select === "Exit") {
            console.log(chalk.blueBright.bold("***Thank your for using this atm***"));
            condition = false;
        }
        else if (_main.select === "Open an account") { }
    }
};
const openAccount = async () => {
    console.log(chalk.bgCyanBright.bold("\n\t***Welcome to ATM, Please Follow the instructions***"));
    let account = await inquirer.prompt([
        {
            name: "_account",
            type: "input",
            message: chalk.bgCyanBright.bold("\n\t\tPlease Enter your name........ "),
            //check if name already exist
            validate: (input) => {
                const c_name = customer.find((c) => { c.name === input; });
                if (c_name) {
                    return 'Name already exists!, please enter another name...';
                }
                return true;
            }
        },
        {
            type: "input",
            name: "initialDeposit",
            message: "Enter initial deposit amount...",
        },
        {
            type: "password",
            name: "pin",
            message: "Create your four digit pin...",
            validate: (input) => {
                if (/^\d{4} + $/.test(input)) {
                    return true;
                }
                return "Pin must be 4 digits long";
            }
        },
    ]);
};
// main()
openAccount();
