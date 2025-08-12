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
  const result = selectedFunction()
  console.log(chalk.white(`\nResult from `), 
    chalk.white(`${routes[functionNo - 1].function} - ${routes[functionNo - 1].description}: `),
    chalk.green(`${result}`))
}