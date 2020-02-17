const fs = require('fs');
const path = require('path');
const {prompt} = require('inquirer');

const componentFile = require('./component');
const StyleComponentFile = require('./styles');
const strArr = require('./file-formating');

const basePath = path.resolve(__dirname);

const updateQuiz = [
    {
        type: "input",
        name: "directoryName",
        message: "component name"
    }
]


function component(type, file, theme){
    const formatted = strArr(file);
    const fileName = `${formatted}.js`;
    const cssFile = `${formatted}-css.js`;

    const componentsPath = path.resolve(path.join(basePath, `/${theme}/components/elements/${formatted}`));
    const fileDir = path.resolve(path.join(basePath, `/${theme}/components/elements/${formatted}/${fileName}`));
    const cssDIr = path.resolve(path.join(basePath, `/${theme}/components/elements/${formatted}/${cssFile}`));

    try{
        if(file.split('-').length > 3){
            console.log("\x1b[31m Stop:\x1b[37m The file name must contain at least two words");
            return;
        }else{
            if(!fs.existsSync(componentsPath)){
                if(type == 'component'){
                    fs.mkdirSync(componentsPath);
                    fs.createWriteStream(fileDir);
                    fs.createWriteStream(cssDIr);
                    fs.writeFileSync(fileDir, componentFile(file, theme), {encoding: "utf8"});
                    fs.writeFileSync(cssDIr, StyleComponentFile(file), {encoding: "utf8"});

                    console.log("\x1b[32m Success:\x1b[37m the component was created successully.")
                }else{
                    console.log(`\x1b[31m Please provide the correct arguments for creating ${type}\n`);
                    console.log(`\x1b[37menter 'adaptive-fs --help' for more information`);
                }
            }else{
                console.log(`\x1b[33m Warning:\x1b[37m ${formatted} exists here ` + componentsPath);
            }
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
    if(type == "component"){
        if(fs.existsSync(path.resolve(path.join(basePath, `/${theme}/components/elements/${strArr(name)}`)))){
            const content = fs.readdirSync(path.resolve(path.join(basePath, `/${theme}/components/elements/`)));
            
            if(content.length > 0 || !Array.isArray(content)){
                return fs.unlinkSync(path.resolve(path.join(basePath, `/${theme}/components/elements/${strArr(name)}`)));
            }else{
                
            }
        }else{
            console.log(`\x1b[31m ${name}\x1b[37m No found`);
        }
    }else{
        console.log("\x1b[31m Please provide the correct parameters for deleting a file")
    }
}

module.exports = {
    createComponent,
    deleteCompnent
};