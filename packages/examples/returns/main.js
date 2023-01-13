const main = async (args) => {
  /**
   * Você pode retornar coisas além de um simples JSON desse jeito:
   */
  return {
    // Dentro do objeto headers, você retorna a header da requisição
    headers: {
      // Redirects:
      location: 'https://example.com',
      // Cookies:
      'Set-Cookie': 'UserID=Jane; Max-Age=3600; Version=',
      /** Content-type:
       * Você pode enviar HTML assim:
       * 'Content-Type': 'text/html',
       *
       * Você também pode enviar arquivoss em base64:
       * 'Content-Type: 'image/png'
       * No body, envie o texto.
       */
    },

    // statusCode representa o status da resposta, por padrão é enviado um 200
    statusCode: 200 /* Ou qualquer outro status válido */,

    // O corpo da resposta em JSON ** SEMPRE ** vai no body:
    body: {
      /* ...params... */
    },

    // Você pode retornar HTML usando o objeto body ** Leia o objeto headers **
    // body: '<html><body><h1>Html aqui</h1></body></html>',
  };
  // ** APENAS O "BODY" É OBRIGÁTORIO **
};

exports.main = main;
