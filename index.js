//modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown");


//questions
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the project called?',
      validate: (value)=>{ if(value){return true} else {return "input value to continue"}}
    },
    {
      type: 'input',
      name: 'instalation',
      message: 'how to install',
      validate: (value)=>{ if(value){return true} else {return "input value to continue"}}
    },
    {
      type: 'input',
      name: 'instructions',
      message: 'follow these steps to install',
      validate: (value)=>{ if(value){return true} else {return "input value to continue"}}
    },
    {
      type: 'input',
      name: 'usage',
      message: 'how to use the app?',
      validate: (value)=>{ if(value){return true} else {return "input value to continue"}}
    },
    {
      type: 'input',
      name: 'license',
      message: 'license used?',
      validate: (value)=>{ if(value){return true} else {return "input value to continue"}}
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your github username.',
      validate: (value)=>{ if(value){return true} else {return "input value to continue"}}
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email.',
      validate: (value)=>{ if(value){return true} else {return "input value to continue"}}
    }
  ])
  

.then((data)=>{
  writeToFile(data);
})




function writeToFile(data) {
  return fs.writeFile("README.MD",generateMarkdown(data),(err) =>{
    if(err){
      console.log(err)
    }
    console.log("Read Me Generated")
  })

  }


