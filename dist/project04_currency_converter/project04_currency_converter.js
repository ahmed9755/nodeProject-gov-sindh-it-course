import inquirer from "inquirer";
const currienciesConvertor = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "USD": {
        "USD": 1,
        "GBP": 0.8,
        "PKR": 271
    },
    "GBP": {
        "USD": 1.2,
        "GBP": 1,
        "PKR": 378
    }
};
const currency = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ['PKR', 'USD', 'GPB'],
        message: "Select your Currency",
    },
    {
        name: "to",
        type: "list",
        choices: ['PKR', 'USD', 'GPB'],
        message: "Select conversion currency",
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Amount..",
    },
]);
const { from, to, amount } = currency;
if (from && to && amount) {
    let result = currienciesConvertor[from][to] * amount;
    console.log(`Converted Amount is ${result.toFixed(2)}`);
}
