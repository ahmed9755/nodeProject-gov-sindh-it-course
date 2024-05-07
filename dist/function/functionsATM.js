import inquirer from "inquirer";
import chalk from "chalk";
export const openAccount = async () => {
    const accountNumber = Math.floor(Math.random() * 302300000);
    const answers = await inquirer.prompt([
        {
            name: "accountType",
            type: "list",
            choices: ['Saving Account', 'Current Account'],
            message: chalk.bgGreenBright.bold("\n\n\t\tSelect Account Type")
        },
        {
            name: "accNumber",
            type: "number",
            message: "Account Number is  " + accountNumber,
        },
        {
            name: "initial_deposit",
            type: "number",
            message: chalk.bgGreenBright.bold("\n\n\t\tEnter Initial Deposit Amount"),
        },
        // function to generate account number
        {}
    ]);
    if (answers.accountType === "Saving Account") {
        console.log(chalk.bgGreenBright.bold("\n\n\t\tSaving Account Created Successfully"));
    }
    else {
        console.log(chalk.bgGreenBright.bold("\n\n\t\tCurrent Account Created Successfully"));
    }
    ;
    console.log("your account number is " + accountNumber);
};
