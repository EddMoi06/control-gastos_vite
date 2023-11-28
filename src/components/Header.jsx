import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({
    gastos,
    presupuesto, 
    setPresupuesto,
    isValidP,
    setIsValidP,
    mensaje,
    setMensaje,
    setGastos
}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        {isValidP ? (
            <ControlPresupuesto
                presupuesto={presupuesto}
                gastos={gastos}
                setGastos={setGastos}
                setPresupuesto={setPresupuesto}
                setIsValidP={setIsValidP}
            />
        ) : (
            <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValidP={setIsValidP}
                mensaje={mensaje}
                setMensaje={setMensaje}
            />
        )}
        
    </header>
  )
}

export default Header;
