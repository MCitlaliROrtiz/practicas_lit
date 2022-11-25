import { LitElement, html, css } from 'lit';
import"./componente-de-renderizado.js";
export class ComponenteFormulario extends LitElement {
    static styles = [
        css`
            :host {
                display:block;
                background-color:skyblue;
            }
        `
    ];
    static properties= {

            auto: { type: Object},
        
    }
    constructor(){
        super()
      this.auto =[]
    }

    render() {
        return html`
        <form>
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
    <div>
  <componente-de-renderizado>
   </componente-de-renderizado>
    </div>
        `;
        
    }
    guardar(e) {
       
        e.preventDefault()
        this.auto.push({
        nombre:this.shadowRoot.getElementById("nombre").value,
        marca:this.shadowRoot.getElementById("marca").value,
        año:this.shadowRoot.getElementById("año").value,
        version:this.shadowRoot.getElementById("version").value
        }
        )
        console.log(this.auto);
    }
}
customElements.define('componente-formulario', ComponenteFormulario);
