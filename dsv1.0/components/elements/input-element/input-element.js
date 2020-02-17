
    import {html, css} from 'lit-element';
    import {InputElementStyles} from './input-element'

    class InputElement extends InputElementBase{
        static get styles(){
            InputElementStyles,
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
            return 'input-element';
        }
    }

    customElement.define(InputElement.is, InputElement);
    
    