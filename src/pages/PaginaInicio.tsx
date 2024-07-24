import React, { useState } from "react";
import Link from "next/link";
import { Button, Container, Form, Modal, ModalFooter } from "react-bootstrap";

export const PaginaInicio = ()=>{
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [errorP, seterrorP] = useState("")
    const [BotonR, setBotonR] = useState(<p></p>)
    const [nom, setnom] = useState("")
    

        const validarVacio = (valor:string)=>{
            if (valor.trim().length == 0){
                seterrorP("No debes dejar el campo vacio")
                setBotonR(<p></p>)
                
                }
            else {
                setnom(valor)
                seterrorP("")
            }
        }

    const validarContra = (valor:string) =>{
        if (valor == "Abcd1234"){
        seterrorP("")
        setBotonR(<Button variant='primary'>Ingresar</Button>)
        }
        else {
        seterrorP("Contraseña incorrecta")
        setBotonR(<p></p>)
        }
    }
    return (
        <>
        <Container className="contenedorInputsinicio">
          <Button variant="outline-light" className="inputEntrar1" onClick={handleShow1} >Registrar usuario</Button>{' '}
          <Button variant="outline-light" className="inputEntrar2" onClick={handleShow2} >Tematica</Button>{' '}
          </Container>
          <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                    <Modal.Title>Registros de Usuarios</Modal.Title>
                </Modal.Header>
                <Form  className="modalcontenedorf">
                    <Form.Text className="text-muted"
                    style={{ margin:"25px"}}
                    >
                        Ingrese contraseña para entrar al sitio
                    </Form.Text>
                    <Form.Group className="mb-3" controlId="formBasicPassword"
                    style={{ margin:"25px" }}
                    >
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingrese contraseña" onChange={(e)=>validarContra(e.currentTarget.value)}/>
                        <p style={{ color:"red", marginTop:"2px"}}>{errorP}</p>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    </Form.Group>
                </Form>
                <ModalFooter>
                    <Link href={{pathname:"PaginaRegUsuario"}}>
                        {BotonR}
                    </Link>
                </ModalFooter>s
            </Modal>
            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>¡¡¡ALTO!!!</Modal.Title>
                </Modal.Header>
                <Form  className="modalcontenedorf">
                    <Form.Text className="text-muted"
                    style={{ margin:"25px"}}
                    >
                        Debes primero ingrese contraseña de administrador
                    </Form.Text>
                    <Form.Group className="mb-3" controlId="formBasicPassword"
                    style={{ margin:"25px" }}
                    >
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="email" placeholder="Ingrese nombre" onChange={(e)=>validarVacio(e.currentTarget.value)}/>
                    </Form.Group>
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Ingrese contraseña" onChange={(e)=>validarContra(e.currentTarget.value)}/>
                        <p style={{ color:"red", marginTop:"2px"}}>{errorP}</p>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    </Form.Group>
                </Form>
                <ModalFooter>
                    <Link href={{pathname:"Pagina1", query:{nombre:nom}}}>
                        {BotonR}
                    </Link>
                </ModalFooter>s
            </Modal>
        <div className="contenedorInicio1">
            <div className="contenedorInicio2">
                <img className="imgTitulo" src="https://www.pngall.com/wp-content/uploads/9/Mortal-Kombat-Logo.png" alt="" />
            </div>
        <h1 className="tituloInicio">Mortal Kompany</h1>
        </div>
        </>
    )
}
export default PaginaInicio