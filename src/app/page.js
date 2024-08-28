import Image from "next/image";
import styles from "./page.module.css";
import Cabecalho from "./components/Cabecalho";
import { Button } from "react-bootstrap";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Button variant="danger">Primary</Button>{' '}


      <Cabecalho titulo="Página Inicial" subtitulo="Kamilly"/>
      <Cabecalho titulo="Página Inicial" subtitulo="Kamilly"/>
      <Cabecalho titulo="Página Inicial" subtitulo="Kamilly"/>
      <Cabecalho titulo="Página Inicial" subtitulo="Kamilly"/>

      <Link href="/fundamentos">Página Fundamentos</Link><br />
      
    </main>
  );
}
