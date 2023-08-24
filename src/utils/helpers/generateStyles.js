function generateStyles() {
  return `<style>
    /* Estilos para el cuerpo del correo electrónico */
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
  
    /* Estilos para el contenedor principal */
    .center-container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
    }
  
    /* Estilos para el rectángulo exterior */
    .outer-rectangle {
      display: flex;
      width: 100%;
      background-color: #ED4998;
      padding: 20px;
      border-radius: 10px;
    }
  
    /* Estilos para el rectángulo interior */
    .inner-rectangle {
      background-color: #ffffff;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-right: auto;
      margin-left: auto;
    }
  
    /* Estilos para el mensaje */
    .message {
      text-align: center;
    }
  
    /* Estilos para el título */
    .title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
    }
  
    /* Estilos para los detalles del ingreso */
    .income-details {
      font-size: 16px;
      margin-top: 20px;
    }
  
    /* Estilos para los detalles individuales */
    .detail {
      margin-bottom: 10px;
    }
  
    /* Estilos para la firma */
    .signature {
      margin-top: 20px;
      font-style: italic;
      text-align: center;
    }
  </style>`;
}

module.exports = { generateStyles };
