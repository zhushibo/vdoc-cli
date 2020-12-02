#!/usr/bin/env node
const program = require('commander')
let package = require('../../package.json');
const { action } = require('commander');


program
  .version(package.version)
  .command('init')
  .description('begin init')
  .alias('i')
  .action(()=> {
    require('../commands/init')
  });

program
  .version(package.version)
  .command('add')
  .description('add plugin')
  .alias('a')
  .action(()=>{
    require('../commands/add')
  })

program
  .version(package.version)
  .command('config')
  .description('config vue.config.js')
  .alias('c')
  .action(()=>{
    require('../commands/config')
  })

program.parse(process.argv);