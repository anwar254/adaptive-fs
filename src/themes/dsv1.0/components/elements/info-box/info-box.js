
    import {html, css} from 'lit-element';
    import {InfoBoxStyles} from './info-box-css'

    class InfoBox extends InfoBoxBase{
        static get styles(){
            InfoBoxStyles,
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
            return 'info-box';
        }
    }

    customElement.define(InfoBox.is, InfoBox);
    
    