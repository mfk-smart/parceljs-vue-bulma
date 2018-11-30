const files = require('./lib/filesystem.js')
const ask = require('./lib/userinput.js')

const run = async () => {
  const config = await ask.pageOrSubcomponent()
    console.log(files.getPagesDirectory())
return false
  if (config.compType[0] === 'Page') {
    const pagesDir = files.getOrCreatePagesDirectory()
    console.log('Directory created at ' + pagesDir)
  } else if (config.compType[0] === 'Subcomponent') {
    const subcomponentsDir = files.getOrCreateSubcomponentsDirectory()
    console.log('Directory created at ' + subcomponentsDir)
  }
}

run()
