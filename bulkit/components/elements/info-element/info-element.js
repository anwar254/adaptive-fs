
    import {html, css} from 'lit-element';
    import {InfoElementStyles} from './info-element'

    class InfoElement extends InfoElementBase{
        static get styles(){
            InfoElementStyles,
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
            return 'info-element';
        }
    }

    customElement.define(InfoElement.is, InfoElement);
    
    