import { LitElement, html, css } from 'lit';
import "./componente-formulario.js";
import "./componente-de-renderizado.js";
export class ComponenteRaiz extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                background-color:blue;
            }
        `
    ];

    render() {
        return html`
        <h1>Top-Automoviles</h1>
        <div>
        <componente-formulario></componente-formulario>
        
        </div>`;
    }
}
customElements.define('componente-raiz', ComponenteRaiz);
