/**
 * (Mais informações no README)
 * Após o arquivo (ou diretório) necessário estar dentro do .includde, você deve trata-lo como
 * um arquivo você decve acessáço como se ele estivesse dentro de sua função:
 */

const lib = require('./lib/test'); /** contém uma única linha com "module.exports = 'working';" */

const main = async (args) => {
  return {
    body: {
      main: 'working',
      lib,
    },
    statusCode: 200,
  };
};

exports.main = main;
