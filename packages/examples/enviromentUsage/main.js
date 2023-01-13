const main = async (args) => {
  return { body: { main: 'working', enviroment: process.env.TEST } };
};

exports.main = main;
