'use client'
import { Alert, Container } from "react-bootstrap";
import Cabecalho from "../components/Cabecalho";
import Pagina from "../components/Pagina";


export default function Fundamentos(){


    return (
        <Pagina titulo="Fundamentos">
       
            <Cabecalho />

            <Container>
            <Alert>
                Atenção! Preste muita atenção.
            </Alert>

            <h1>Fundamentos</h1>
            <p>Sucesso</p>
            <Cabecalho />
            </Container>
            </Pagina> 
        

    )
}

