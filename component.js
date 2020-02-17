const path = require("path");

const toCamelCase = require('./formating');
const styles = require('./styles');

function componentFile(fileName, theme){
    const isFormatting = () =>{
        if(fileName.includes('-')){
            return fileName;
        }else{
            return fileName + "-element";
        }
    }
    const template = `
    import {html, css} from 'lit-element';
    import {${toCamelCase(fileName)}Styles} from './${isFormatting()}-css'

    class ${toCamelCase(fileName)} extends ${toCamelCase(fileName)}Base{
        static get styles(){
            ${toCamelCase(fileName)}Styles,
            css \` 
            :host{
                disply: block;
            }
            \`
        }

        render(){
            return html \`\`
        }

        static get is(){
            return '${isFormatting()}';
        }
    }

    customElement.define(${toCamelCase(fileName)}.is, ${toCamelCase(fileName)});
    
    `;
    return template;
}

module.exports = componentFile;