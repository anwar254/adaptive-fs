#!/usr/bin/env node
const program = require('commander');
const package = require('./package');
const {
    createComponent, 
    deleteCompnent
} = require('./actions');

program
    .version(package.version)
    .description(package.description)

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