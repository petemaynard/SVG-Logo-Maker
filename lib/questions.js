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
      message: "What background color do you want (use word or #hexidecimal (e.g. #ff0000)?",
      type: "input",
      name: "bgColor",
   },
   {
      message: "What color do you want the letters (word or #hexidecimal)?",
      type: "input",
      name: "letterColor",
   },
   {
      message: "What initials do you want (limit of three)?",
      type: "maxlength-input",
      name: "initials",
      maxLength: 3,
   }
]

module.exports = questions;