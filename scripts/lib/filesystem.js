const fs = require('fs')
const path = require('path')

module.exports = {
  getSourceDirectory: () => {
    return process.cwd() + '/src'
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
