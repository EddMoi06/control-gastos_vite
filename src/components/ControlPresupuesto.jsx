import {useState, useEffect} from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({
    gastos, 
    setGastos,
    presupuesto,
    setPresupuesto,
    setIsValidP
}) => {

    const formatearCantidad = cantidad => {
        return cantidad.toLocaleString('en-US',{
            style: 'currency',
            currency: 'USD'
        })
    }

    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)
    const [porcentaje, setPorcentaje] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
        const totalDisponible = presupuesto - totalGastado;

        const nuevoPresupuesto = (((presupuesto - totalGastado) / presupuesto) * 100).toFixed(2)

        
        setGastado(totalGastado)
        setDisponible(totalDisponible)

        setTimeout(() => {
            setPorcentaje(nuevoPresupuesto)
        }, 1000);
    }, [gastos])

    const resetApp = () => {
        
        const resultado = confirm('Deseas Resetear la App ?')
        if(resultado){
            setGastos([])
            setPresupuesto(0)
            setIsValidP(false)
        }
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <CircularProgressbar
                value={porcentaje}
                text={`${porcentaje} % Libre`}
                styles={buildStyles({
                    pathColor: '#3b82f6',
                    textColor: disponible < 0 ? '#DC2626' : '#3b82f6',
                    textSize: '25px',
                    trailColor: disponible < 0 ? '#DC2626' : '#F5F5F5'
                })}
            />
        </div>

        <div className="contenido-presupuesto">
            <button
                className='reset-app'
                type='button'
                onClick={resetApp}
            >Resetear App</button>
            <p>
                <span>Presupuesto:</span>
                {formatearCantidad(presupuesto)}
            </p>
            <p className={disponible < 0 ? 'negativo' : ''}>
                <span>Disponible:</span>
                {formatearCantidad(disponible)}
            </p>
            <p>
                <span>Gastado:</span>
                {formatearCantidad(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto
