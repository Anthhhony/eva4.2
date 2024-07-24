import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Usuario } from "../Interface/IUsuario";
import { Button, Form } from "react-bootstrap";
import { actualizarUsuario, obtenerUsuario } from "./Firebase/Promesas";
import Link from "next/link";

const estadoInicial:Usuario = {
    comentario:"",
    correo:"",
    edad:0,
    nombre:"",
    password:"",
    telefono:0,
    tema:"",
    color:"",
    key:""
}

export const PaginaActualizar = ()=>{
    const router = useRouter()
    const [usuario, setusuario] = useState<Usuario>(estadoInicial)

    const handlePersona = (name:string,value:string)=>{
        setusuario({...usuario,[name]:value})
    }

    const actualizar = ()=>{
        actualizarUsuario(usuario).then(()=>{
            alert("se actualiza con exito")
        })
    }

    useEffect(()=>{
        const key = router.query.key;
        if (key!=undefined && typeof(key)=="string"){
            obtenerUsuario(key).then((p)=>{
                if(p!=undefined){
                    setusuario(p)
                }
                else{
                    //Volver a la tabla
                }
            })
        }
        else{
            //Volver a la tabla
        }
    },[])
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
            <Form.Group>
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su correo: " 
                name ="correo"
                onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}} />
                <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" placeholder="Ingrese su telefono " 
                name ="telefono"
                onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}} />
                <Form.Text></Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Edad</Form.Label>
                <Form.Control type="number" placeholder="Ingrese su edad: " 
                name ="edad"
                onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}} />
                <Form.Text></Form.Text>
            </Form.Group>
            <Form.Label>Tema</Form.Label>
            <Form.Check // prettier-ignore
                type="radio"
                id="custom-switch"
                name="tema"
                value="oscuro"
                label="Tema oscuro"
                onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}
            />
            <Form.Check // prettier-ignore
                type="radio"
                name="tema"
                label="Tema claro"
                value="claro"
                onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}
                id="custom-switch"
            />
            <Form.Label>Color</Form.Label>
            <Form.Select aria-label="Default select example" name="color" onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}>
                <option>...</option>
                <option value="Rojo">Rojo</option>
                <option value="Verde">Verde</option>
                <option value="Azul">Azul</option>
            </Form.Select>
            <Form.Group>
                <Form.Label>Comentario</Form.Label>
                <Form.Control name="comentario" as="textarea" rows={3} placeholder="Deja tu comentario" onChange={(e)=>{handlePersona(e.currentTarget.name,e.currentTarget.value)}}/>
            </Form.Group>
            <Link href={{pathname:"PaginaTabla"}}>
            <Button type="button" variant="success" onClick={actualizar} style={{ width:"100%", paddingBlock:"20px", fontSize:"20px"}}>Registrar</Button>
            </Link>
        </Form>
        </>
    )
}
export default PaginaActualizar