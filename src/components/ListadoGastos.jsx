import Gasto from "./Gasto"

const ListadoGastos = ({
    gastos,
    setGastoEditar,
    eliminarGasto,
    filtro,
    gastosFiltrados
}) => {
    return (
    <div className="listado-gastos contenedor">

        {filtro ? ( 
            <>
                <h2>{gastosFiltrados.length ? 'Gastos' : 'No Hay Gastos en esta Categoria'}</h2>
                {gastosFiltrados.map( gasto => {
                return(
                    <Gasto
                        key={gasto.id}
                        gasto={gasto}
                        setGastoEditar={setGastoEditar}
                        eliminarGasto={eliminarGasto}
                    />
                )})}
            </>

        ) : ( 
            <>
                {gastos.map( gasto => {
                return(
                    <Gasto
                        key={gasto.id}
                        gasto={gasto}
                        setGastoEditar={setGastoEditar}
                        eliminarGasto={eliminarGasto}
                    />
                )})}
            </>
        )}
    </div>
)
}

export default ListadoGastos
