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

// Almacenar info

  // Función para agregar la información completa de un contacto
  function agregarInformacionContacto(indice, id, nombres, apellidos, telefono, ciudad, direccion) {
    ListaDeContactos[indice] = {
      id: id,
      nombres: nombres,
      apellidos: apellidos,
      telefono: telefono,
      ubicaciones: {
        ciudad: ciudad,
        dirección: direccion
      },
      nombreApellido: ListaDeContactos[indice].nombreApellido // Conservamos la propiedad existente
    };
  }
  
  // agregar la información completa de un contacto
  agregarInformacionContacto(0, 1, "Jhon", "Perez", "123456789", "Bogota", "Calle 123 sur 2");
  agregarInformacionContacto(1, 2, "Carlos", "Rodriguez", "3035674335", "Cali", "Calle 46 a norte");
  agregarInformacionContacto(2, 3, "Sara", "Arrieta", "32424242424", "Medellin", "Avenida bolivar 23 f");
  agregarInformacionContacto(3, 4, "Elena", "Triviño", "31616161616", "Bogota", "Zona rosa");
  
  //lista de contactos actualizada con toda la información
  console.log(ListaDeContactos);
 // Funcion Imprimir Contactos

 function imprimirContactos () {
    ListaDeContactos.forEach ((contacto) =>{
        console.log(contacto.nombreApellido);
    })
 }
 imprimirContactos();

// Avance 2






