'use client'
import React, { useState } from 'react'
import Pagina from '../components/Pagina'
import { Button } from 'react-bootstrap'

export default function nomes() {

  const [nome, setNome] = useState('Orion')

  function alterarNome(){
    const novoNome = nome == 'Orion' ? 'Orion Teles de Mesquita' : 'Orion'
    setNome(novoNome)
  }
  //   let novoNome  -------------------------------------------  essa function acima significa a mesma coisa desse código
  //   if(nome == 'Orion'){                                            ? = if
  //     novoNome = 'Orion Teles de Mesquita'                           : = else
  // }else{
  //   novoNome = 'Orion'
  // }

  return (
    <Pagina titulo='Nomes'>
      <h1>{nome}</h1>
      <Button onClick={alterarNome}>Alterar Nome</Button>
    </Pagina>
  )
}

