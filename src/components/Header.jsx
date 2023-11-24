import ControlPresupuesto from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({
    gastos,
    presupuesto, 
    setPresupuesto,
    isValidP,
    setIsValidP,
    mensaje,
    setMensaje
}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        {isValidP ? (
            <ControlPresupuesto
                presupuesto={presupuesto}
                gastos={gastos}
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
