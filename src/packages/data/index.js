
const { copyFile } = require('../../util/file')
const path = require('path')

const { outputPath } = require('../../config/config')
async function init(){
    // 获取模版文件位置
    let fileName = path.join(__dirname,'./templates/data.js')
    await copyFile(fileName,path.resolve(outputPath + '/scripts/common/data.js'))
}

module.exports = {
    init
}