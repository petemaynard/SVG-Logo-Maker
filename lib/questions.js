const questions = [
   {
      message: "What shape do you want?",
      name: "shapeName",
      type: "list",
      choices: [
         'Square',
         'Circle',
         'Triangle',
      ]
   },
   {
      message: "What background color do you want?",
      type: "input",
      name: "bgColor",
   },
   {
      message: "What color do you want the letters?",
      type: "input",
      name: "letterColor",
   },
   {
      message: "What initials do you want (limit of three)?",
      type: "input",
      name: "initials",
   }
]

module.exports = questions;