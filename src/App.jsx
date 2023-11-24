import { useState, useEffect } from 'react';
import Header from "./components/Header";
import ListadoGastos from './components/ListadoGastos';
import Modal from './components/Modal';
import {generarId} from './helpers'
import iconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidP, setIsValidP] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [mensaje, setMensaje] = useState('')
  const [gastos, setGastos] = useState([]);
  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
      if(Object.keys(gastoEditar).length > 0){
        handleNuevoGasto()
      }
  }, [gastoEditar])

  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})
    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }

  const guardarGastos = gasto => {
    gasto.id = generarId()
    gasto.fecha = Date.now()
    setGastos([...gastos, gasto])

    setAnimarModal(false)

    setTimeout(() => {
        setModal(false);
    }, 500);
  }
  return (
    <div className={modal ? 'fijar' : ''}>
      <Header 
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidP={isValidP}
        setIsValidP={setIsValidP}
        mensaje={mensaje}
        setMensaje={setMensaje}
      />

      {isValidP && (
        <>
          <main>
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
            />
          </main>
          <div className="nuevo-gasto">
            <img 
              src={iconoNuevoGasto} 
              alt="Icono Nuevo Gasto" 
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && <Modal 
                setModal={setModal}
                animarModal={animarModal}
                setAnimarModal={setAnimarModal}
                mensaje={mensaje}
                setMensaje={setMensaje}
                guardarGastos={guardarGastos}
                gastoEditar={gastoEditar}
                />}
    </div>
  )
}

export default App
