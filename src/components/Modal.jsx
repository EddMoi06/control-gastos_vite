import { useState, useEffect } from "react";
import iconoCerrarModal from "../img/cerrar.svg";
import Mensaje from "./Mensaje";


const Modal = ({
    setModal, 
    animarModal, 
    setAnimarModal,
    mensaje,
    setMensaje,
    guardarGastos,
    gastoEditar
}) => {

    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState('');
    const [categoria, setCategoria] = useState('');


    const handleCerrarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false);
        }, 500);
    }

    const handleSubmit = e => {
        e.preventDefault()

        if([nombre, cantidad, categoria].includes('')){
            setMensaje('Todos los Campos son Obligatorios');
            setTimeout(() => {
                setMensaje('')
            }, 3000);
            return
        }

        guardarGastos({nombre, cantidad, categoria})
    }

    useEffect(() => {
        if(Object.keys(gastoEditar).length > 0){
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
        }
    }, [])

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img 
                src={iconoCerrarModal} 
                alt="Icono Cerrar" 
                onClick={handleCerrarModal}
            />
        </div>

        <form 
            onSubmit={handleSubmit}
            className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
        >
            <legend>Nuevo Gasto</legend>
                {mensaje && <Mensaje tipo='error'> {mensaje} </Mensaje>}

            <div className="campo">
                <label htmlFor="nombre">Nombre Gasto</label>
                <input 
                    id="nombre"
                    type="text"
                    placeholder="Nombre del Gasto"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label htmlFor="cantidad">Cantidad</label>
                <input 
                    id="cantidad"
                    type="number"
                    placeholder="Cantidad del gasto: ej. 200"
                    value={cantidad}
                    onChange={e => setCantidad(Number(e.target.value))}
                />
            </div>
            <div className="campo">
                <label htmlFor="categoria">Categoria</label>
                <select 
                    id="categoria"
                    value={categoria}
                    onChange={e => setCategoria(e.target.value)}
                >
                    <option value="" disabled>-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                    <option value="hobbies">Hobbies</option>
                    <option value="gastos">Gastos Varios</option>
                </select>
            </div>

            <input
                type="submit"
                value="Añadir Gastos"
            />
        </form>
    </div>
  )
}

export default Modal
