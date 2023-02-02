import React, {useState} from 'react'
import { Form, Button } from 'semantic-ui-react';

export default function RegisterForm(props) {

   const { showLoginForm } = props;

  return (
    <Form className='loin-form'>
      <Form.Input name="name" type='text' placeholder="Nombre" />
      <Form.Input name="lastname" type='text' placeholder="Apellidos" />
      <Form.Input name="username" type='text' placeholder="Nombre de usuario" />
      <Form.Input name="email" type='text' placeholder="Correo electronico" />
      <Form.Input name="password" type='text' placeholder="Contraseña" />
      <div className='actions'>
        <Button type='button' basic>
          Iniciar sesión
        </Button>
        <Button type='submit' className='submit'>
          Registrar
        </Button>
      </div>
    </Form>
  )
}
