const fs = require('fs');
const file = require('fs-extra');
const path = require('path');
const {prompt} = require('inquirer');

const componentFile = require('./templates/component');
const StyleComponentFile = require('./templates/styles');
const baseFile = require('./templates/base');
const strArr = require('./file-formating');

// const rootPath = process.env.HOME || process.env.USERPROFILE;
const rootPath = './';

const updateQuiz = [
    {
        type: "input",
        name: "directoryName",
        message: "component name"
    }
]

const usage = function() {
    const usageText = `

    usage:
      adaptive-fs <action> <type> <name> <theme>

      <action> can be:

      c, create:      used to create a new compoentent / file.
      d, delete:      used to delete a component / file.
  
      <type> can be:

      file:        this creates files in a given directory <dir>
      component:   this creates components in a given theme

      finally:
      <name>  : this is the name you give your component
      <theme> : this is the theme you want your component to be created.

      other commands:
      --help:  used to print the usage guide
      --version: used to check the version of the package
      p, pwd: view the current working directory 
    `
  
    console.log(usageText)
}

function isDirSync(aPath) {
    try {
        return fs.statSync(aPath).isDirectory();
    } catch (e) {
        if (e.code === 'ENOENT') {
            return false;
      } else {
            throw e;
      }
    }
}

function pwd(){
    console.log(path.resolve(rootPath))
}

function component(type, file, theme){
    const formatted = strArr(file);
    const fileName = `${formatted}.js`;
    const cssFile = `${formatted}-css.js`;
    const baseName = `${formatted}.js`;

    const componentsPath = path.resolve(path.join(rootPath, `/src/themes/${theme}/components/elements/${formatted}`));
    const fileDir = path.resolve(path.join(rootPath, `/src/themes/${theme}/components/elements/${formatted}/${fileName}`));
    const cssDIr = path.resolve(path.join(rootPath, `/src/themes/${theme}/components/elements/${formatted}/${cssFile}`));
    const baseDir = path.resolve(path.join(rootPath, `/src/elements/base/${baseName}`));

    if(isDirSync(path.resolve(path.join(rootPath, '/src/elements/base/')))){
      fs.createWriteStream(baseDir);
      fs.writeFileSync(baseDir, baseFile(file, theme), {encoding: "utf8"});

      console.log("\x1b[32m Success:\x1b[37m the base component was created successully here " + path.resolve(path.join(rootPath, '/src/elements/base/')))
    }else{
      console.log(false)
    }

    try{
        if(isDirSync(path.resolve(path.join(rootPath, `/src/themes/${theme}/components/elements/`)))){
            if(file.split('-').length > 4){
                console.log("\x1b[31m Stop:\x1b[37m The file name must contain at least two words");
                usage();
                return;
            }else{

                if(!fs.existsSync(componentsPath)){
                    if(type == 'component'){
                        fs.mkdirSync(componentsPath);
                        fs.createWriteStream(fileDir);
                        fs.createWriteStream(cssDIr);
                        fs.writeFileSync(fileDir, componentFile(file, theme), {encoding: "utf8"});
                        fs.writeFileSync(cssDIr, StyleComponentFile(file), {encoding: "utf8"});
    
                        console.log("\x1b[32m Success:\x1b[37m the component was created successully here " + path.resolve(path.join(rootPath, `/src/themes/${theme}/components/elements/${formatted}/${fileName}`)))

                    }else{
                        console.log(`\x1b[31m Please provide the correct arguments for creating ${type}\n`);
                        console.log(`\x1b[37menter 'adaptive-fs --help' for more information`);
                    }
                }else{
                    console.log(`\x1b[33m Warning:\x1b[37m ${formatted} exists here ` + componentsPath);
                }
            }
        }else{
            console.log("\x1b[31m the directory does not exist")
        }
    }catch(err){
        console.log(err)
    }
}  

const createComponent = (type, name, theme) => {
    return component(type, name, theme);
}

const createFile = (type, name, theme) => {
    return component(null, name, theme);
}

const deleteCompnent = (type, name, theme) => {
    const formatted = strArr(name);
    const baseName = `${formatted}.js`;
    const baseDir = path.resolve(path.join(rootPath, `/src/elements/base/${baseName}`));
    
    if(!isDirSync(path.resolve(path.join(rootPath, `/src/themes/${theme}/components/elements/`))) ){
        console.log("The directory does not exist");
        usage();
        return;
    }else{
        file.remove(path.resolve(path.join(rootPath, `/src/themes/${theme}/components/elements/${formatted}`)), function(err){
            if (err) return console.error(err);
            console.log("component deleted successfully!")
          });
    }

    if(baseDir){
      fs.unlinkSync(baseDir, err => {
        if(err){
          console.log(err)
        }else{
          console.log('base component deleted successfully');
        }
      })
    }
}

module.exports = {
    createComponent,
    deleteCompnent,
    pwd
};
