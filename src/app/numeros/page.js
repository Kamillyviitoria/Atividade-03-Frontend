'use client'
import React, { useState } from 'react'
import Pagina from '../components/Pagina'
import { Button } from 'react-bootstrap'

export default function nomes() {
  

  const [num, setNum] = useState(0)

  function somar(){
    const novoNum = num + 1 
    setNum(novoNum)
  }
 
  function subtrair(){
    const novoNum =  num - 1
    setNum(novoNum)
  }
 

  return (
    <Pagina titulo='Números'>
        <Button onClick={somar}>+</Button>
      <h1>{num}</h1>
      <Button onClick={subtrair}>-</Button>
    </Pagina>
  )
}

