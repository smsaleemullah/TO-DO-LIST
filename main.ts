import inquirer from "inquirer"
let to_do_list = [];
let condition = true;


while(condition)
    {
        let addTask = await inquirer.prompt(
        [
            {
                name:'to_do_list',
                type:'input',
                message: "What do you want to add in your to_do_list?"
            },

            {
                name:'addMore',
                type:'confirm',
                message:"Do you want to add more ?",
                default:"false"
            }
        ]

    );
 to_do_list.push(addTask.to_do_list);
 condition = addTask.addMore
 console.log(to_do_list)



}