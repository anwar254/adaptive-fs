
    import {html, css} from 'lit-element';
    import {InputBoxStyles} from './input-box'

    class InputBox extends InputBoxBase{
        static get styles(){
            InputBoxStyles,
            css ` 
            :host{
                disply: block;
            }
            `
        }

        render(){
            return html ``
        }

        static get is(){
            return 'input-box';
        }
    }

    customElement.define(InputBox.is, InputBox);
    
    