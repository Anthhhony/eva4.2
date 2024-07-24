import Link from "next/link";
import React from "react";
import { Badge, Button, Container, FormControl, FormText, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { useRouter } from "next/router";



export const Pagina1 = () =>{
  const router = useRouter()

    return (
        <>
        <div className="ContenedorJefePag1">
        <header>
        <img className="imgLogo" src="https://th.bing.com/th/id/R.99bd293da8dd96c75b4ea53d97ae0351?rik=ej4LA2J4TkMZmw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fmortal_kombat%2fmortal_kombat_PNG135.png&ehk=XmW72e79gUYMQDD%2btOJMUMVDQWkxhIGWoW2kYYjAFqk%3d&risl=&pid=ImgRaw&r=0" alt="" />
        <Link href={{pathname:"PaginaInicio"}}>
          <Button variant="outline-light" className="inputSalir">Salir</Button>{' '}
        </Link>
        </header>
        <Container className="ContenedorPag1">
          <h1 className="tituloPrincipal">Bienvenido {router.query.nombre}</h1>
          <p className="subTituloPag1">Nos complace informarle que, a partir de hoy, usted dispone de pleno control sobre la gestión de usuarios dentro de nuestra plataforma. </p>
          <Container className="contenedorInputsPag1">
        <Link href={{pathname:"PaginaRegistro"}}>
          <Button variant="outline-light" className="inputsPag1">Registrar usuario</Button>{' '}
        </Link>
        <Link href={{pathname:"PaginaTabla", query:{nombre:router.query.nombre}}}>
          <Button variant="outline-light" className="inputsPag1">Tabla</Button>{' '}
        </Link>
        <Link href={{pathname:"PaginaBusqueda"}}>
          <Button variant="outline-light" className="inputsPag1">Buscar usuario</Button>{' '}
        </Link>
        </Container>
      </Container>
      <div className="contenedorRed">
        <a href="https://www.instagram.com/" target="_blank"><FaInstagram /></a>
        <a href="https://web.whatsapp.com/" target="_blank"><FaWhatsapp /></a>
        <a href="https://discord.com/" target="_blank"><FaDiscord /></a>
      </div>
      </div>
      </>
    )
}
export default Pagina1