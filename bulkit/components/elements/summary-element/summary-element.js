
    import {html, css} from 'lit-element';
    import {SummaryElementStyles} from './summary-element'

    class SummaryElement extends SummaryElementBase{
        static get styles(){
            SummaryElementStyles,
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
            return 'summary-element';
        }
    }

    customElement.define(SummaryElement.is, SummaryElement);
    
    