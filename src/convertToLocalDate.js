const convertToLocalDate = (date) => {
  if (!(date instanceof Date)) {
    throw new Error("Input must be a Date object")
  }
  return date.toLocaleDateString()
}

export default convertToLocalDate