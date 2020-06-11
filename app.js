#!/usr/bin/env node
const program = require('commander');
const package = require('./package');
const {
    createComponent, 
    deleteCompnent,
    pwd
} = require('./actions');

program
    .version("1.3.2")
    .description("Adaptive fs is a command line interface built to create component in adaptive-ui project")

program
    .command(`pwd`)
    .alias('p')
    .description('current working directory')
    .action(() => {
        pwd()
    })

// creating component
/**
 * 
 * @param [type, name, theme]
 * 
 */
program
    .command(`create <type> <name> <theme>`)
    .alias('c')
    .description('Create component')
    .action((type, name, theme) => {
        createComponent(type, name, theme)
    })

// Deleting component
/**
 * 
 * @param [type, name, theme]
 * 
 */

program
    .command(`delete <type> <name> <theme>`)
    .alias('d')
    .description('Create component')
    .action((type, name, theme) => {
        deleteCompnent(type, name, theme);
    })

// create file
/**
 * 
 * @param [type, name, theme, dir]
 * 
 */

// program
//     .command(`create <type> <name> <theme> <dir>`)
//     .alias('d')
//     .description('Create component')
//     .action((type, name, theme) => {
//         console.log("component deleted", {type, name, theme, dir})
//     })

program.parse(process.argv)
