const urlApi = "https://gedc07c6509dfcc-dbg5equipo1.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/api/reto1"

function peticionGet(){
    $.ajax({
        type: 'GET',
        url: urlApi,
        dataType: 'json',
        success: function (data) {
            console.log(data)
        },
        error: function(xhr, status){
            console.log("no se pudo consumir la api"+ xhr.status + " " + status)
        },
        complete: function(xhr, status){
            console.log("Peticion exitosa")
        }
    })
}

function peticionPost(codprode, nomprode, precioe, inventarioe){
    $.ajax({
        type: 'POST',
        url: urlApi,
        dataType: 'json',
        data:{
            codprod:codprode,
            nomprod:nomprode,
            precio: precioe,
            inventario:inventarioe
        },
        success: function (data) {
            console.log("Registro guardado con exito")
            
        },
        error: function(xhr, status){
            if(xhr.status == 555){
                console.log('Registro existe')
            }else if(xhr.status == 201){
                console.log('Guardado registro con exito')
            }
        },
        complete: function(xhr, status){
            console.log("Peticion exitosa")
        }
    });
    peticionGet();
}

function peticionPut(codprode, nomprode, precioe, inventarioe){
    $.ajax({
        type: 'PUT',
        url: urlApi,
        dataType: 'json',
        data:{
            codprod:codprode,
            nomprod:nomprode,
            precio: precioe,
            inventario:inventarioe
        },
        success: function (data) {
            console.log("Registro editado con exito")
            
        },
        error: function(xhr, status){
            if(xhr.status == 555){
                console.log('Registro existe')
            }else if(xhr.status == 201){
                console.log('Guardado registro con exito')
            }
        },
        complete: function(xhr, status){
            console.log("Peticion exitosa")
        }
    });
}
