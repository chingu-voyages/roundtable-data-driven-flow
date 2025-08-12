import currentDate from "./currentDate.js"

const routes = [
  {
    function: "getCurrentDate",
    description: "Returns the current date in ISO format",
    handler: currentDate
  }
]

export default routes