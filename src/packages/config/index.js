
const { copyFile } = require('../../util/file')
const path = require('path')
const { outputPath } = require('../../config/config')
async function init(){
    // 获取模版文件位置
    let fileName = path.join(__dirname,'./templates/runConfig.js')
    await copyFile(fileName,path.resolve(`${outputPath}/config/runConfig.js`))
}

module.exports = {
    init
}