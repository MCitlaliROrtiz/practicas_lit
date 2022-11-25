import { LitElement, html, css } from 'lit';
export class ComponenteDeRenderizado extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                background-color:#7FB9C3;
            }
            
        `
    ];
   static properties ={

    auto: {type:Object},
    nombre: { type: String},
    marca: { type: String},
    año: { type: String},
    version: { type: String},
    }
    

    render() {
        return html`

        <div id= "img1">
        <img src="https://img.freepik.com/foto-gratis/coche-sedan-azul-carretera-clima-nublado_114579-4053.jpg?w=2000" alt="auto">
        </div> 
        <div id="card">
            <h2>${this.nombre}</h2>
            <p>${this.marca}</p>
            <p>${this.año}</p>
            <p>${this.version}</p>
        </div>     `;
    }
    
}
customElements.define('componente-de-renderizado', ComponenteDeRenderizado);
