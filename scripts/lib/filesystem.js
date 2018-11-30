const fs = require('fs')

var self = module.exports = {
  getSourceDirectory: () => {
    return process.cwd() + '/src'
  },
  getPagesDirectory: () => {
    return self.getSourceDirectory() + '/components/pages'
  },
  getOrCreatePagesDirectory: () => {
    const pagesDir = this.getPagesDirectory()
    fs.stat(pagesDir, exists => {
      if (exists) {
        return pagesDir
      } else {
        fs.mkdir(pagesDir, { recursive: true }, err => {
          if (err) throw err
        })
        return pagesDir
      }
    })
  },
  getSubcomponentsDirectory: () => {
    return this.getSourceDirectory() + '/components/subcomponents'
  },
  getOrCreateSubcomponentsDirectory: () => {
    const subcomponentsDir = this.getSubcomponentsDirectory()
    fs.stat(subcomponentsDir, exists => {
      if (exists) {
        return subcomponentsDir
      } else {
        fs.mkdir(subcomponentsDir, { recursive: true }, err => {
          if (err) throw err
        })
        return subcomponentsDir
      }
    })
  },

  getStoreFilePath: () => {
    return this.getSourceDirectory() + '/store/index.js'
  },
  getRouteFilePath: () => {
    return this.getSourceDirectory() + '/router/index.js'
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
}
