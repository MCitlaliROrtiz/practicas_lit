import { LitElement, html, css } from 'lit';
export class ComponenteDeRenderizado extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
                background-color:ivory;
            }
        `
    ];
   static properties ={

    auto: {type:Object}

    }
    render() {
        return html`
        <h2>texto generico</h2>        `;
    }
    /*guardar(e) {
       
        e.preventDefault()
        this.auto.push({
        nombre:this.shadowRoot.getElementById("nombre").value,
        marca:this.shadowRoot.getElementById("marca").value,
        año:this.shadowRoot.getElementById("año").value,
        version:this.shadowRoot.getElementById("version").value
        }
        )
        console.log(this.auto);*/
    }
}
customElements.define('componente-de-renderizado', ComponenteDeRenderizado);
