import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, Container, FormControl, InputGroup, Modal, Table } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { Usuario } from "../Interface/IUsuario";
import { eliminarUsuario, obtenerUsuario, obtenerUsuarios } from "./Firebase/Promesas";
import { MdEditDocument, MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useRouter } from "next/router";
import { query } from "firebase/firestore";

const estadoInicial:Usuario = {
    tema:"",
    comentario:"",
    correo:"",
    edad:0,
    nombre:"",
    color:"",
    password:"",
    telefono:0,
    key:""
}

export const PaginaTabla = ()=>{
    const router = useRouter()
    const [nom, setnom] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [usuario, setusuario] = useState<Usuario[]>([])
    const [id, setid] = useState("")
    useEffect(()=>{
        obtenerUsuarios().then((usuarios)=>{
            setusuario(usuarios)
        }).catch((e)=>{
            alert("Error")
        })
    },[])
    

    const handlePersona = (id:string) =>{
        setid(id)
    }
    const eliminar = ()=>{
        eliminarUsuario(id)
    }
    
    return (
        <>
        <div className="ContenedorJefePagTabla">
        <header>
        <img className="imgLogoTabla" src="https://th.bing.com/th/id/R.99bd293da8dd96c75b4ea53d97ae0351?rik=ej4LA2J4TkMZmw&riu=http%3a%2f%2fpngimg.com%2fuploads%2fmortal_kombat%2fmortal_kombat_PNG135.png&ehk=XmW72e79gUYMQDD%2btOJMUMVDQWkxhIGWoW2kYYjAFqk%3d&risl=&pid=ImgRaw&r=0" alt="" />
        <Container className="ContenedorHeadPagTabla">
        <Link href={{pathname:"Pagina1"}}>
        <Button variant="outline-light">Volver</Button>{' '}
        </Link>
        </Container>
        </header>
        <Container className="ContenedorPagTabla">
        <h1 className="tituloPrincipal">Hola {router.query.nombre}!!!</h1>
        <p className="subTituloPag1">Ahora los datos de los usuarios se encuentran disponibles aqui:</p>

        <InputGroup className="mb-3">
        <FormControl
        placeholder="Busca al usuario por su R.U.N."
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        style={{ padding:"15px", fontSize:"18px" }}
        />
        <Button variant="outline-secondary" id="button-addon2"
        style={{ fontSize:"18px", borderColor:"white", color:"white"}}
        >
        <FaSearch />
        </Button>
    </InputGroup>

    </Container>
    </div>
    <h1 className="TituloTabla">Tabla de registro</h1>
    <hr />
    <Table className="TablaPagTabla">
        <thead>
            <tr>
            <th>NOMBRE</th>
            <th>EMAIL</th>
            <th>EDAD</th>
            <th>TELEFONO</th>
            <th>TEMA</th>
            <th>COLOR</th>
            <th>MENSAJE</th>
            <th>ACCION</th>
            </tr>
        </thead>
        <tbody>
            {
                usuario.map((p)=>{
                    return(
                        <tr>
                            
                            <td>{p.nombre}</td>                     
                            <td>{p.correo}</td>
                            <td>{p.edad}</td>
                            <td>{p.telefono}</td>
                            <td>{p.tema}</td>
                            <td>{p.color}</td> 
                            <td>{p.comentario}</td> 
                            <td>
                                <Link href={{pathname:"PaginaActualizar",query:{key:p.key}}}>
                                <Button variant="outline-dark" onClick={()=>{handlePersona(p.key)}}><CiEdit/></Button>
                                </Link>
                                <Button variant="outline-dark" onClick={handleShow}><MdOutlineDelete /></Button>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                    <Modal.Title>¡CUIDADO!</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Seguro que deseas eliminar a: {p.nombre}?</Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="danger" onClick={handleClose}>
                                        Cancelar
                                    </Button>
                                    <Button variant="danger" onClick={eliminar} >
                                        Eliminar
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </Table>
        </>
    )
}
export default PaginaTabla