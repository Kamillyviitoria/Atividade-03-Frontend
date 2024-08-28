'use client'

import { Container, Nav, Navbar } from 'react-bootstrap'
import Pagina from '../components/Pagina'

export default function Array() {

    const carros = ['Corsa', 'Celta', 'Ferrari', 'Fusca', 'Cobalt']
    const pessoas = ['Orion', 'Maria', 'Ailton']
   
  return (
    <Pagina titulo="Página de Array">
        

     {pessoas.map(item=>(
                    <p>{item}</p>
        
                ))}  
      {carros.map(item=>(
            <p>{item}</p>

    
        ))}  

        <ul>
           {carros.map(item=>(
                        <li>{item}</li>
            
        ))}        

        </ul>

    </Pagina>
  )
}