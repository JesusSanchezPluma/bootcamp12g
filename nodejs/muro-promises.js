function construir (muro) {
    //Resultado de la funcion
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            muro.construido = true;
            if(muro.construido){
                resolve( muro );
            } else {
                const error =  new Error("No se pudo contruir el muro");
                reject(error);
            }
        },3000);
    });
}

const promesaDeConstruccion = construir({});

promesaDeConstruccion
    .then( ( muroConstruido ) => {
        console.log('muroConstruido:',muroConstruido);
    })
    .catch( ( error ) => { 
        console.error("Ocurrio un error:", error)
    })

function aplanar(muro) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            muro.aplanado=true;
            if(muro.aplanado){
                resolve(muro);
            }else{
                reject("No se aplano el muro");
            }
        },4000)
    })
}

const promesaDeAplanado = aplanar({});

promesaDeAplanado
    .then(( muroAplanado )=>{
        console.log("muroAplanado:", muroAplanado);
    })
    .catch(( error )=>{
        console.error(error)
    })