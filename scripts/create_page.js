const files = require('./lib/filesystem.js')
const ask = require('./lib/userinput.js')

const run = async () => {
  const config = await ask.pageOrSubcomponent()
  if (config.compType[0] === 'Page') {
    const pagesDir = files.getOrCreatePagesDirectory()
    const newPagesPath = pagesDir + '/' + config.compName
    files.createDirectory(newPagesPath)

  } else if (config.compType[0] === 'Subcomponent') {
    const subcomponentsDir = files.getOrCreateSubcomponentsDirectory()
    const newSubcomponentsPath = subcomponentsDir + '/' + config.compName
    files.createDirectory(newSubcomponentsPath)
  }
}

run()
