/*
  Comando para rodar o programa:
    node main
*/

const clients = require('./clients.mock');

function getSummarizedClientsByName(searchName) {
  let result = [];
  clients.map((client) => {
    if (hasCaseInsensitiveSubstring(client.name, searchName)) {
      result.push(createClientSummary(client));
    }
  });
  return result;
}

function createClientSummary(client) {
  return {
    _id: client._id,
    name: client.name,
    total_enterprises: `${client.enterprises.length}`,
    total_realties: `${getTotalOfRealties(client.enterprises)}`
  }
}

function hasCaseInsensitiveSubstring(string, substring) {
  const stringNormalized = string.toUpperCase();
  const substringNormalized = substring.toUpperCase();
  return stringNormalized.includes(substringNormalized);
}

function getTotalOfRealties(enterprises) {
  let result = 0;
  enterprises.forEach((enterprise) => {
    result = result + parseInt(enterprise.realties);
  });
  return result;
}

console.log(getSummarizedClientsByName('re'));
