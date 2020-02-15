
    import {html, css} from 'lit-element';
    import {TabsElementStyles} from './tabs-element'

    class TabsElement extends TabsElementBase{
        static get styles(){
            TabsElementStyles,
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
            return 'tabs-element';
        }
    }

    customElement.define(TabsElement.is, TabsElement);
    
    