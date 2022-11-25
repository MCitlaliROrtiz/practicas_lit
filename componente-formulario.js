import { LitElement, html, css } from 'lit';
import"./componente-de-renderizado.js";
export class ComponenteFormulario extends LitElement {
    static styles = [
        css`
            :host {
                display:block;
            }
            .formulario{
                background-color:skyblue;
                display:flex;
                flex-flow: row wrap;
                flex-direction: row;
                justify-content: space-evenly;
                position:relative;
                }
             .tarjeta1{
                display: flex;
                flex-flow: column wrap;
                flex-direction: row;
                flex-wrap: wrap;
                margin:auto;
                padding:auto;
             }
            componente-de-renderizado{
                display:flex;
                flex-wrap: wrap;
                flex-direction: column;
                align-content: space-around;
                height:255px;
                margin:auto;
                padding:auto;
                width:198px;
                
            }
        
        `
    ];
    static properties= {

            auto: { type: Object},
            
        
    }
    constructor(){
        super()
      this.auto =  [];

    }

    render() {
        return html`
        <form class="formulario">
           <div class="ingresoDeDatos"> 
                <p>Nombre:</p>
                <input id="nombre" type="text">
           </div>
           <div class="ingresoDeDatos"> 
                <p>Marca:</p>
                <input id="marca" type="text">
           </div>
           <div class="ingresoDeDatos"> 
                <p>Año:</p>
                <input id="año" type="text">
           </div>
           <div class="ingresoDeDatos"> 
                <p>Version:</p>
                <input id="version" type="text">
           </div>
           <div class="btn"> 
                <button id="btn" @click=${this.guardar}>Agregar</button>
           </div>
    </form>
    <div class="tarjeta1">

  ${this.auto.map(e=>
    html `<componente-de-renderizado
    nombre=${e.nombre} 
    marca=${e.marca}
    año=${e.año}
    version=${e.version}>
  
  </componente-de-renderizado>`
  )}
    </div>
        `;
        
    }
    guardar(e) {
       
       e.preventDefault()
        this.requestUpdate();
        this.auto.push({
            nombre:this.shadowRoot.getElementById("nombre").value,
            marca:this.shadowRoot.getElementById("marca").value,
            año:this.shadowRoot.getElementById("año").value,
            version:this.shadowRoot.getElementById("version").value
            })
         ;
       ;
    }
}
customElements.define('componente-formulario', ComponenteFormulario);
