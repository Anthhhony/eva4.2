import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { registrarUsuario } from "../styles/Firebase/Promesas";
import { Usuario } from "../Interface/IUsuario";

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

const PaginaRegistro = ()=>{
    const password = (length: number): string =>{
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
        let password = '';
        
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * caracteres.length);
            password += caracteres[randomIndex];
        }
        
        return password;
    }
    const validarVacio = (valor:string)=>{
        if (valor.trim().length == 0){
            seterrorP("No debes dejar el campo vacio")
            setBotonR(<p></p>)
            
            }
        else {
            seterrorP("")
            setBotonR(<Button variant='primary'>Ingresar</Button>)
        }
    }

    const [errorP, seterrorP] = useState("")
    const [BotonR, setBotonR] = useState(<p></p>)
    const [usuario, setusuario] = useState(estadoInicial)


    const handlePersona = (name:string,value:string)=>{
        setusuario({...usuario,[name]:value})
    }


    const registrar = ()=>{
        registrarUsuario(usuario).then(()=>{
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
            <Button type="button" variant="success" onClick={registrar} style={{ width:"100%", paddingBlock:"20px", fontSize:"20px"}}>Registrar</Button>
        </Form>
        </>
    )
}
export default PaginaRegistro