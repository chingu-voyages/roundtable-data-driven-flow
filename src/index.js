import chalk from 'chalk'
import promptSync from 'prompt-sync'
import routes from './routes.js'

const prompt = promptSync()

// Get the desired function number from the user
console.clear()
console.log(chalk.green('Welcome to the Data-driven Flow of Control!'))
console.log(chalk.white('\nAvailable functions:'))
console.log(chalk.white('\nNo.  Function            Description'))
console.log(chalk.white('---  ------------------  --------------------------------------'))
routes.forEach((route, index) => {
  const functionNo = index + 1
  console.log(chalk.white(`${functionNo.toString().padEnd(3)}  ${route.function.padEnd(18)}  ${route.description}`))
})

const functionNo = prompt(chalk.white('\nEnter function number (1-' + routes.length + '):  '))

// Validate the input
const message = functionNo >= 1 && functionNo <= routes.length ? functionNo : 'Invalid function number. Please try again.'
console.log(chalk.white(`You selected `), chalk.green(`${(message)} `))

// Call the selected function & display the result
if (functionNo >= 1 && functionNo <= routes.length) {
  console.log(chalk.white(`\n----------------------------------------`))

  const selectedFunction = routes[functionNo - 1].handler
  let result = undefined
  // If the selected function requires dynamic parameters apply them to the function call
  // Otherwise, call it with no parameters
  if (routes[functionNo - 1].dynamicParms) {
    const dateToConvert = prompt(chalk.white(`Enter a date to convert to ISO format (YYYY-MM-DD): `))
    const parms = [new Date(dateToConvert)]
    console.log(chalk.white(`\nConverting date: `), chalk.green(`${parms[0]}`))
    // The apply function allows us to call the function with an array of 
    // parameters that have been dynamically generated. For more information:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
    // Also note we could have used the spread operator here, but apply is more explicit
    result = selectedFunction.apply(null, parms) // Call the function with parameters
  } else {
    result = selectedFunction() // Call the function with no parameters
  }

  console.log(chalk.white(`\nResult from `), 
    chalk.white(`${routes[functionNo - 1].function}: ${routes[functionNo - 1].description}: `),
    chalk.green(`${result}`))
}