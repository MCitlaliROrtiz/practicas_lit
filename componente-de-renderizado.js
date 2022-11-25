import { LitElement, html, css } from 'lit';
export class ComponenteDeRenderizado extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                
            }
            .contenedorDeTarjetas{
                background-color:#6e7272;
                height:295px;
                width:198px;
                display:flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: center;
            }
            img{
        height:120px;
        width:125px;
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
        <div class="contenedorDeTarjetas">
        <div id= "img1">
        <img src="https://img.freepik.com/foto-gratis/coche-sedan-azul-carretera-clima-nublado_114579-4053.jpg?w=2000" alt="auto">
        </div> 
        <div id="tarjeta">
            <h2>${this.nombre}</h2>
            <p>${this.marca}</p>
            <p>${this.año}</p>
            <p>${this.version}</p>
        </div> 
        </div>    `;
    }
    
}
customElements.define('componente-de-renderizado', ComponenteDeRenderizado);
