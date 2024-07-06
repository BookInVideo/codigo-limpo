
// ANTES
if (i.name.toUpperCase().indexOf(searchName.toUpperCase()) > -1) {
}

// DEPOIS
if (hasCaseInsensitiveSubstring(client.name, searchName)) {
}