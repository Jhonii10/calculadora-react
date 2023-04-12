import React from 'react'
import PropTypes from 'prop-types'

function Resultado({operacion,calculo}) {
  return (
    <div>
        <br/>
      <span>{operacion}:{calculo}</span>
    </div>
  )
}

Resultado.propTypes = {
    operacion: PropTypes.string,
    calculo: PropTypes.number
}

export default Resultado

