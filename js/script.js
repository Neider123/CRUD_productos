$("#verProductos").click(function(event){
    fetch('https://siaweb-nodejs.carlos-reneren7.repl.co/productos')
    .then(response => response.json())
    .then(data => mostrarProductos(data))
    .catch(error => console.log(error))
    
    const mostrarProductos=(data)=>{
        console.log(data)
        let body=''
        for(let i=0;i<data.length;i++){
            body+=`<tr> 
            <td>${data[i].nombre}</td> 
            <td>${data[i].precio}</td>
            <td>${data[i].descripcion}</td>
              <td><button class="btn btn-warning" id="editarUsuarios">Editar</button></td> 
              <td><button class="btn btn-danger" onclick="deleteProductos(${data[i].id}) id="eliminarProductos">Eliminar</button></td>
              </tr>`
        }
        document.getElementById('dataTienda').innerHTML=body
    }
})