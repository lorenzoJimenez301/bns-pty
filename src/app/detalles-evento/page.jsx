import React from 'react'

const Prueba = ({ params }) => {

const { nombre } = params;

  return (
    <div>Hola! {nombre}</div>
  )
}

export default Prueba;