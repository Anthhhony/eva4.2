import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { registrarUsuarioAdmin } from "./Firebase/Promesas";
import { Usuarioadmin } from "../Interface/IUsuarioadmin";
import Link from "next/link";

const estadoInicial:Usuarioadmin = {
    nombre:"",
    password:"",
    key:""
}

export const PaginaRegUsuario = ()=>{
        const [usuario, setusuario] = useState(estadoInicial)
        const handlePersona = (name:string,value:string)=>{
        setusuario({...usuario,[name]:value})
    }


    const registrar = ()=>{
        registrarUsuarioAdmin(usuario).then(()=>{
            alert("se logro registrar")
        }).catch((e)=>{
            console.log(e)
            alert("algo ocurrio")
        })
    }
    return (
        <>
        <Form>
            <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su nombre: " 
                name ="nombre"
                onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}} />
                <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingrese contraseña: " 
                name ="password"
                onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}} />
                <Form.Text></Form.Text>
            </Form.Group>
            <Button type="button" variant="success" onClick={registrar} style={{ width:"100%", paddingBlock:"20px", fontSize:"20px", marginTop:"15px"}}>Registrar</Button>
            <Link href={{pathname:"Pagina1"}}>
            <Button type="button" variant="dark" style={{ width:"100%", paddingBlock:"20px", fontSize:"20px", marginTop:"15px"}}>Salir</Button>
            </Link>
        </Form>
        </>
    )
}
export default PaginaRegUsuario