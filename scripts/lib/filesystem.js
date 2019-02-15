const fs = require('fs')

var self = (module.exports = {
  getSourceDirectory: () => {
    return process.cwd() + '/src'
  },
  getPagesDirectory: () => {
    return self.getSourceDirectory() + '/components/pages'
  },
  getOrCreatePagesDirectory: () => {
    const pagesDir = self.getPagesDirectory()
    fs.stat(pagesDir, (err, exists) => {
      if (exists) {
        //console.log('pages directory exists...')
        return pagesDir
      } else {
        fs.mkdir(pagesDir, { recursive: true }, err => {
          if (err) {
            throw err
          } else {
            //console.log('pages directory created...')
            return pagesDir
          }
        })
      }
    })
  },
  getSubcomponentsDirectory: () => {
    return self.getSourceDirectory() + '/components/subcomponents'
  },
  getOrCreateSubcomponentsDirectory: () => {
    const subcomponentsDir = self.getSubcomponentsDirectory()
    fs.stat(subcomponentsDir, (err, exists) => {
      if (err) throw err
      if (exists) {
        // console.log('subcomponents directory exists...')
        return subcomponentsDir
      } else {
        fs.mkdir(subcomponentsDir, { recursive: true }, err => {
          if (err) {
            throw err
          } else {
            // console.log('subcomponents directory created...')
            return subcomponentsDir
          }
        })
      }
    })
  },

  getStoreFilePath: () => {
    return self.getSourceDirectory() + '/store/index.js'
  },
  getRouteFilePath: () => {
    return self.getSourceDirectory() + '/router/index.js'
  },
  directoryExists: filePath => {
    try {
      return fs.statSync(filePath).isDirectory()
    } catch (err) {
      return false
    }
  },
  createDirectory: dirPath => {
    fs.mkdir(dirPath, { recursive: false }, err => {
      if (err) throw err
    })
  },
})
