import inquirer from "inquirer";

const wordCount = await inquirer.prompt([
    {
        name:"countWord",
        type:"input",
        message:"Enter a Sentence for word count..."
    }
])
const word = wordCount.countWord.split(" ").length
console.log(word)