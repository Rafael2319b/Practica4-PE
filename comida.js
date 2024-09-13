function procesarPedido(pedido) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const exito = Math.random() > 0.2; 
  
        if (exito) {
          resolve(`Pedido de ${pedido} procesado correctamente.`);
        } else {
          reject(`Error al procesar el pedido de ${pedido}.`);
        }
      }, 2000);
    });
  }
  
  procesarPedido("Pizza")
    .then(mensaje => {
      console.log(mensaje);
    })
    .catch(error => {
      console.error(error);
    });
  