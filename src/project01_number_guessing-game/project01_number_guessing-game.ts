import inquirer from "inquirer";    
import chalk  from "chalk";
await(console.log(chalk.bgBlueBright.bold("\n\t**********Welcome to Number Guess Game**********\t\n"))
)
let guessNumber = Math.floor(Math.random() *10);


let userNumber = await inquirer.prompt([
    {
        name:"userGuess",
        type:"number",
        message:"Enter your guess number....",
    }
    
])
if(userNumber.userGuess === guessNumber){
    console.log(chalk.bgGreenBright.bold("\n\t**********Well done, You win**********\t\n"))
}else{
    console.log(chalk.bgRedBright.bold("\n\t**********Better Luck Next time....You lose**********\t\n"))
}




