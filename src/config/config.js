/*
 * @Description: 
 * @Author: doctor
 * @Date: 2020-07-23 15:52:34
 * @LastEditTime: 2020-07-23 17:17:12
 * @LastEditors: doctor
 */ 
module.exports = {
  outputPath: process.env.NODE_ENV === 'test' ? '' : 'test/tmp',
  isTest:"process.env",
  path:'https://github.com/zhushibo/vdoc-cli'
}