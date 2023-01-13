/**
 * A função a ser executada sempre vai dentro de uma função chamada "main".
 */

// URL https://url.aqui/?query=0
const main = (args) => {
  /**
   * O paramêtro "args" representa um objeto com o request da requisição.
   * A variavel enviada "query", por exemplo, repesenta o valor '0'.
   * Podemos capturar a variável do seguinte jeito:
   */
  const query = args.variavel;
  /**
   * Dentro do objeto "args" vem também outras coisas úteis:
   * headers -> args.__ow_headers
   * path -> args.__ow_path
   * http verb -> args.__ow_method
   */
  return {
    body: {
      /* retorne um JSON aqui */
      query,
    },
  };
};

// Exporta a variação main para que a action seja executada
exports.main = main;
