import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Filtros from "./components/Filtros";
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
  const [filtro, setFiltro] = useState('');
  const [gastosFiltrados, setGastosFiltrados] = useState([])

  useEffect(() => {
      if(Object.keys(gastoEditar).length > 0){
        setModal(true)

        setTimeout(() => {
        setAnimarModal(true)
        }, 500);
      }
  }, [gastoEditar])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto && 0)
  }, [presupuesto])

  useEffect(() => {
    if(filtro){
      const gastosActualizados = gastos.filter(gasto => gasto.categoria === filtro)
      setGastosFiltrados(gastosActualizados)
    }
  }, [filtro])

  const eliminarGasto = id => {
   const eliminar = gastos.filter(gasto => id !== gasto.id)
   setGastos(eliminar)
  }

  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})

    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }

  const guardarGastos = gasto => {
    if(gasto.id){
      const gastoActualizado = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState )
      setGastoEditar({})

      setGastos(gastoActualizado)
    }else{
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }

    setAnimarModal(false)

    setTimeout(() => {
        setModal(false);
    }, 500);
  }
  return (
    <div className={modal ? 'fijar' : ''}>
      <Header 
        gastos={gastos}
        setGastos={setGastos}
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
            <Filtros
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              filtro={filtro}
              gastosFiltrados={gastosFiltrados}
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
                setGastoEditar={setGastoEditar}
                />}
    </div>
  )
}

export default App
