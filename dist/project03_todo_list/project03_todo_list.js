import inquirer from "inquirer";
import chalk from "chalk";
let task = [];
let condition = true;
//creating a main function which hold all the data of todo
console.log(chalk.bgBlue.bold("\n\n\t\t********* Welcome to To Do App *********\t\t\n\n"));
const mainFunction = async () => {
    while (condition) {
        let mainTask = await inquirer.prompt([
            {
                name: "select",
                type: "list",
                choices: ["Add", "Update", "View Task", "Delete", "Exit"],
                message: "Select your Choice...."
            }
        ]);
        if (mainTask.select === "Exit") {
            console.log(chalk.bgCyanBright.bold("\n\tThanks for using To Do App...\t\n"));
            condition = false;
        }
        if (mainTask.select === "Add") {
            await addtask();
        }
        if (mainTask.select === "View Task") {
            await view_task();
        }
        if (mainTask.select === "Update") {
            await taskUpdate();
        }
        if (mainTask.select === "Delete") {
            await Delete();
        }
    } // end of loop
}; // end of  mainfunction()
const addtask = async () => {
    let addedTask = await inquirer.prompt([
        {
            name: "moreTask",
            type: "input",
            message: "Enter your todo task...."
        }
    ]);
    task.push(addedTask.moreTask);
    task.forEach((item, index) => {
        console.log(chalk.green.bold(`\n\t${index + 1} : ${item} added in your todo task Successfully...`));
    });
};
const taskUpdate = async () => {
    await view_task();
    let update_task = await inquirer.prompt([
        {
            name: "task_update",
            type: "number",
            message: "Select Index of item.. ",
        },
        {
            type: "input",
            name: "_update",
            message: "Now update your todo... "
        }
    ]);
    task[update_task.task_update] = update_task._update;
    console.log(chalk.blue(`Index of ${update_task.task_update} is successfully updated into ${update_task._update}`));
};
const view_task = async () => {
    let viewTask = await inquirer.prompt([
        {
            name: "view",
            type: "input",
            message: " View todo task index wise..."
        }
    ]);
    // task.push(viewTask.view);
    task.forEach((item, index) => {
        console.log(chalk.green.bold(`\n\t${(index + 1) - 1} : ${item} `));
    });
};
const Delete = async () => {
    let _delete = await inquirer.prompt([
        {
            name: "__delete",
            type: "number",
            message: "Enter index of task to delete..."
        }
    ]);
    task.splice(_delete.__delete, 1);
    console.log(chalk.red.bold("Assigned task deleted successfully...."));
};
await mainFunction();
