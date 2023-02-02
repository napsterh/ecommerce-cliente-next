import React from 'react'

export default function LoginForm(props) {

  const { showRegisterForm } = props;

  return (
    <>
      <div>Estamos en el form de login</div>
      <button onClick={showRegisterForm}>Ir a registro</button>
    </>
  )
}
