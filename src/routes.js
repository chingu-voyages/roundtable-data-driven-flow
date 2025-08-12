import currentDate from "./currentDate.js"
import convertToLocalDate from "./convertToLocalDate.js"

const routes = [
  {
    function: "currentDate",
    description: "Returns the current date in ISO format",
    handler: currentDate,
    dynamicParms: false,
  }, {
    function: "convertToLocalDate",
    description: "Converts a Date object to ISO format (YYYY-MM-DD)",
    handler: convertToLocalDate,
    dynamicParms: true,
  }
]

export default routes