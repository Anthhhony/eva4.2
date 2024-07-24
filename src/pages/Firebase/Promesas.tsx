import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc, where, query } from "firebase/firestore"; 
import { db } from "./Firebase";
import { Usuario } from "@/Interface/IUsuario";
import { Usuarioadmin } from "@/Interface/IUsuarioadmin";

// Add a new document with a generated id.
export const registrarUsuario = async(usuario:Usuario) =>{
    const docRef = await addDoc(collection(db, "registro"),usuario) 
    ;
}
export const registrarUsuarioAdmin = async(usuario:Usuarioadmin) =>{
    const docRef = await addDoc(collection(db, "usuario"),usuario) 
    ;
}

export const buscarContraseña = async(password:string) =>{
    let usuarios:Usuarioadmin[] = []
    const q = query(collection(db, "usuario"), where("contraseña", "==", password));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        let usuario:Usuarioadmin = {
            nombre:doc.data().nombre,
            password:doc.data().password,
            key:doc.id
        }
        usuarios.push(usuario)
 })}

export const obtenerUsuarios = async()=>{
    let usuarios:Usuario[] = []
    const querySnapshot = await getDocs(collection(db, "registro"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
        let usuario:Usuario = {
            nombre:doc.data().nombre,
            password:doc.data().password,
            telefono:doc.data().telefono,
            edad:doc.data().edad,
            correo:doc.data().correo,
            tema:doc.data().tema,
            color:doc.data().color,
            comentario:doc.data().comentario,
            key:doc.id
        }
        usuarios.push(usuario)
    });
    return usuarios
}

export const obtenerUsuario = async(key:string)=>{
    const docRef = doc(db, "registro", key);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        let usuario:Usuario = {
            nombre:docSnap.data().nombre,
            password:docSnap.data().password,
            telefono:docSnap.data().telefono,
            edad:docSnap.data().edad,
            correo:docSnap.data().correo,
            color:docSnap.data().color,
            tema:docSnap.data().tema,
            comentario:docSnap.data().comentario,
            key:docSnap.id
        }
        return usuario
    } else {
      return undefined
    }
}
export const actualizarUsuario = async(u:Usuario)=>{
    const ref = doc(db,"registro",u.key!)
    await updateDoc(ref,{...u})
}

export const eliminarUsuario = async(key:string)=>{
    const ref = doc(db,"registro",key!);
    await deleteDoc(ref)
}