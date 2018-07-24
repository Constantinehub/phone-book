"use strict";

//local .json file
let xhr = new XMLHttpRequest();

xhr.open('GET', 'book.json', false);

xhr.send();

let people = JSON.parse(xhr.responseText);

//generated table content
const table = document.querySelector('table');
table.className = 'table';
const headRow = table.createTHead().insertRow();
const tableBody = table.createTBody();

for(let name in people[0]) {
  headRow.insertCell().textContent = name;
}

for(let i = 0; i < people.length; i++) {
  const bodyRow = tableBody.insertRow();
  for(let val in people[i]) {
    bodyRow.insertCell().textContent = people[i][val];
  }
}


















// let table = document.createElement('table');
// let row = table.insertRow();
//
// for(let key in people[0]) {
//   let th = document.createElement('th');
//   th.innerHTML = key;
//   row.appendChild(th);
// }
//
//
// for(let r = 0; r < people.length; r++) {
//    // debugger;
//   row = table.insertRow(r);
//
//   for(let key in people[r]) {
//     let td = document.createElement('td');
//     td.innerHTML = people[r][key];
//     row.appendChild(td);
//   }
//
//   table.appendChild(row);
// }
//
// document.body.appendChild(table).className = 'table';
