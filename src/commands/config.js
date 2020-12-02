const { copyFile } = require('../util/file')
const path = require('path')
const { outputPath } = require('../config/config')

init()
async function init() {
    let fileName = path.join(__dirname,'../packages/config/templates/vue.config.js')
    let dll = path.join(__dirname,'../packages/config/templates/dll.config.js')

    await copyFile(fileName,path.resolve(`${outputPath}/vue.config.js`))
    await copyFile(dll,path.resolve(`${outputPath}/build/dll.config.js`))
}

