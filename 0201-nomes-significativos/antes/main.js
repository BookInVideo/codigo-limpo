/*
  Comando para rodar o programa:
    node main
*/

const clients = require('./clients.mock');

function getClientName(name) {
  let array = [];
  clients.map(i => {
    if (i.name.toUpperCase().indexOf(name.toUpperCase()) > -1) {

      let sum = 0;
      i.enterprises.map((j) => {
        sum = sum + parseInt(j.realties);
      });

      array.push({
        _id: i._id,
        name: i.name,
        total_enterprises: `${i.enterprises.length}`,
        total_realties: `${sum}`
      });
    }
  });
  return array;
}

console.log(getClientName('re'));
