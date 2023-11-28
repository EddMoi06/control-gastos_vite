import React from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros contenedor sombra'>
        <form >
            <div className="campo">
                <label htmlFor="campos"> Filtros Gastos </label>
                <select 
                    id='campos'
                    value={filtro}
                    onChange={e => setFiltro(e.target.value)} 
                >
                    <option value="">-- Todas las Categorias --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="salud">Salud</option>
                    <option value="suscripciones">Suscripciones</option>
                    <option value="hobbies">Hobbies</option>
                    <option value="gastos">Gastos Varios</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filtros
