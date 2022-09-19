import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



export default function UserForm({ onSubmit, cart, navigate }) {

  const [userData, setUserData] = useState({ name: "", email: "", phone: "" })

  function inputChangeHandler(e) {
    const input = e.target;

    const value = input.value;
    const inputName = input.name;

    let copyUserData = { ...userData };

    copyUserData[inputName] = value;
    setUserData(copyUserData);
  }

  const { Label, Control, Group } = Form
  return (
    <Form className="m-3" onSubmit={(e) => onSubmit(e, userData)}>
      <Group className="mb-3" controlId="formBasicEmail">
        <Label>Nombre</Label>
        <Control
          name="name"
          type="text"
          placeholder="Nombre y Apellido"
          value={userData.name}
          onChange={inputChangeHandler}
        />
      </Group>
      <Group className="mb-3" controlId="formBasicEmail">
        <Label>Mail</Label>
        <Control
          name="email"
          type="email"
          placeholder="email@email.com"
          value={userData.email}
          onChange={inputChangeHandler}
        />
      </Group>
      <Group className="mb-3" controlId="formBasicEmail">
        <Label>Telefono</Label>
        <Control
          name="phone"
          type="text"
          placeholder="Telefono"
          value={userData.phone}
          onChange={inputChangeHandler}
        />
      </Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  )
}