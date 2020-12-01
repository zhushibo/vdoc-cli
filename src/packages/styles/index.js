const { copyFile, mkdir } = require('../../util/file')
const path = require('path')
const temps = ['function.styl','global.styl','theme.styl']
const { outputPath } = require('../../config/config')

async function init(){
    mkdir('test/tmp/styles')
    for(let item of temps){
        // 获取模版文件位置
        const fileName = path.join(__dirname,`./templates/${item}`)
        const tarPath = path.resolve(`${outputPath}/assets/styles/${item}`)
        await copyFile(fileName,tarPath)
    }
}

module.exports = {
    init
}