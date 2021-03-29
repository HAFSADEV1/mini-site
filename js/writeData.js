const fs = require('fs');

let obj = { 
dateExpose:"2021-03-23",
Sujet:"adnan",
Tags:"hh",
lien:"h",
Membres:"hhh"
};
 
let data = JSON.stringify(obj);

fs.writeFile('users.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

console.log('This is after the write call');