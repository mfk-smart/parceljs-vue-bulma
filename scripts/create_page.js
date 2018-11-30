// const files = require('./lib/filesystem.js')
const ask = require('./lib/userinput.js')

const run = async () => {
  const compType = await ask.pageOrSubcomponent()
  console.log(compType)
}

run()
