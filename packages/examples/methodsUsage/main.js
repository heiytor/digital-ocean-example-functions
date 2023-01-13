const main = async (args) => {
  // É possível bloquear o acesso ao endpoint da seguinte maneira
  if (args.__ow_method !== 'get') {
    return {
      body: {
        success: false,
        errors: ['You need to send a request with GET method'],
      },
      statusCode: 400,
    };
  }
  // Se o verbo HTTP estiver correto, execute a função normalmente:

  /**
   * ...Seu código aqui...
   */

  return { body: { success: true } };
};

exports.main = main;
