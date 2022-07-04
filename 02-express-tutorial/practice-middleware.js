

const consoleLog = (req, res, next) => {
  console.log('Hello World!')
  next()
}


module.exports = consoleLog