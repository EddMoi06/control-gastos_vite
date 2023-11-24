import {useState} from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({
    presupuesto, 
    setPresupuesto, 
    setIsValidP, 
    mensaje, 
    setMensaje
}) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if( !presupuesto || presupuesto <= 0){
            setMensaje('No es un presupuesto valido');
            return
        }

        setMensaje('')
        setIsValidP(true)  
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
        
        <form onSubmit={handleSubmit} className="formulario">
            <div className="campo">
                <label htmlFor="presupuesto">Definir Presupuesto</label>
                <input 
                    className="nuevo-presupuesto"
                    id="presupuesto"
                    type="number" 
                    placeholder="Añade tu Presupuesto"
                    value={presupuesto}
                    onChange={e => {setPresupuesto(Number(e.target.value))}}
                />
            </div>

            <input type="submit" value="Añadir" />

            {mensaje && <Mensaje tipo='error'> {mensaje} </Mensaje>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto
