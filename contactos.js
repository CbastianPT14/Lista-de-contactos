// Crea una lista de contactos con datos predefinidos
//cada contacto debe contener el nombre y apellido como una sola cadena de caracteres

let ListaDeContactos = [
    {nombreApellido: "Jhon Perez" },
    {nombreApellido: "Carlos Rodriguez" },
    {nombreApellido: "Sara Arrieta" }, 
    {nombreApellido: "Elena Triviño" },
]

// Acceder a los datos de un contacto en particular

console.log(ListaDeContactos[1].nombreApellido);  //Imprimir "Carlos Rodriguez"
console.log(ListaDeContactos[3].nombreApellido);  // Imprimir "Elena Triviño"       

// Funcion para añadir un nuevo contacto a una lista

let agregarContacto = (contacto) => {
    let objeto = {nombreApellido : contacto}
    ListaDeContactos.push (objeto)
}
agregarContacto("Juan Martinez")
console.log (ListaDeContactos)

// Funcion para borrar un contacto existente de la lista

function borrarContacto(nombre) {
    ListaDeContactos = ListaDeContactos.filter((contacto) => contacto.nombreApellido !== nombre);
    
}
 borrarContacto("Sara Arrieta")
 console.log(ListaDeContactos)

 // Funcion Imprimir Contactos

 function imprimirContactos () {
    ListaDeContactos.forEach ((contacto) =>{
        console.log(contacto.nombreApellido);
    })
 }
 imprimirContactos();







